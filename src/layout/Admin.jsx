import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { AdminWrapper, Navbar, Sidebar } from '../components'
import Dashboard from '../pages/Dashboard/Dashboard'

const Admin = () => {
    return (
        <Fragment>
            <div class="h-screen flex overflow-hidden bg-cool-gray-100">
                {/* Side Bar */}
                <Sidebar />
                <div class="flex-1 overflow-auto focus:outline-none" tabindex="0">
                    {/* Navbar */}
                    <Navbar />
                    <AdminWrapper>
                        <Switch>
                            <Route path="/" component={Dashboard} />
                        </Switch>
                    </AdminWrapper>
                </div>
            </div>
        </Fragment>
    )
}

export default Admin
