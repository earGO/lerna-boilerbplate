import React from 'react'
import { Helmet } from 'react-helmet'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'

import { name as appName } from '../package.json'
import { baseRoute as jokesModuleRoute } from './components/jokes/jokes-duck'

import { baseRoute as norrisModuleRoute } from './components/jokes/norris-duck'

import Layout from './components/common/Layout'
import Main from './components/main'
import Jokes from './components/jokes'
import NotFound from './components/common/NotFound'
import NorrisJoke from "./components/jokes/NorrisJoke";

function Routes({ history }) {
  return (
    <React.Fragment>
      <Helmet>
        <title>{appName}</title>
      </Helmet>
      <ConnectedRouter history={history}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path={jokesModuleRoute} component={Jokes} />
              <Route path={norrisModuleRoute} component={NorrisJoke} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </ConnectedRouter>
    </React.Fragment>
  )
}

export default Routes
