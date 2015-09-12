var AppComponent = React.createClass({

  rerender: function(){ this.forceUpdate(); },

  componentDidMount: function(){
    App.rerender = this.rerender;
  },

  render: function() {
    var user = App.currentUser();

    if (App.isLoggedIn()){
      return <div>
        <h1>Welcome back {user.name}</h1>
      </div>;
    }else{
      return <div>
        <h1>the app component</h1>
        <LoginButton>Click here to login fool</LoginButton>
      </div>;
    }
  }
});


// history.pushState
// history.replaceState

// addEventListener('popstate', function(event) {
//   console.log('popstate fired!');
//   updateContent(event.state);
// });
