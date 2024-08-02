import React from 'react';
import './Timeline.css';

// import images
import htmlimg from '../assets/images/htmlimg.png';
import javascriptimg from '../assets/images/javascriptimg.png';
import reactjsimg from '../assets/images/reactjsimg.png';
import nodejsimg from '../assets/images/nodejsimg.png';
import expressjsimg from '../assets/images/expressjsimg.png';
import mongodbimg from '../assets/images/mongodbimg.png';
import phpimg from '../assets/images/phpimg.png';

const Timeline = () => {
    
    return (

        <div className='main'>

            <h1> My <span> Skills </span> </h1>

            <div className='timeline'>


                {/* HTML Card*/}

                <div className='container left-container'>

                    <img src={htmlimg} alt='HTML' />

                    <div className='text-box htmlcard'>

                        <h2 className='htmltext'> HTML </h2>

                        <small> <span className='company'> [ Company Name ] </span> 2023 - 2024 </small>

                        <p>
                            MR Coder has 1 years of experience at [Company Name], specializing in HTML.
                            They developed responsive, accessible web pages, optimized performance, and
                            ensured cross-browser compatibility for enhanced user experiences.
                        </p>

                        <span className='left-container-arrow htmlarrow'></span>

                    </div>

                </div>


                {/*  JavaScript Card*/}

                <div className='container right-container'>

                    <img src={javascriptimg} alt='JavaScript' />

                    <div className='text-box javascriptcard'>

                        <h2 className='javascripttext'> JavaScript </h2>

                        <small> <span className='company'> [ Company Name ] </span> 2018 - 2019 </small>

                        <p>
                            MR Coder has 1 year of experience at [Company Name], focusing on JavaScript.
                            They developed interactive web applications, optimized code for performance,
                            and implemented dynamic features to enhance user engagement.
                        </p>

                        <span className='right-container-arrow javascriptarrow'></span>

                    </div>

                </div>


                {/*  React Js Card*/}

                <div className='container left-container'>

                    <img src={reactjsimg} alt='React JS' />

                    <div className='text-box reactjscard'>

                        <h2 className='reactjstext'> React Js </h2>

                        <small> <span className='company'> [ Company Name ] </span> 2018 - 2019 </small>

                        <p>

                            MR Coder has 1 year of experience at [Company Name] in React.js,
                            building scalable single-page applications, creating reusable components,
                            and managing state for improved performance and user experience.

                        </p>

                        <span className='left-container-arrow reactjsarrow'></span>

                    </div>

                </div>


                {/*  Node JS Card*/}

                <div className='container right-container'>

                    <img src={nodejsimg} alt='Node JS' />

                    <div className='text-box nodejscard'>

                        <h2 className='nodejstext'> Node Js </h2>

                        <small> <span className='company'> [ Company Name ] </span> 2018 - 2019 </small>

                        <p>

                            MR Coder has 1 year of experience at [Company Name] in Node.js,
                            developing server-side applications, creating RESTful APIs, and
                            optimizing backend performance for efficient data handling and
                            seamless integration.

                        </p>

                        <span className='right-container-arrow nodejsarrow'></span>

                    </div>

                </div>


                {/*  Express Js Card*/}

                <div className='container left-container'>

                    <img src={expressjsimg} alt='Express JS' />

                    <div className='text-box expressjscard'>

                        <h2 className='expressjstext'> Express Js </h2>

                        <small> <span className='company'> [ Company Name ] </span> 2018 - 2019 </small>

                        <p>
                            MR Coder has 1 year of experience at [Company Name], focusing on Express.js.
                            They built and maintained RESTful APIs, handled server-side routing, and ensured
                            efficient application performance and scalability.
                        </p>

                        <span className='left-container-arrow expressjsarrow'></span>

                    </div>

                </div>


                {/*  MongoDB Card*/}

                <div className='container right-container'>

                    <img src={mongodbimg} alt='MongoDB' />

                    <div className='text-box mongodbcard'>

                        <h2 className='mongodbext'> MongoDB </h2>

                        <small> <span className='company'> [ Company Name ] </span> 2018 - 2019 </small>

                        <p>
                            MR Coder has 1 year of experience at [Company Name], working with MongoDB.
                            They managed databases, designed schemas, and optimized queries to ensure
                            efficient data storage and retrieval for applications.
                        </p>

                        <span className='right-container-arrow mongodbarrow'></span>

                    </div>

                </div>


                {/*  PHP Card*/}

                <div className='container left-container'>

                    <img src={phpimg} alt='PHP' />

                    <div className='text-box phpcard'>

                        <h2 className='phptext'> PHP </h2>

                        <small> <span className='company'> [ Company Name ] </span> 2018 - 2019 </small>

                        <p>
                            MR Coder has 1 year of experience at [Company Name], specializing in PHP.
                            They developed server-side scripts, built dynamic web applications, and
                            integrated databases to enhance functionality and user interaction.
                        </p>

                        <span className='left-container-arrow phparrow'></span>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Timeline;
