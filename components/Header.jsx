import React from 'react'
import { motion } from 'framer-motion';
import images from './images';

import AppWrap from './AppWrap';

// import styles from '../styles/Header.module.scss'

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
};




const Header = () => {
    return (
        <div className="app__header app__flex">
            <motion.div
                whileInView={ { x: [-100, 0], opacity: [0, 1] } }
                transition={ { duration: 4 } }
                className="app__header_info"
            >
                <div className="app__header_badge">
                    <div className="badge_cmp app__flex">
                        <span>👋</span>
                        <div style={ { marginLeft: 20 } }>
                            <p className="p-text">Hello, I am</p>
                            <h2 className="head-text">Pacome</h2>
                        </div>
                    </div>

                    <div className="tag_cmp app__fle">
                        <p className="p-text">Lorem ipsum dolor</p>
                        <p className="p-text"> Ea ipsam repellat </p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                whileInView={ { opacity: [0, 1] } }
                transition={ { duration: 0.5, delayChildren: 0.5 } }
                className="app__header_img"
            >
                <img src={ images.profile } alt="profile_bg" />

                <motion.img
                    whileInView={ { scale: [0, 1] } }
                    transition={ { duration: 1, ease: 'easeInOut' } }
                    src={ images.circle }
                    alt="profile_circle"
                    className="overlay_circle"
                />
            </motion.div>

            <motion.div
                variants={ scaleVariants }
                whileInView={ scaleVariants.whileInView }
                className="app__header_circles"
            >
                { [images.flutter, images.redux, images.sass].map((circle, index) => (
                    <div className="circle-cmp app__flex" key={ `circle-${index}` }>
                        <img src={ circle } alt="profile_bg" />
                    </div>
                )) }
            </motion.div>
        </div>
    )
}

export default AppWrap(Header, 'home')