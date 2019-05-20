import React, { Component } from 'react';
import './index.css';
import TopicBrowser from './components/TopicBrowser/TopicBrowser'

//exists to bring in info from TopicBrowser?
class App extends Component {
  render() {
    return (
      <TopicBrowser />
    )
  }
}

export default App;
