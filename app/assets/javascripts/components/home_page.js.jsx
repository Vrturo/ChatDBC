HomePage = React.createClass({
  propTypes: {
    currentUser: React.PropTypes.object.isRequired
  },

  render: function(){
    var currentUser = this.props.currentUser;
    return <homePageWrapper>
              <homePageContainer>
                <h1>Hello {currentUser.name}</h1>
                <img id="profilePic" src={currentUser.profileImageURL} />
                <LogoutButton>Log Out!</LogoutButton>
              </homePageContainer>

          </homePageWrapper>
  }
})

