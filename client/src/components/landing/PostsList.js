import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

class PostsList extends Component{
  constructor(props){
    super(props);
    console.log("props", props)
  }
    render(){
      return(<ul>
        {this.props.posts.map((post,index) =>
            <Post key={index} post={post} />
        )}
        </ul>
      )
    }
}
PostsList.propTypes= {
    discussions: PropTypes.array
}
export default PostsList;
