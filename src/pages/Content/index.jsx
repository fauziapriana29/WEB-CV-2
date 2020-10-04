import React from 'react'
import { BrowserRouter as Route, Switch, useRouteMatch } from 'react-router-dom'

import Navbar from '../../components/Navbar/Navbar.jsx' 
import Intro from '../Content/introduce/intoduce.jsx'

const Test = () => {

    const {url} = useRouteMatch()

    return (
        <div style={{ textAlign: 'center' }}>    
            <Switch>
            <Navbar />
                <Route path={url} component={Intro}/>
            </Switch>
        </div>
    )
}

export default Test