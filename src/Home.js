import React from 'react'
import { Link } from 'react-router-dom'
import { connect} from 'react-redux'
import { deleteUser, getAllUsers } from './redux/actions'
import './App.css'
class Home extends React.Component {
    
    handleOnDelete = (id)=>{
        this.props.deleteUser(id)
    }
    componentDidMount(){
        this.props.getAllUsers()
    }
    render(){
        return (
            <div>
                <div class="ml-auto add">
                <Link to="/add">
                    <a href="">Add Users</a>
                </Link>

            </div>
            <table className="table table-striped">
            <thead class="thead-dark">
                <tr>
                    <th> Name</th>
                    <th> User Name</th>
                    <th> Email</th>
                    <th> Password</th>
                    <th>Actions</th>
                </tr>
            </thead>
                {this.props.loading && <p>Loading...</p>}
                {this.props.users.map(user=>{
                    return (
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.userName}</td>
                        <td>{user.userEmail}</td>
                        <td>{user.userPassword}</td>
                        <td>
                            <a onClick={()=>{this.handleOnDelete(user.id)}}>Delete</a>   
                            <Link to={`/edit/${user.id}`}> <a> Edit </a></Link>
                        </td>
                    </tr>
                    )
                })}
            </table>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state)
    return state
}




export default connect(mapStateToProps, {deleteUser, getAllUsers})(Home);
