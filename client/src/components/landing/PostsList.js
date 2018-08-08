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
      const {posts} = this.props;
      const list = (<ul>
                    {
                      this.props.posts.map((post,index) =>
                        <Post key={post._id} post={post} />
                      )
                    }
              </ul>);
      return(
        <div>
        {posts && list}
        </div>
      )
    }
}
PostsList.propTypes= {
    discussions: PropTypes.array
}
export default PostsList;
