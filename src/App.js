import React, { Component } from 'react';

import {inject, observer} from 'mobx-react';


@inject('BirdStore') // allows us to inject the store into this app. Inspect the page with ReactDev tools to see this component
@observer // allows us to watch for data changes, and force a rerender.
class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
