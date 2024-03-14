import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';


const { kakao } = window;

const MapContainer = styled.div`
  width: 100%;
  max-width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-radius: 12px;
`;

const Map = ({ width, height }) => {

  const container = useRef(null);

  useEffect(() => {
    const mapOptions = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    const map = new kakao.maps.Map(container.current, mapOptions);

    const markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    const marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);


  }, []);

  return (
    <MapContainer ref={container} width={width} height={height} />
  );
};

export default Map;