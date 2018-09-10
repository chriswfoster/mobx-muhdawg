import React, { Component } from 'react';

import {inject, observer} from 'mobx-react';
import NavBar from './NavBar/NavBar';


@inject('BirdStore') // allows us to inject the store into this app. Inspect the page with ReactDev tools to see this component
                      //passes the store in as a prop
@observer // allows us to watch for data changes, and force a rerender. Just reacting to changes
class App extends Component {
  
  handleSubmission = e => {
    e.preventDefault();
    const bird = this.bird.value
    this.props.BirdStore.addBird(bird)
    this.bird.value = ''
  }

  render() {
    const {BirdStore} = this.props; // lets destructure the BirdStore out of props
    console.log(typeof(BirdStore.birds), BirdStore.birds)

    return (
      <div className="App">
      <NavBar />
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
