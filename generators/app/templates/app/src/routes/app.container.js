import React, {Component} from 'react';

import {Header} from './components/header.component';

export class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}
