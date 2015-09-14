var List = React.createClass({

  render() {
    return <div>
              <AddNote />
              <NoteList />
           </div>
    )
  }
})

React.render(<App />, document.getElementById('app'))
