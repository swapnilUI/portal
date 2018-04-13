import React,{Component} from 'react';
import {connect} from 'react-redux';

export default function(ComposedComponent){
  class AuthComponent extends Component{
    constructor(props){
      super(props);
      this.loadComponent = this.loadComponent.bind(this);
    }
    loadComponent(){
      console.log("isAuthenticated", this.props.isAuthenticated)
      return localStorage.getItem("loggedInUser") ?
        <ComposedComponent {...this.props} /> : this.props.history.push("/login");
    }
    render(){
      return(
        <div>
          {this.loadComponent()}
        </div>
      )
  }
}
  const mapStateToProps = (state)=>{
    return {
      isAuthenticated : state.login.loginSuccess
    }
  }
  return connect(mapStateToProps)(AuthComponent);
}
