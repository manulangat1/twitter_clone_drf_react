import React from 'react'
import LoadPost from './LoadPost'
import AddPost from './AddPost'

class Dashboard extends React.Component{
    render(){
        return(
            <section>
                <div className="container">
                <AddPost />
                <LoadPost />
                </div>
            </section>
        )
    }
}
export default Dashboard