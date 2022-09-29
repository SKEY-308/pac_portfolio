import React from 'react'
import { About, Header, Skills, Testimonial, Work } from '../components'

import { client } from '../lib/client'

const Home = () => {
    return (
        <div >
            <div className="app" >
                <Header />
            </div>

            <About />

            <Work />

            <Skills />

            <Testimonial />

        </div>
    )
}

export default Home

