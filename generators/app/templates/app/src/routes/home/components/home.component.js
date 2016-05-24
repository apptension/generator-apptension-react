import React, {Component} from 'react';

export class Home extends Component {
  componentWillMount() {
    this.props.exampleRequest();
  }

  render() {
    return (
      <div>
        <p>Included libraries:</p>

        <ul>
          <li><a href="https://github.com/facebook/react">ReactJS</a></li>
          <li><a href="https://github.com/reactjs/react-router">React Router</a></li>
          <li><a href="https://github.com/reactjs/redux">Redux</a></li>
          <li><a href="https://github.com/gaearon/redux-devtools">Redux devtools</a></li>
          <li><a href="https://github.com/gaearon/redux-thunk">Redux thunk middleware</a></li>
          <li><a href="https://github.com/agraboso/redux-api-middleware">Redux api middleware</a></li>
        </ul>

        <p>
          To test the api we created example action and reducer.

          <br/>

          {this.props.isLoading ? <span>Loading posts...</span> :
            <span>We downloaded {this.props.posts.length} posts for you, yay!</span>}
        </p>
      </div>
    );
  }
}
