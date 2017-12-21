import React, { Component } from 'react';

// Custom Components
import Header from './src/components/header';
import AlbumList from './src/components/albumList';
import { View } from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}
