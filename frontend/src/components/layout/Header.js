import React from 'react'
import { NavLink} from 'react-router-dom'
class  Header extends React.Component{
    render(){
        const guestLinks = (
            <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                        
                    </li>
                    <li>
                        <NavLink to='/login/'>Login</NavLink>
                    </li>
                </ul>
        )
        return(
            <header>
                <div className="container">
                    <div className="grid">
                        <h1> <span>TweetMe</span></h1>
                    { guestLinks}
                    </div>
                </div>
            </header>
        )
    }
}
export default Header