import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../views/Home';
import Cadastro from '../views/Cadastro';
import Filtro from '../views/Filtro';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cadastro" exact component={Cadastro} />
                <Route path="/filtro" exact component={Filtro} />
            </Switch>
        </BrowserRouter>
    )
}