var LoginButton = React.createClass({

  onClick: function(event) {
    event.preventDefault();
    App.login();

  },
  render: function() {
    return <button onClick={this.onClick}>{this.props.children}</button>;

  }
});
