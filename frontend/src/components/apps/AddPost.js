import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../../actions/post'


class AddPost  extends React.Component{
    state = {
        "text":"",
        "slug":"jdh"
    }
    onChange = e => this.setState({[e.target.name]:e.target.value})
    onSubmit = e => {
        e.preventDefault()
        const { text,slug}  = this.state
        const newT = {
            text,slug
        }
        this.props.addPost(newT)
        this.setState({
            text:""
        })
    }
    render(){
        const { text}  = this.state
        return(
            <section>
                <form onSubmit={this.onSubmit}>
                    <div>
                    <label>Tweet</label>
                    <input type="text" value={text} name="text" onChange={this.onChange}  className="form-control" required placeholder="Whats on your mind"/>
                    </div>
                    <input type="submit" value="Tweet" className="form-control" />
                </form>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    posts:state.post.posts
})
export default connect(mapStateToProps,{addPost})(AddPost)