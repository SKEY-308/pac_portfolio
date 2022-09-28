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


            <Skills />
            <Testimonial />
            <Work />
        </div>
    )
}

// // This gets called on every request
// export async function getStaticProps() {

//     const query = "*[_type == \"abouts\"]";

//     // Fetch data from external API
//     const abouts = await client.fetch(query)


//     // Pass data to the page via props 
//     return { props: { abouts } }
// };

export default Home

