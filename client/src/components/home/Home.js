import React,{Component} from 'react';
import Landing from '../landing/Landing';

class Home extends Component{
  render(){
    return(
      <div>
        <button type="button">Start New Discussion</button>
        <Landing isloggedIn ="true" />
      </div>
    )
  }
}
export default Home;
