var LoginButton = React.createClass({

  onClick: function(event) {
    event.preventDefault();
    App.login();
    setHomepageBackground();
    eraseHeader();
  },
  render: function() {
    return <button onClick={this.onClick}>{this.props.children}</button>;
  }
});

var setHomepageBackground = function(){
 index = document.getElementById("loginBackground");
 index.id = ("homePageBackground ");
}

var eraseHeader = function(){
 document.getElementById("chatdbc").remove();
}
