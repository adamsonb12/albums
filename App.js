import React, { Component } from 'react';

// Custom Components
import Header from './src/components/header';

export default class App extends Component<{}> {
  render() {
    return (
        <Header headerText={'Albums'} />
    );
  }
}
