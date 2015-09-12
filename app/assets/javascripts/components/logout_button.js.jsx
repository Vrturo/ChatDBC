var LogoutButton = React.createClass({

  onClick: function(event) {
    event.preventDefault();
    App.logout();
  },

  render: function() {
    return <button onClick={this.onClick}>{this.props.children}</button>;
  }
});
