let queuetable;

function navigationbar() {
document.getElementById('navigationbar').innerHTML = `
<nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="/"><img src="/favicon.png"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">

            <li>
                <div class="form-inline">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                    <button id="searchbtn" class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </div>
            </li>

            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Help</a>
                <div class="dropdown-menu" aria-labelledby="dropdown01">
                    <a class="dropdown-item" href="#">Our Wiki</a>
                </div>
            </li>

        </ul>
        <div class="form-inline my-3 my-lg-0">
            <img class="mr-sm-2" width="30px" src="https://internal-cdn.amazon.com/badgephotos.amazon.com/?uid=` + document.getElementById('username').value + `"
        </div>
    </div>
</nav>
`;
}

function main() {
document.getElementById('main').innerHTML = `
<div class="starter-template">

    <div class="row">
        <div class="col-auto">
            <button class="btn btn-primary" data-toggle="modal" data-target="#newmodal">New Ticket</button>
        </div>
        <div class="col-auto">
            <span class="nav-item" id="message"></span>
        </div>
    </div>

    <br/>
    <div class="table-responsive" style="padding-top: 10px">
        <table id="queue" class="table table-dark table-sm table-striped table-hover" width="100%">
            <thead class="thead-dark">
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Status</th>
                <th>Description</th>
                <th>Severity</th>
                <th>Requester</th>
                <th>Assignee</th>
                <th>Creation Date</th>
                <th>Last Update</th>
                <th><span class="oi oi-menu"></span></th>
            </tr>
            </thead>
            <tbody>
            
            </tbody>
        </table>
    </div>
</div>
`;
}

function loadmodal() {
    document.getElementById('modal').innerHTML = `

    <div class="modal fade bd-example-modal-lg" id="newmodal" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header bg-dark text-white">
              <h5 class="modal-title" id="exampleModalLabel">
              <img src="favicon.png" width="30px" class="d-inline-block align-top" alt=""> New Ticket</h5>
              <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-dark text-white">Status</span>
                    </div>
                    <input id="newstatus" class="form-control" value="Assigned" disabled>
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-dark text-white">Severity</span>
                    </div>
                    <select id="newseverity" class="form-control">
                        <option value="" disabled selected>Click to select Severity</option>
                        <option value="5">5 - Lowest</option>
                        <option value="4">4 - Personal Impacted</option>
                        <option value="3">3 - Group Impacted</option>
                        <option value="2">2 - Customer Impacted</option>
                        <option value="1">1 - Business Impacted</option>
                    </select>
                </div>
            
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-dark text-white">Requester</span>
                    </div>
                    <input id="newrequester" type="text" class="form-control" disabled>
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-dark text-white">Assignee</span>
                    </div>
                    <input id="newassignee" type="text" class="form-control" placeholder="@Alias">
                </div>

                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-dark text-white">Title</span>
                    </div>
                    <input id="newtitle" type="text" class="form-control" placeholder="Input ticket title ...">
                </div>
                
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-dark text-white">Description</span>
                    </div>
                    <textarea rows="10" id="newdescription" type="text" class="form-control" placeholder="Ticket Description ..."></textarea>
                </div>
                
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" id="newbtn">Create</button>
            </div>
          </div>
        </div>
    </div>
    
    <div class="modal fade bd-example-modal-lg" id="updatemodal" data-backdrop="static" data-keyboard="false">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header bg-dark text-white">
              <h5 class="modal-title" id="exampleModalLabel">
              <img src="favicon.png" width="30px" class="d-inline-block align-top" alt=""> Update Ticket</h5>
              <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                            <span class="input-group-text bg-dark text-white">ID</span>
                    </div>
                    <input id="updateid" type="text" class="form-control" placeholder="Request ID" disabled>
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-dark text-white">Status</span>
                    </div>
                    <select id="updatestatus" class="form-control">
                        <option value="" disabled selected>Click to select Status</option>
                        <option value="assigned">Assigned</option>
                        <option value="pending">Pending</option>
                        <option value="resolved">Resolved</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>
            
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-dark text-white">Requester</span>
                    </div>
                    <input id="updaterequester" type="text" class="form-control" disabled>
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-dark text-white">Assignee</span>
                    </div>
                    <input id="updateassignee" type="text" class="form-control" placeholder="@Alias">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-dark text-white">Severity</span>
                    </div>
                    <select id="updateseverity" class="form-control">
                        <option value="" disabled selected>Click to select Severity</option>
                        <option value="5">5 - Lowest</option>
                        <option value="4">4 - Personal Impacted</option>
                        <option value="3">3 - Group Impacted</option>
                        <option value="2">2 - Customer Impacted</option>
                        <option value="1">1 - Business Impacted</option>
                    </select>
                </div>

                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-dark text-white">Title</span>
                    </div>
                    <input id="updatetitle" type="text" class="form-control" placeholder="Input ticket title ...">
                </div>
                
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-dark text-white">Description</span>
                    </div>
                    <textarea rows="10" id="updatedescription" type="text" class="form-control" placeholder="Ticket Description ..."></textarea>
                </div>
                
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal" id="updatebtn">Update</button>
            </div>
          </div>
        </div>
    </div>
    `;

    document.getElementById('newrequester').value = document.getElementById('username').value;
}

window.addEventListener('load', function() {
    navigationbar();
    main();
    loadmodal();
    buttonhandler();
});

function buttonhandler() {
    document.getElementById('newbtn').onclick = function() {
        payload = {
            "title" : document.getElementById('newtitle').value,
            "description" : document.getElementById('newdescription').value,
            "severity" : document.getElementById('newseverity').value,
            "assignee" : document.getElementById('newassignee').value
        }
        document.getElementById('message').innerHTML = `<span class="spinner-border spinner-border-sm" role="status"></span> loading ....`
        newrecord(JSON.stringify(payload));
    }

    document.getElementById('searchbtn').onclick = function() {
        document.getElementById('message').innerHTML = `<span class="spinner-border spinner-border-sm" role="status"></span> loading ....`
        getall();
    }

    $('#queue tbody').on('click', 'tr', function () {
        $(this).addClass("bg-secondary text-white").siblings().removeClass("bg-secondary text-white");
        let objectrow = queuetable.row(this).data();
    });
}

// XHR API Function
function apicall(url, method, body) {
    //let csrf_token = document.getElementById('csrf_token').value;
    
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      
      xhr.onload = function() {
        resolve(this.responseText);
      };
      xhr.onerror = reject;
      xhr.open(method, url);
      //xhr.setRequestHeader("X-CSRFToken", csrf_token);
      xhr.send(body);
    });
}

// API CALL to ADD new Record
function newrecord(data) {
    apicall("/new", "POST", data)
    .then(function(result) {
        document.getElementById('message').innerHTML = `<span class="badge badge-success">New ticket is created</span>`;
    })
    .catch(function(e) {
        document.getElementById('message').innerHTML = `<span class="badge badge-danger">An error has occured: ` + e + `</span>`;
    });
}

// API CALL to GET ALL record
function getall() {
    apicall("/all", "GET", null)
    .then(function(result) {
        let json = JSON.parse(result);
        displaytable(json)
        document.getElementById('message').innerHTML = `<span class="badge badge-success">Table updated</span>`;
    })
    .catch(function(e) {
        document.getElementById('message').innerHTML = `<span class="badge badge-danger">An error has occured: ` + e + `</span>`;
    });
}

function displaytable(payload) {
    $("#queue").dataTable().fnDestroy();
    queuetable = $('#queue').DataTable({
        order: [[ 0, 'asc' ]],
        data : payload,
        "columns": 
        [
            { data : 'id'},
            { data : 'title'},
            { data : 'status'},
            { data : 'description'},
            { data : 'severity'},
            { 
                data : 'requester',
                render: function ( data ) {
                    let url = "https://phonetool.amazon.com/users/";
                    let alias = data;
                    let aliasurl = url + alias;
                    let imagewithlink = "<a src='" + aliasurl + "'><img src='https://internal-cdn.amazon.com/badgephotos.amazon.com/?uid=" + data + "' width='21px'></a>";
                    return imagewithlink + " " + alias;
                }
            }, // requester
            { 
                data : 'assignee',
                render: function ( data ) {
                    let url = "https://phonetool.amazon.com/users/";
                    let alias = data;
                    let aliasurl = url + alias;
                    let imagewithlink = "<a src='" + aliasurl + "'><img src='https://internal-cdn.amazon.com/badgephotos.amazon.com/?uid=" + data + "' width='21px'></a>";
                    return imagewithlink + " " + alias;
                }
            }, // assignee
            { data : 'creationdate'},
            { data : 'lastupdate'},
            { 
                data : null,
                render: function ( data ) {
                    return `<a href="#" class="badge badge-primary" data-toggle="modal" data-target="#updatemodal">Update</a>`
                }
            }
        ]
    });
}