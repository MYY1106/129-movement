import { ReactElement, lazy } from 'react'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './views/Home'

import History from './views/History'

import End from './views/End'

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/history" component={History}></Route>
                <Route exact path="/end" component={End}></Route>
            </Switch>
        </Router>
    )
}

export default App
