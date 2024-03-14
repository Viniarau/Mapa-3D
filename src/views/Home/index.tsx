import React, { useContext, useEffect } from 'react';
import { Text } from 'react-native';
import { Container } from './style';
import { AppContext } from '../../contexts/AppContext';

const Home: React.FC = () => {
    const { getData, data } = useContext(AppContext);

    
    useEffect(() => {
        //getData()
      }, []);

    return (
        <Container>
            <Text>HOME</Text>
        </Container>
    )
}

export default Home;