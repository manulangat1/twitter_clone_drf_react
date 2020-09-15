import React from 'react'
import { NavLink} from 'react-router-dom'
class  Header extends React.Component{
    render(){
        return(
            <header>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                </ul>
            </header>
        )
    }
}
export default Header