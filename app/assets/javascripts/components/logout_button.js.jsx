var LogoutButton = React.createClass({
  onClick: function(event) {
    event.preventDefault();
    App.logout();
    setLoginBackground();
  },
  render: function() {
    return <button onClick={this.onClick}>{this.props.children}</button>;
  }
});

var setLoginBackground = function(){
 document.getElementById("homePageBackground").id = ("loginBackground");
}
