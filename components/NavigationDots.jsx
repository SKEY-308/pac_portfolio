import React from 'react'
import Link from 'next/link';

const NavigationDots = ({ active }) => {
    return (
        <div className="app__navigation">

            { ['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <Link href={ `#${item}` } key={ item } >
                    <a
                        className="app__navigation-dot"
                        style={ active === item ? { backgroundColor: '#313BAC' } : {} }
                    />
                </Link>
            )) }

        </div>
    )
}

export default NavigationDots



