var NavBarLink = React.createClass({
  render: function() {
    return (
      <a href={this.props.url}>{this.props.text}</a>
    );
  }
})


[
 {
  "text": "THE TEXT OF YOUR LINK",
  "url": "http://THE.URL"
 },
 {
  "text": "THE TEXT OF YOUR LINK",
  "url": "http://THE.URL",
  "submenu": [
      {
      "text": "THE TEXT OF YOUR LINK",
      "url": "http://THE.URL"
      }
  ]
 }
]
