import {connect} from 'react-redux';

import {Home} from './components/home.component.js';
import {exampleRequest} from '../../modules/example';


function mapStateToProps(state) {
  return {
    posts: state.example.posts,
    isLoading: state.example.isLoading
  };
}

export default connect(mapStateToProps, {
  exampleRequest
})(Home);

