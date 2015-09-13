var LogoutButton = React.createClass({
  onClick: function(event) {
    event.preventDefault();
    App.logout();
    setloginBackground();
  },
  render: function() {
    return <button onClick={this.onClick}>{this.props.children}</button>;
  }
});

var setloginBackground = function(){
 index = document.getElementById("homePageBackground ");
 index.id = ("loginBackground");
}
