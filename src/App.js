import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import AddProduct from './Pages/AddProduct/AddProduct';
import Home from './Pages/Home/Home/Home';
import ManageProducts from './Pages/Home/ManageProducts/ManageProducts';
import OrderNow from './Pages/Home/OrderNow/OrderNow';
import Products from './Pages/Home/Products/Products';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
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
              <Products></Products>
            </Route>
            <Route path="/addproduct">
              <AddProduct></AddProduct>
            </Route>
            <Route path="/manageProducts">
              <ManageProducts></ManageProducts>
            </Route>
            <PrivateRoute path="/ordernow/:productId">
              <OrderNow></OrderNow>
            </PrivateRoute>
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
      {/* /:productId */}
    </div>
  );
}

export default App;
