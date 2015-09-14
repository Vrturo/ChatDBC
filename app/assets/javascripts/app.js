var App = React.createClass({

  render() {
    return <div>
              <AddNote />
              <NoteList />
           </div>
    )
  }
})

React.render(<App />, document.getElementById('app'))

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});
React.render(
  <CommentBox />,
  document.getElementById('content')
);
