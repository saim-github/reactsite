import React, { Component } from 'react'
import Aside from './components/Aside';
import Footer from './components/Footer';
import Header from './components/Header';


class App extends Component {
    render() {
        return (
            <>
                <div id="container" className="container">
                    <Header />
                    <Aside />
                    <div className="mainpage" id="mainpage">
                        <div>
                            <h1>Welcome to the main page.</h1>
                        </div>
                    </div>
                    <Footer />
                </div>
            </>
        )
    }
}

export default App;