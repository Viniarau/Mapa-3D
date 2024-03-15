import React, { useContext, useEffect, useState } from 'react';
import { Container } from './style';
import { AppContext } from '../../contexts/AppContext';
import Map from '../../components/map';

interface GPSPoint {
    latitude: number;
    longitude: number;
    direction: number;
}

const Home: React.FC = () => {
    const { data } = useContext(AppContext);
    const [currentCoordinateIndex, setCurrentCoordinateIndex] = useState(0);

    useEffect(() => {
        animateCarMovement();
    }, []);

    const animateCarMovement = () => {
        const animationDuration = 3000;

        const interval = setInterval(() => {
            setCurrentCoordinateIndex(prevIndex => {
                const nextIndex = prevIndex + 1;
                if (nextIndex >= data.courses[0].gps.length) {
                    clearInterval(interval);
                    return prevIndex;
                }
                return nextIndex;
            });
        }, animationDuration);
    };

    const getCurrentCoordinates = (): GPSPoint | null => {
        const validCourse = data?.courses?.[0];
        const validGPS = validCourse?.gps?.[currentCoordinateIndex];
        return validGPS || null;
    };
    
    const carPosition = getCurrentCoordinates();
    
    const initialRegion = carPosition
        ? {
            latitude: carPosition.latitude,
            longitude: carPosition.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }
        : {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        };

    const polylines = data.courses?.[0]?.gps?.map(({ latitude, longitude }) => ({
        latitude,
        longitude,
    })) || [];

    return (
        <Container>
            <Map
                initialRegion={initialRegion}
                carPosition={carPosition}
                polylines={polylines}
            />
        </Container>
    );
};

export default Home;
