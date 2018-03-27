import React,{Component} from 'react';
import PropTypes from 'prop-types';

class PostsList extends Component{
  constructor(props){
    super(props);
    console.log("props", props)
  }
    render(){
      return(<ul>
        {this.props.posts.map(post =>
            <li>{post.heading}</li>
        )}
        </ul>
      )
    }
}
PostsList.propTypes= {
    discussions: PropTypes.array.isRequired
}
export default PostsList;
