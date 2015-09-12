HomePage = React.createClass({
  propTypes: {
    currentUser: React.PropTypes.object.isRequired
  },

  render: function(){
    var currentUser = this.props.currentUser;
    return <div>
      <h1>Welcome back {currentUser.name}</h1>
      <LogoutButton>Click here to logout brah</LogoutButton>
    </div>;
  }
})
