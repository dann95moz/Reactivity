import React from 'react'

import { H2Styled } from '../styled/H2Styled';
import { Container } from '../styled/EducationContainer';

export const Education = () => {
    return (
        <div>
            <H2Styled name="Mis Estudios" />
            <Container>
                <div className="Education-item">
                    <h1>Universidad Piloto de Colombia - <span>2020</span>
                        <p>Administrador ambiental</p>
                    </h1>
                </div>
            </Container>
        </div>
    )
}
