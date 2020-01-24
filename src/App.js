import React from 'react';
import NavBar from './components/general/NavBar';
import vars from './data/vars';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/home/Home'
import Artists from './components/artists/Artists'
import Artist from './components/artists/Artist'

class App extends React.Component {

  render() {
    return (
    <div className="container-fluid">
      <NavBar />
      <h1 className="display-3">{vars.appName}</h1>
      <div className="col-md-12">
        <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/artists' component={Artists} />
              <Route exact path='/artist/:id' component={Artist} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
    )
  }
}

export default App;

