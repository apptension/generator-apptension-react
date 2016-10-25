import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <FormattedMessage id="someMsg"/>
      </div>
    );
  }
}
