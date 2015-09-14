App = {};

App.firebase = new Firebase("https://chatdbc.firebaseio.com");

App.login = function(){
  this.firebase.authWithOAuthPopup("github", function(error){
    if (error) {
      alert("Authentication Failed! "+error);
    }
    App.rerender();
  });
};

App.logout = function() {
  App.firebase.unauth();
  App.rerender();
};


App.currentUser = function(){
  var authData = App.firebase.getAuth();
  if (!authData) return null;
  var user = {};
  user.name  = authData.github.displayName;
  user.email = authData.github.email;
  user.githubId = authData.github.id;
  user.profileImageURL = authData.github.profileImageURL;
  user.token = authData.github.token;

  return user;
};

App.isLoggedIn = function(){
  return this.currentUser() != null
};

var messagesRef = new Firebase("https://chatdbc.firebaseio.com");

  // REGISTER DOM ELEMENTS
  var messageField = this.document.getElementById("messageInput");
  var nameField = document.getElementById("nameInput");
  var messageList = document.getElementById("example-messages");

  // LISTEN FOR KEYPRESS EVENT
  messageField.keypress(function (e) {
    if (e.keyCode == 13) {
      //FIELD VALUES
      var username = nameField.val();
      var message = messageField.val();

      //SAVE DATA TO FIREBASE AND EMPTY FIELD
      messagesRef.push({name:username, text:message});
      messageField.val('');
    }
  });

  // Add a callback that is triggered for each chat message.
  messagesRef.limitToLast(10).on('child_added', function (snapshot) {
    //GET DATA
    var data = snapshot.val();
    var username = data.name || "anonymous";
    var message = data.text;

    //CREATE ELEMENTS MESSAGE & SANITIZE TEXT
    var messageElement = $("<li>");
    var nameElement = $("<strong class='example-chat-username'></strong>")
    nameElement.text(username);
    messageElement.text(message).prepend(nameElement);

    //ADD MESSAGE
    messageList.append(messageElement)

    //SCROLL TO BOTTOM OF MESSAGE LIST
    messageList[0].scrollTop = messageList[0].scrollHeight;
  });
