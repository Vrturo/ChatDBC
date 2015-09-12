var AppComponent = React.createClass({

  rerender: function(){ this.forceUpdate(); },

  componentDidMount: function(){
    App.rerender = this.rerender;
  },

  render: function() {
    if (App.isLoggedIn()){
      var currentUser = App.currentUser();
      return <HomePage currentUser={currentUser} />
    }else{
      return <LoginPage />
    }
  }
});




// history.pushState
// history.replaceState

// addEventListener('popstate', function(event) {
//   console.log('popstate fired!');
//   updateContent(event.state);
// });
