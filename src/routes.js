import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'
import Wizard from './Components/Wizard/Wizard'


export default <Switch>
                <Route exact path = '/' component = {Dashboard} />
                <Route path = '/wizard' component = {Wizard} />
                </Switch>

// Inside the Switch, setup a Route for both of the components you brought in.

    // Dashboard should have '/' for its path.

    // Wizard should have '/wizard' for its path.
