import React, { Component } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 mx-auto">
                            <h2>TODO List</h2>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default App;