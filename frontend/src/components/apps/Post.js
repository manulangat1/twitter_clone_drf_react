import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getPostBySlug } from '../../actions/post'


class Post extends React.Component{
    componentDidMount(){
        const {slug} = this.props.match.params
        this.props.getPostBySlug(slug)
    }

    render(){

        const {posts} = this.props
        const deleteButton =(
            <div>
                <button className="primary-btn">Delete</button>
            </div>
        )
        const updateButton = (
            <div>
                <button className="primary-btn">Update</button>
            </div>
        )
        const postD = (
            <div className="container" >
                <div className="grid">
                    <div className='dets'>
                    <h1>{posts.text}</h1>
                    </div>
                    <div className='use'>
                    <p>{posts.author && posts.author.email}</p>
                {posts.author && this.props.user.email == posts.author.email ? deleteButton : ""}
                {posts.author && this.props.user.email == posts.author.email ? updateButton : ""}
                    </div>
                </div>
                
            </div>
        )
        return(
            <section className="post_details">
                <div className='container'>
                    { posts ? postD : "Soory canr be found"}
                </div>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    posts:state.post.post,
    user:state.auth.user
})
export default connect(mapStateToProps,{getPostBySlug})(withRouter(Post))