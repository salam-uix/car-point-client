import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Product from './Pages/Home/Product/Product';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products">
              <Product></Product>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
