var AppComponent = React.createClass({
  rerender: function(){ this.forceUpdate(); },

  componentDidMount: function(){
    App.rerender = this.rerender;
  },

  render: function() {
    var currentUser = App.currentUser();
    if (App.isLoggedIn()){
      return <HomePage currentUser={currentUser} />

    }else{
      return <LoginPage />
    }
  }
});
