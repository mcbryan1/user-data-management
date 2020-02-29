import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editUser } from './redux/actions';

export class EditUser extends Component {

    handleOnSubmit = (event)=>{
        event.preventDefault();
        let updatedUser = {
            id:this.props.match.params.id,
            name: event.target.elements.name.value,
            userName: event.target.elements.userName.value,
            userEmail: event.target.elements.userEmail.value,
            userPassword: event.target.elements.userPassword.value,
        }
        this.props.editUser(updatedUser)
        this.props.history.push("/")
    }



    render() {
        let id = this.props.match.params.id;
        let user  = this.props.users.find((item)=>{
            return item.id===id
        })
        return (
            <div>
                <h1>Edit User</h1>
               <form onSubmit={this.handleOnSubmit}>
                   <div>
                       <label> Name</label>
                       <input type="text" name="name" defaultValue={user.accountName}/>
                   </div>

                   <div>
                   <label>User Name</label>
                       <input type="number" name="userName" defaultValue={user.userName}/>
                   </div>

                   <div>
                        <label>Email</label>
                       <input type="email" name="userEmail" defaultValue={user.userEmail}/>
                   </div>

                   <div>
                        <label>BPassword</label>
                       <input type="password" name="userPassword" defaultValue={user.userPassword}/>
                   </div>

                   <div>
                       <button type="submit">Update User</button>
                   </div>
                </form> 
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return {
        accounts:state.accounts
    }
}



export default connect(mapStateToProps, {editUser})(EditUser)