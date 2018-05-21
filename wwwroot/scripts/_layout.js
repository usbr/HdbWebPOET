/** add active class and stay opened when selected */
var url = window.location;
var hdbApiUrl = 'http://ibr3lcrsrv02.bor.doi.net';

// SET ACTIVE SIDEBAR ITEM
// for sidebar menu entirely but not cover treeview
$('ul.sidebar-menu a').filter(function () {
    return this.href == url;
}).parent().addClass('active');

// for treeview
$('ul.treeview-menu a').filter(function () {
    return this.href == url;
}).parentsUntil(".sidebar-menu > .treeview-menu").addClass('active');

// for log-in
function hdbConnect() {
    var selectedHdb = document.getElementById('logInHDB').value
    var selectedUser = document.getElementById('logInUser').value
    var selectedPass = document.getElementById('logInPass').value
    var guestLogIn = document.getElementById('guest-login-checkbox').checked
    if (guestLogIn) {
        selectedUser = 'app_user';
        selectedPass = selectedHdb;
    }
    $.ajax({
        type: "GET",
        url: hdbApiUrl + "/connect?"
        + 'hdb=' + selectedHdb
        + '&username=' + selectedUser
        + '&password=' + selectedPass,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function OnSuccess(data, response) {
            //console.log(data);
            //var resp = JSON.parse(data);
            document.getElementById("login-text-helper").textContent = response + ' | ' + data[0].username.toLowerCase();
            document.getElementById("connected-hdb-user").textContent = data[0].username.toLowerCase();
            document.getElementById("connected-hdb-name").textContent = selectedHdb;
            document.getElementById("connected-hdb-status").textContent = ' Online';
            //alert(response + ' | ' + data[0].username);
        },
        failure: function (response) {
            document.getElementById("login-text-helper").textContent = 'Log-In failed, try again later...';
            //alert('Log-In failed, try again later...');
        },
        error: function (xhr, statusText, err, response) {
            var resp = JSON.parse(xhr.responseText);
            document.getElementById("login-text-helper").textContent = 'Error: ' + resp.message;
            document.getElementById("connected-hdb-user").textContent = 'Guest';
            document.getElementById("connected-hdb-name").textContent = 'XXHDBX';
            document.getElementById("connected-hdb-status").textContent = ' Offline';
            //alert("Error: " + resp.message);
        }
    });
}
