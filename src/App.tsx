// import { ReactElement, lazy } from 'react'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import '../src/assets/style/app.less'

import Home from './views/Home'

import History from './views/History'

import End from './views/End'

import EnhanceRouterMusic from './components/Music'

function App() {
    return (
        <Router>
            <EnhanceRouterMusic></EnhanceRouterMusic>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/history" component={History}></Route>
                <Route exact path="/end" component={End}></Route>
            </Switch>
        </Router>
    )
}

export default App
