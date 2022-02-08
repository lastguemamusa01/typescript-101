var UserRole;
(function (UserRole) {
    UserRole["Administrator"] = "admin";
    UserRole["Manager"] = "manager";
})(UserRole || (UserRole = {}));
function loadUser() {
    return JSON.parse('{ "name": "john", "role": "admin" }');
}
var user = loadUser();
switch (user.role) {
    case UserRole.Administrator:
        console.log('Show control panel');
        break;
    case UserRole.Manager:
        console.log('Hide control panel');
        break;
}
