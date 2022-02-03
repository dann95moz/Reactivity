import React from 'react';

import { AboutS, Avatar, Img, Name, H2, Profession, Location } from '../styled/AboutStyled'
import { Education } from './Education';

const About = () => {
    return (
        <AboutS>
            <div className="About-container">
                <Avatar>
                    <figure>

                        <Img src="https://res.cloudinary.com/dn1jeryp3/image/upload/v1643922215/myphoto_nd2ou1.jpg" alt="Mi Avatar" />
                    </figure>
                </Avatar>
                <Name>
                    <H2>Daniel Corredor</H2>
                </Name>
                <Profession>
                    <p>Administrador Ambiental</p>
                </Profession>
                <Location>
                    <p>Bogotá, Colombia</p>
                </Location>
                <div className="About-social">
                    <p> Redes sociales:</p>
                    <a href="https://www.facebook.com/daniel.corredor.1422/"> Facebook</a>


                </div>
            </div>

        </AboutS>

    )

}

export default About;



