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

var listApp = React.createClass({
  componentWillMount: function() {
    this.firebaseRef = new Firebase("chatdbc.firebaseapp.com/");
    this.firebaseRef.on("child_added", function(dataSnapshot) {
      this.items.push(dataSnapshot.val());
      this.setState({
        items: this.items
      });
    }.bind(this));
  }
})
