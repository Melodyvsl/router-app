import React, { Component } from 'react';
import NavBar from './components/navbar';
import { Route, Switch, Redirect } from 'react-router-dom'; //ridirect baraye handle kardane url haye nashensa va direct kardaneshon be safeye error estefade mishe, swith baraye inke faghat safeye khaste shode naayesh dade she masalan na har safei ke / dare va exact ham ke baraye homem izarim ke har moghe faghat / dashtim namayesh dade she
import Products from './components/products';
import Posts from './components/posts';
import Home from './components/home';
import Dashboard from './components/admin/dashboard';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';
import './App.css';

//import Products from '../../../finish/router-app/src/components/products';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <div className="content">
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" render={props => <Products sortBy="newest" {...props} />} />
            <Route path="/posts/:year?/:month?" component={Posts} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/message" to="/posts" />
            <Route path="/admin" component={Dashboard} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div> //exact be in manie ke vaghti faghat / darim home biad vali chon baghie ham ba / shoro mishe dar gheyre in sorat ham home namayesh peyda mikone ham baghie... <Route path="/" exact component={Home} /> vali rahe dge ine ke az component Switch dar react estefade konim ke dar in halat faghat route khaste shode namayesh dade mishe na baghie(ya switch ya exact moshkele namayeshe home ba baghiaro hal mikone)
    ); //route aval onjjori neveshtim ta match history va location ro props kone ke by defaul property haye hameye componenthas ama age be ye componen property ezafe konim mire va props konimesh barmigarde{...props} baraye oon 3 ta izhgehie
  } //? vaghti ino be month va year ezafe kardim yani ona optional hastan age nabodan ham bayad oon url render beshe va component ro neshon bede dar gheyre in soorat age masalan month nabashe home be namayesh dar miad chon swith ba avalin componennti ke kamelan match bashe ertebat gerefte va namayeshehsh mide
} // render baraye ezafe kardane parametr  be component estefade shod

export default App;
