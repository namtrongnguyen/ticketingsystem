#https://www.lfd.uci.edu/~gohlke/pythonlibs/#mysqlclien
# t to download
#install by "pip install mysqlclient-1.4.6-cp38-cp38-win32.whl"
import MySQLdb
import json
import getpass
#Get userlogin
username = getpass.getuser()

from datetime import date, datetime

class DateTimeEncoder(json.JSONEncoder):
    def default(self, obj):
        try:
            return super(DateTimeEncoder, obj).default(obj)
        except TypeError:
            return str(obj)

class Database():

    def db(self):
        db = MySQLdb.connect(host="localhost",  # your host 
                            user="ticketsystem",       # username
                            passwd="123456",     # password
                            db="ticketingsystem")   # name of the database
        return db
    
    def queryall(self):
        database = self.db()
        # Create a Cursor object to execute queries.
        cur = database.cursor()
        # Select data from table using SQL query.
        cur.execute("SELECT * FROM queue")
        # Get the field name
        row_headers=[x[0] for x in cur.description]
        # Get row 
        rows = cur.fetchall()
        # Convert to JSON
        json_data=[]
        for row in rows:
            json_data.append(dict(zip(row_headers,row)))      
        # Close Database
        database.close()
        return json.dumps(json_data, cls=DateTimeEncoder)

    def createnewticket(self, data):
        title = data['title']
        description = data['description']
        status = "assigned"
        severity = data['severity']
        requester = username
        assignee = data['assignee']
        database = self.db()
        # Create a Cursor object to execute queries.
        try:
            cur = database.cursor()
            # Select data from table using SQL query.
            cur.execute("INSERT INTO queue (title, description, status, severity, requester, assignee) VALUES('"+ title +"', '"+ status +"','"+ description +"', '"+ severity +"', '"+ requester +"', '"+ assignee +"');")
            database.commit()
        except:
            database.rollback()
        finally:
            database.close()
        
        return "Create New Record Successful"

    def updateticket(self, data):
        return "Update Successful"