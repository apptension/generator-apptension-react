import React, {Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {FormattedMessage} from 'react-intl';

export class Welcome extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <section className="welcome">
        <FormattedMessage id="app.welcome.title"/>
      </section>
    );
  }
}

if (__DEBUG__) {
  Welcome.propTypes = {
    push: React.PropTypes.func.isRequired
  };
}
