import React, { Component } from 'react'
import Aside from './components/Aside';
import Footer from './components/Footer';
import HtmlForm from './components/Form';
import Header from './components/Header';

class App extends Component {
    render() {

        return (
            <div id="container" className="container" >
                <Header />
                <Aside />
                < main className="mainpage" id="mainpage">
                    <HtmlForm />

                    <section>
                        <h1>Main page</h1>
                        <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ratione consequuntur dignissimos iste distinctio ad, vitae, repellat animi aspernatur nobis quos consectetur maiores fugit error nihil ipsam laborum minima corrupti!</article>
                    </section>
                </main>
                <Footer />
            </div >
        )
    }
}

export default App;