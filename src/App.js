import React, { Component } from 'react';

import {inject, observer} from 'mobx-react';


@inject('BirdStore') // allows us to inject the store into this app. Inspect the page with ReactDev tools to see this component
//passes the store in as a prop
@observer // allows us to watch for data changes, and force a rerender.
class App extends Component {
  
  handleSubmission = e => {
    e.preventDefault();
    const bird = this.bird.value
    this.props.BirdStore.addBird(bird)
    this.bird.value = ''
  }

  render() {
    const {BirdStore} = this.props;
    console.log(this.props)

    return (
      <div className="App">
        <h2>
          You have {BirdStore.birdCount} birds.
        </h2>
        <form onSubmit = {e => this.handleSubmission(e)}>
          <input type="text" placeholder="Enter Bird" ref={input => this.bird = input}/>
          <button type="submit">Add Bird</button>

        </form>
          <h2> Here is your birds list:</h2>
          {BirdStore.birds.map((bird, i) => <p key = {i}>{bird}</p>)}
      </div>
    );
  }
}

export default App;
