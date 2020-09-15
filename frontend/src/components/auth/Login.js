import React from 'react'
import { NavLink,withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

class Login extends React.Component{
    state = {
        email:"",
        password:""
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault()
        const { email,password } = this.state
        console.log(email,password)
    }
    render(){
        const { email,password } = this.state
        return(
            <section>
                <div className="container">
                <h1>Login</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" type="email" placeholder="Enter your email" name="email" value={email} onChange={this.onChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" type="password" placeholder="Enter your password" name="password" value={password} onChange={this.onChange} className="form-control" />
                    </div>
                    <input type="submit" value="Sign in" className="primary-btn"/>
                </form>
                </div>
            </section>
        )
    }
}
export default Login