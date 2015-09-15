ChatThread = React.createClass({

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
    var message = this.refs.message.getDOMNode().value;
    var name = App.currentUser().name

    this.refs.message.getDOMNode().value = '';

    App.sendMessage(name, message);
  },
  render: function(){
    var messages = this.state.messages.map(function(message){
      return <li>
        <bold>{message.name}:</bold>&nbsp;
        <span>{message.text}</span>
        </li>;
    });
    return <div className="ChatThread">
        <ol>{messages}</ol>
        <form onSubmit={this.onSubmit}>
          <input ref="message" type="text" placeholder="Insert message.." />
          <input type="submit" className="hidden" />
        </form>
      </div>
  }
})
