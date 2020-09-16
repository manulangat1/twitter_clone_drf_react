import React from 'react'
import LoadPost from './LoadPost'

class Dashboard extends React.Component{
    render(){
        return(
            <section>
                <div className="container">
                <LoadPost />
                </div>
            </section>
        )
    }
}
export default Dashboard