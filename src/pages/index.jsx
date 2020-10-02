import React from 'react' 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Getstarted from './getStarted/getStarted.jsx'
import Test from './testPage/test.jsx'

const Index = () => {
    return (
        <Router>
            <Switch>
                <Route path="/test" component={Test}/>
                <Route path="/" component={Getstarted}/>
            </Switch>
        </Router>
    )
}

export default Index