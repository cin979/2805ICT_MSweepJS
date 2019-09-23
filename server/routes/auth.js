function userAuth(username, password) {
  for(var currentUserIndex = 0; currentUserIndex < data.users.length; currentUserIndex++) {
    if(username === data.users[currentUserIndex].username) {
      if(password === data.users[currentUserIndex].password) {
        var currentUser = data.users[currentUserIndex];
        currentUser.password = null;
        currentUser.valid = true;
        JSON.stringify(currentUser);
        sessionStorage.setitem("currentUser", currentUser);
        var temp = JSON.parse(sessionStorage.getitem("currentUser"));
      }
    }
  }
}
