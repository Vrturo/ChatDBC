HomePage = React.createClass({
  propTypes: {
    currentUser: React.PropTypes.object.isRequired
  },

  render: function(){
    var currentUser = this.props.currentUser;

    return <Layout className="HomePage">
      <div>
        <h1>Hello {currentUser.name}</h1>
        <img id="profilePic" src={currentUser.profileImageURL} />
        <ChatThread />
        <VisitorCount />
        <LogoutButton>Log Out!</LogoutButton>
      </div>
    </Layout>
  }
})
