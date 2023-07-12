import React from 'react';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';

export default function Homepage() {
    return (
        <>
            <div className='homepage'>
                <Header />
                <Aside />
                < main className="mainpage" id="mainpage">
                    <Form />

                    <section>
                        <h1>Main page</h1>
                        <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ratione consequuntur dignissimos iste distinctio ad, vitae, repellat animi aspernatur nobis quos consectetur maiores fugit error nihil ipsam laborum minima corrupti!</article>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    )
}
