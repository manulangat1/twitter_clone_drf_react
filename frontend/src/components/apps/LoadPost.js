import React from 'react'
import { connect } from 'react-redux'
import { loadPosts } from '../../actions/post'


class LoadPost extends React.Component{
    componentDidMount(){
        this.props.loadPosts()
    }
    render(){
        const {posts} = this.props
        return(
            <section>
                {
                    posts && posts.map(post => (
                        <div>
                            <h1>h</h1>
                        </div>
                    ))
                }
            </section>
        )
    }
}
const mapStateToProps = state => ({
    posts:state.post.posts,
    limit:state.post.limit,
    offset:state.post.offset
})
export default connect(mapStateToProps,{loadPosts})(LoadPost)