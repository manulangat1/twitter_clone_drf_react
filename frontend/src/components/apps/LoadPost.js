import React from 'react'
import { connect } from 'react-redux'
import { loadPosts } from '../../actions/post'


class LoadPost extends React.Component{
    componentDidMount(){
        this.props.loadPosts()
    }
    constructor(props){
        super(props)
        const { hasMore} = this.props 
        window.onscroll = () => {
            if (document.documentElement.scrollHeight - document.documentElement.scrollTop === document.documentElement.clientHeight){
                this.props.loadPosts()
                console.log("hey")
            }
        }
        
    }
   

    render(){
        const {posts,hasMore} = this.props
        return(
            <section>
                {
                    posts && posts.map(post => (
                        <div>
                            <h1>{post.text}</h1>
                        </div>
                    ))
                }
                {!posts && <div>No more posts ath ethe moment</div>}
                {!hasMore && <div>No more results </div>}
            </section>
        )
    }
}
const mapStateToProps = state => ({
    posts:state.post.posts,
    limit:state.post.limit,
    hasMore:state.post.hasMore,
    offset:state.post.offset
})
export default connect(mapStateToProps,{loadPosts})(LoadPost)