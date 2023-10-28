import React from 'react';
import "./About.scss";

const About = () => {
    return (
        <div className='about'>
            <div className='about_page'>
            <h1>Faby House Creattion</h1>
            <p>Votre atelier de conception d'accessoires pour femmes haut de gamme</p>
            </div>
            
            <div className='services'>
                <h2>Nos services</h2>
                <div className="services-box">
                    <div className='box'>
                        <h3>Conception de chapeau</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nostrum perferendis nobis tenetur expedita. Aperiam?</p>
                    </div>
                    <div className='box'>
                        <h3>Sur mesure</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nostrum perferendis nobis tenetur expedita. Aperiam?</p>
                    </div>
                    <div className='box'>
                        <h3>Formation</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi nostrum perferendis nobis tenetur expedita. Aperiam?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;