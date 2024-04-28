
// eslint-disable-next-line
import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import mapStyles from '../../mapStyles';
import useStyles from './styles.js';
import dotenv from 'dotenv';
dotenv.config();

// test coord
const testCoord = { lat: 33.95, lng: -117.58 }

const PlaceMap = ({ place, className, key, classes, matches }) => (
  <div
    className={className}
    // lat={lat}
    // lng={lng}
    key={key}
  >
    {!matches
      ? <LocationOnOutlinedIcon color="primary" fontSize="large" />
      : (
        <Paper elevation={3} className={classes.paper}>
          <Typography className={classes.typography} variant="subtitle2" gutterBottom> {place.name}</Typography>
          <img
            className={classes.pointer}
            src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
          />
          <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
        </Paper>
      )}
  </div>
);

const Map = ({ coords, places, setCoords, setBounds, setChildClicked, weatherData }) => {
  const matches = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  return (
    <div className={classes.mapContainer} style={{ height: '100vh', width: '100%' }}>

      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={testCoord}
        center={testCoord}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places.length && places.map((place, i) => (
          <PlaceMap
            place={place}
            className={classes.markerContainer}
            lat={place.latitude && Number(place.latitude)}
            lng={place.longitude && Number(place.longitude)}
            key={i}
            matches={matches}
            classes={classes}
          />
        ))}

        {weatherData?.list?.length && weatherData.list.map((data, i) => (
          <div key={i}>
            <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} height="70px" />
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
