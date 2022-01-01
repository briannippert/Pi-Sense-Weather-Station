import React, { Component } from 'react';

export class CurrentWeather extends Component {
  static displayName = CurrentWeather.name;

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h1>Current Conditions</h1>
      </div>
    );
  }
}
