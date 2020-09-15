import React from 'react'
import { NavLink,withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

class Register extends React.Component{
    state = {
        email:"",
        password:"",
        password2:""
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault()
        const { email,password,password2 } = this.state
        console.log(email,password,password2)
    }
    render(){
        const { email,password,password2 } = this.state
        return(
            <section className="login">
                <div className="container">
                <h1>Register</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" type="email" placeholder="Enter your email" name="email" value={email} onChange={this.onChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" type="password" placeholder="Enter your password" name="password" value={password} onChange={this.onChange} className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" type="password" placeholder="Reenter password" name="password2" value={password2} onChange={this.onChange} className="form-control" />
                    </div>

                    <input type="submit" value="Sign in" className="primary-btn"/>
                    <p>Already have an account? <NavLink to='/login/'>Login here</NavLink></p>
                </form>
                </div>
            </section>
        )
    }
}
export default Register