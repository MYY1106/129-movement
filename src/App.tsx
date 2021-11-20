import { ReactElement, lazy } from 'react'

import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './views/Home'

const History = lazy(() => import('./views/History'))

const End = lazy(() => import('./views/End'))

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
