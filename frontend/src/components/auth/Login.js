import React from 'react'
import { NavLink,withRouter,Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../actions/auth'

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
        this.props.login(email,password)
    }
    render(){
        if (this.props.auth.isAuthenticated){
            return <Redirect to='/' />
        }
        const { email,password } = this.state
        return(
            <section className="login">
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
                    <p>Already have an account? <NavLink to='/register/'>Register here</NavLink></p>
                </form>
                </div>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    auth:state.auth
})
export default connect(mapStateToProps,{login})(Login)