import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Footer from './components/Footer/Footer'
import './App.scss';

function App() {
  return (
    <div className="app">
      <Router> 
        <Header></Header>
        <div className="container">
          <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/movie/:imdbID" component={ MovieDetail } />
            <Route component={ PageNotFound } />
          </Switch>
        </div>
        <Footer/>
      </Router>

    </div>
  )
}

export default App;

// BrowserRouter(Router):  Esta envoltura nos da acceso al API de historia de HTML5 para mantener nuestra interfaz gráfica
// en sincronía con la locación actual o URL. La función principal del BrowserRouter: poder declarar rutas individuales dentro de nuestra aplicación.

// Switch: El componente switch examina todas sus rutas secundarias y muestra la primera cuya ruta coincide con la URL actual.
// El componente switch debe incluirse dentro del componente Router y podemos colocar todas nuestras rutas dentro de él.

// Route: Para definir las diferentes rutas de nuestra aplicación, podemos usar el componente Route. La función de este
// componente es elegir que renderizar según la locación actual.

