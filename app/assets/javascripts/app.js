App = {};

App.firebase = new Firebase("https://chatdbc.firebaseio.com");

// App.login = function(){

// };

App.login = function(){
  this.firebase.authWithOAuthPopup("github", function(error, authData){
    if (error) {
      alert("Authentication Failed! "+error);
    } else {
      App.authData = authData;
    }
    App.rerender();
  });
};

App.currentUser = function(){
  if (!this.authData) return null;
  var user = {};
  user.name  = this.authData.github.displayName;
  user.email = this.authData.github.email;
  user.githubId = this.authData.github.id;
  user.profileImageURL = this.authData.github.profileImageURL;
  return user;
};
App.isLoggedIn = function(){
  return this.currentUser() != null
};
