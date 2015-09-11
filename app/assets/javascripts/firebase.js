console.log('22222')

$(function() {

  var ref = new Firebase("https://chatdbc.firebaseio.com");

  var afterOauth = function(error, authData) {
    if (error) {
      alert("Authentication Failed! "+error);
    } else {

      login(authData);
    }
  };

  // var login = function(authData){
  //   debugger

  //   var request = $.ajax({
  //     url: '/login',
  //     data:{

  //     }
  //   })
  //   request.done(function(){

  //   })
  //   request.fail(function(){

  //   })
  // }

  $('#loginLink').on('click', function (e){
    e.preventDefault();
    console.log('login cloicked')
    ref.authWithOAuthPopup("github", afterOauth);
  });

});
