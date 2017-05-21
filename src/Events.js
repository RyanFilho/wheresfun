import React from 'react';
import { Marker, Popup }  from 'react-leaflet';

export default class Events extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: -3.7335709,
      lng: -38.529855,
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
        {/*<TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />*/}
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          url='http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
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