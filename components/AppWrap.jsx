import React from 'react'

// import styles from '../styles/Header.module.scss'
import NavigationDots from './NavigationDots'
import SocialMedia from './SocialMedia'

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={ idName } className={ `app__container ${classNames}` }>

            <SocialMedia />

            <div className='app__wrapper app__flex'>
                <Component />

                <div className='copyright '>
                    <p className="p-text">@2022 Pacome KPODAR</p>
                    <p className="p-text">All rights reserved</p>
                </div>
            </div>

            <NavigationDots active={ idName } />

        </div>
    )
}

export default AppWrap