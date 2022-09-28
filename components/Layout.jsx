import React from 'react'
import Head from 'next/head';

import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div>
            <div >
                <Head>
                    <title>Pacome KPODAR</title>
                </Head>

                {/* header / navbar*/ }
                <header>
                    <NavBar />
                </header>
            </div>



            <main>
                { children }
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout
