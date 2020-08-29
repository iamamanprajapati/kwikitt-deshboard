import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";
import Categories from './Screens/Categories'
import { Home } from "./Screens/Home";
import { Banners } from "./Screens/Banners";
import { Services } from "./Screens/Services";
import { Notifications } from "./Screens/Notifications";
import { Partners } from "./Screens/Partners";
import { Users } from "./Screens/Users";
import { UserForm } from "./Forms/UserForm";
import { CategoryForm } from "./Forms/CategoryForm"
import { ServiceForm } from "./Forms/ServiceForm"
import { Bookings } from "./Screens/Bookings";
import { SelectPartner } from "./SelectPartner";


export class Routing extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => <Home />} />
                <Route path="/bookings" render={() => <Bookings />} />
                <Route path="/category" render={() => <Categories />} />
                <Route path="/Banners" render={() => <Banners />} />
                <Route path="/Notifications" render={() => <Notifications />} />
                <Route path="/Partners" render={() => <Partners />} />
                <Route path="/Services" render={() => <Services />} />
                <Route path="/Users" render={() => <Users />} />
                <Route path="/UserForm" render={() => <UserForm />} />
                <Route path="/CategoryForm" render={() => <CategoryForm />} />
                <Route path="/ServiceForm" render={() => <ServiceForm />} />
                <Route path="/SelectPartner" render={() => <SelectPartner />} />
            </Switch>
        )
    }
}

export default Routing;
