Layout = React.createClass({
  render: function(){
    var props = Object.assign({}, this.props);
    props.className = 'Layout '+props.className
    return React.createElement('div', props);
  }
});

