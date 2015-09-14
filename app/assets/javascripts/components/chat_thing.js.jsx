ChatThing = React.createClass({

  getInitialState: function(){
    return{
      messages: [],
    }
  },

  componentDidMount: function(){
    App.firebase.on('child_added', this.onChildAdded);
  },

  componentWillUnmount: function(){
    App.firebase.off('child_added', this.onChildAdded);
  },

  onChildAdded: function(message){
    message = message.val();
    var messages = this.state.messages;
    messages.push(message);
    this.setState({messages:messages});
  },

  onSubmit: function(event){
    event.preventDefault();
    var name    = this.refs.name.getDOMNode().value;
    var message = this.refs.message.getDOMNode().value;

    this.refs.message.getDOMNode().value = '';

    App.sendMessage(name, message);
    // console.log([name, message]);
  },
  render: function(){
    var messages = this.state.messages.map(function(message){
      return <li>
        <bold>{message.name}</bold>&nbsp;
        <span>{message.text}</span>
      </li>;
    });
    return <div className="ChatThing">
      <ol>{messages}</ol>
      <form onSubmit={this.onSubmit}>
        <input ref="name"    type="text" placeholder="your name" />
        <input ref="message" type="text" placeholder="your messages" />
        <input type="submit" className="hidden" />
      </form>
    </div>
  }
})
