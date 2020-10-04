import React from 'react' 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Getstarted from './getStarted/getStarted.jsx'
import Test from './Content/index.jsx'

const Index = () => {
    return (
        <Router>
            <Switch>
                <Route path="/intro" component={Test}/>
                <Route path="/" component={Getstarted}/>
            </Switch>
        </Router>
    )
}

export default Index