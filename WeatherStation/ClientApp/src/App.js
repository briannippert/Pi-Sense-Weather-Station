import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Charts } from './components/Charts';
import { CurrentWeather } from './components/CurrentWeather';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
            <Route path='/currentWeather' component={CurrentWeather} />
        <Route path='/charts' component={Charts} />
      </Layout>
    );
  }
}
