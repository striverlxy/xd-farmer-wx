import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import LoadingPage from './components/loadingPage'

const Index = lazy(() => import('./pages/index'))
const Home = lazy(() => import('./pages/home'))
const Collect = lazy(() => import('./pages/collect'))
const Order = lazy(() => import('./pages/order'))
const XdService = lazy(() => import('./pages/xdService'))

const AppRouter = () => {

  return (
      <Router>
        <Switch>
          <Suspense fallback={<LoadingPage />}>
            <Route exact path="/index" component={Index} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/collect" component={Collect} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/xdService" component={XdService} />
            <Redirect exact path="*" to="/index" />
          </Suspense>
        </Switch>
    </Router>
  )
}

export default AppRouter
