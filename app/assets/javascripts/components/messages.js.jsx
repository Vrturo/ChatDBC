// var messagesContainer = React.createClass({
//   render: function() {
//     var createMessage = function(messageText) {
//       return {messageText};
//     };
//     return {this.props.messages.map(createMessage)};
//   }
// });
// var message = React.createClass({
//   getInitialState: function() {
//     return {messages: [], text: ''};
//   },
//   onChange: function(e) {
//     this.setState({text: e.target.value});
//   },
//   handleSubmit: function(e) {
//     e.preventDefault();
//     var nextMessage = this.state.text.concat([this.state.text]);
//     var nextText = '';
//     this.setState({text: nextText, text: nextText});
//   },
//   render: function() {
//     return (
//       <div id="messageWrapper">
//         <h3>Messages</h3>
//         <div id='messagesDiv'></div>
//         <messageContainer text={this.state.text} />
//         <form onSubmit={this.handleSubmit}>
//           <input onChange={this.onChange} value={this.state.text} />
//           <button></button>
//         </form>
//       </div>
//     );
//   }
// });


// React.render(<message />, document.getElementById("box"));
