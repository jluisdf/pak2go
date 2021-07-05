import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Wellcome from './pages/Wellcome'
import Books from './components/books'
import Users from './components/users'
import Login from './pages/Login'

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Wellcome} />
            <Route path="/books" component={Books} />
            <Route path="/users" component={Users} />
        </Switch>
    )
}
