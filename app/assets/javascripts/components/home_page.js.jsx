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
            <div class="example-chat l-demo-container">
              <div class='example-chat-toolbar'>
                <label for="nameInput">Username:</label>
                <input type='text' id='nameInput' placeholder='enter a username...' />
              </div>

              <ul id='example-messages' class="example-chat-messages"></ul>

              <footer>
                <input type='text' id='messageInput'  placeholder='Type a message...' />
              </footer>
            </div>
          </homePageWrapper>
  }
})

