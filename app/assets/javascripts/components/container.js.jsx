Container = React.createClass({
  render: function(){
    var props = Object.assign({}, this.props);
    props.className = 'Container '+props.className
    return React.createElement('div', props);
  }
});

