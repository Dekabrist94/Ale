import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={{ width: '100%', height: '400px' }}
        initialCenter={{ lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE }}>
        <Marker name={'Current location'} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
})(MapContainer);
