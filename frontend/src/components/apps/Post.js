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
        const {post} = this.props
        return(
            <section>
                <h1>{post.text}</h1>
                <p>{post.slug}</p>
            </section>
        )
    }
}
const mapStateToProps = state => ({
    posts:state.post.post
})
export default connect(mapStateToProps,{getPostBySlug})(withRouter(Post))