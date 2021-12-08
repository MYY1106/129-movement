// import { ReactElement, lazy } from 'react'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import '../src/assets/style/app.less'

import Home from './views/Home'

import History from './views/History'

import End from './views/End'

import EnhanceRouterMusic from './components/Music'

import Loading from './views/Loading'

import 'animate.css'


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/loading" component={Loading}></Route>
                <Route exact path="/history" component={History}></Route>
                <Route exact path="/end" component={End}></Route>
            </Switch>
            <EnhanceRouterMusic></EnhanceRouterMusic>
        </Router>
    )
}

export default App
