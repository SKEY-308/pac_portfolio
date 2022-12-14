import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Link from 'next/link';
// import images from './images';

// import { Link } from 'react-scroll'


const NavBar = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <nav className="app__navbar">
            <div className="app__navbar_logo ">
                <h1 className="logo ">
                    <Link href='/'>Pacome KPODAR</Link>
                </h1>
            </div>
            <ul className="app__navbar_links ">
                { ['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li className="app__flex p-text" key={ item } >
                        <div />
                        <Link href={ `#${item}` }>
                            { item }
                        </Link>
                    </li>
                )) }
            </ul>

            {/*Menu hamburher*/ }
            <div className="app__navbar_menu">
                <HiMenuAlt4 onClick={ () => setToggle(true) } />

                { toggle && (
                    <motion.div
                        whileInView={ { x: [300, 0] } }
                        transition={ { duration: 0.85, ease: 'easeOut' } }
                    >
                        <HiX onClick={ () => setToggle(false) } />
                        <ul>
                            { ['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                <li key={ item } onClick={ () => setToggle(false) }>
                                    <Link href={ `#${item}` }>
                                        { item }
                                    </Link>
                                </li>
                            )) }
                        </ul>
                    </motion.div>
                ) }
            </div>
        </nav>
    )
}

export default NavBar