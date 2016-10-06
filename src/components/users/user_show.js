import React from 'react';
import {connect} from 'react-redux';

class UserShow extends React.Component {
  render(){
    console.log("rendering component in string", this.props.user)
    return (
      <div>
        <h1>Welcome to The Gathering, {this.props.user.first_name}</h1>
          
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
	if (state.users.length > 0 ){
		const user = state.users.find(u => {
        return u.id == ownProps.params.id
      })
		return {user: user}
	}else{
		return {user:{name: 'david'}}
	}
}


const componentCreator = connect(mapStateToProps)
export default componentCreator(UserShow);
