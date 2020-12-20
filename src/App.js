import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import LoadingPage from './components/loadingPage'

const Index = lazy(() => import('./pages/index'))
const Home = lazy(() => import('./pages/home'))
const Collect = lazy(() => import('./pages/collect'))
const CollectDetail = lazy(() => import('./pages/collect/detail'))
const Order = lazy(() => import('./pages/order'))
const OrderDetail = lazy(() => import('./pages/order/detail'))
const My = lazy(() => import('./pages/my'))
const AuthInfo = lazy(() => import('./pages/my/authInfo'))
const Goods = lazy(() => import('./pages/my/goods'))
const GoodsCollect = lazy(() => import('./pages/my/goods/collect'))

const AppRouter = () => {

  return (
      <Router>
        <Switch>
          <Suspense fallback={<LoadingPage />}>
            <Route exact path="/index" component={Index} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/collect" component={Collect} />
            <Route exact path="/collect/detail" component={CollectDetail} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/order/detail" component={OrderDetail} />
            <Route exact path="/my" component={My} />
            <Route exact path="/my/authInfo" component={AuthInfo} />
            <Route exact path="/my/goods" component={Goods} />
            <Route exact path="/my/goods/collect" component={GoodsCollect} />
            <Redirect exact path="*" to="/index" />
          </Suspense>
        </Switch>
    </Router>
  )
}

export default AppRouter
