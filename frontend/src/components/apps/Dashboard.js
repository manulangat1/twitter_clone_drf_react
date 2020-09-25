import React from 'react'
import LoadPost from './LoadPost'
import AddPost from './AddPost'

class Dashboard extends React.Component{
    render(){
        return(
            <section className="dashboard">
                <div className="container">
                <div className="grid">
                    <div className="mains">
                        <h1>Hey there</h1>
                    </div>
                    <div>
                    <AddPost />
                    <LoadPost />
                    </div>
                    <div className="trending">
                        <h1>Nop</h1>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}
export default Dashboard