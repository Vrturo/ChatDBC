HomePage = React.createClass({
  propTypes: {
    currentUser: React.PropTypes.object.isRequired
  },

  render: function(){
    var currentUser = this.props.currentUser;
    return <homePageContainer>
      <h1>Welcome back {currentUser.name}</h1>
      <LogoutButton>Log Out!</LogoutButton>
    </homePageContainer>;
  }
})

