import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import ReactTooltip from 'react-tooltip';

import { urlFor, client } from '../lib/client';

import AppWrap from './AppWrap';
import MotionWrap from './MotionWrap';


const Skills = () => {
    const [experiences, setExperiences] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences"]';
        const skillsQuery = '*[_type == "skills"]';

        client.fetch(query).then((data) => {
            setExperiences(data);
        });

        client.fetch(skillsQuery).then((data) => {
            setSkills(data);
        });
    }, []);

    return (
        <div>
            <h2 className="head-text">Skills & Experiences</h2>

            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    { console.log(skills) }
                    { skills.map((skill) => (
                        <motion.div
                            whileInView={ { opacity: [0, 1] } }
                            transition={ { duration: 0.5 } }
                            className="app__skills-item app__flex"
                            key={ skill._id }
                        >
                            <div
                                className="app__flex"
                                style={ { backgroundColor: skill.bgColor } }
                            >
                                <img src={ urlFor(skill.icon) } alt={ skill.name } />
                            </div>
                            <p className="p-text">{ skill.name }</p>
                        </motion.div>
                    )) }
                </motion.div>
                <div className="app__skills-exp">
                    { experiences.map((experience) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={ experience._id }
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{ experience.year }</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                { experience.works.map((work) => (
                                    <div>
                                        <motion.div
                                            whileInView={ { opacity: [0, 1] } }
                                            transition={ { duration: 2 } }
                                            className="app__skills-exp-work"
                                            key={ work._id }
                                        >
                                            <h4 className="bold-text">{ work.name }</h4>
                                            <p className="p-text">{ work.company }</p>
                                            <p className="bold-text">{ work.desc }</p>
                                        </motion.div>
                                    </div>
                                )) }
                            </motion.div>
                        </motion.div>
                    )) }
                </div>
            </div>
        </div>
    )
}

// export default AppWrap(Skills, 'skills')

export default AppWrap(
    MotionWrap(Skills, 'app__skills'), 'skills',
    'app__whitebg'
)