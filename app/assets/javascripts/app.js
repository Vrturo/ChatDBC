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
  return user;
};

App.isLoggedIn = function(){
  return this.currentUser() != null

};

