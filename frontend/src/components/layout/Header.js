import React from 'react'
import { connect } from 'react-redux'
import { NavLink} from 'react-router-dom'
import { logout } from '../../actions/auth'
class  Header extends React.Component{
    render(){
        const { isAuthenticated } = this.props.auth
        const guestLinks = (
            <div className="grid">
                        <h1> <span>TweetMe</span></h1>
                        <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                        
                    </li>
                    <li>
                        <NavLink to='/login/'>Login</NavLink>
                    </li>
                    
                </ul>
                    </div>
            
        )
        const authLinks = (
            <div className="grid">
                        <h1><NavLink to='/'> <span>TweetMe</span> </NavLink></h1>
                        <ul>
                    <li>
                        
                        
                    </li>
                    <li>
                        <button className="primary-btn" onClick={this.props.logout}>Logout</button>
                    </li>
                    
                </ul>
                    </div>
        )
        return(
            <header>
                <div className="container">
                    { isAuthenticated ? authLinks : guestLinks}
                </div>
            </header>
        )
    }
}
const mapStateToProps = state => ({
    auth:state.auth
})
export default connect(mapStateToProps,{logout})(Header)