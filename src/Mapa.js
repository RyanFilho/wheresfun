import React from 'react';
import { Map, TileLayer, Marker, Popup }  from 'react-leaflet';

export default class Mapa extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
    };

  }

  render() {
    const position = [this.state.lat, this.state.lng];
    const style = {
      height: '100vh'
    };
    return (
      <Map style={style} center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}