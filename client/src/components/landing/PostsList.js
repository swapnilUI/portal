import React,{Component} from 'react';
import PropTypes from 'prop-types';

import './Landing.scss';
import Post from './Post';

class PostsList extends Component{
  constructor(props){
    super(props);
    this.state= {
      showComments:false
    }
  }

    render(){

      return(
        <ul>
        {this.props.posts ? this.props.posts.map((post,index) =>
          <Post key={index} post={post} />
        ):null}
        </ul>
      )
    }
}
PostsList.propTypes= {
    discussions: PropTypes.array
}
export default PostsList;
