import React, { useEffect, useRef } from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Svg, { Image as SvgImage } from 'react-native-svg';

interface Props {
    initialRegion: {
        latitude: number;
        longitude: number;
        latitudeDelta: number;
        longitudeDelta: number;
    };
    carPosition: {
        latitude: number;
        longitude: number;
    };
    polylines: { latitude: number; longitude: number }[];
}

const Map: React.FC<Props> = ({ initialRegion, carPosition, polylines }) => {
    const mapViewRef = useRef<MapView>(null);

    useEffect(() => {
        if (mapViewRef.current) {
            mapViewRef.current.animateToRegion({
                latitude: carPosition.latitude,
                longitude: carPosition.longitude,
                latitudeDelta: initialRegion.latitudeDelta,
                longitudeDelta: initialRegion.longitudeDelta,
            });
        }
    }, [carPosition]);

    return (
        <MapView
            ref={mapViewRef}
            style={{ flex: 1 }}
            initialRegion={initialRegion}
        >
            <Polyline
                coordinates={polylines}
                strokeWidth={4}
                strokeColor="blue"
            />
            <Marker coordinate={carPosition} title="Car">
                <Svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                >
                    <SvgImage
                        width={32}
                        height={32}
                        href={require('../../assets/img/3d-car.png')}
                    />
                </Svg>
            </Marker>
        </MapView>
    );
};

export default Map;
