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
        const postD = (
            <div className="container" >
                <h1>{posts.text}</h1>
                <p>{posts.slug}</p>
            </div>
        )
        return(
            <section>
                { posts ? postD : "Soory canr be found"}
            </section>
        )
    }
}
const mapStateToProps = state => ({
    posts:state.post.post
})
export default connect(mapStateToProps,{getPostBySlug})(withRouter(Post))