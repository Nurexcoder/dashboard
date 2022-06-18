import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/Login/Login";
import { useState } from "react";
import { useEffect } from "react";
import NewCategory from "./pages/NewCategory/NewCategory";

function App() {
    const [user, setUser] = useState();
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, []);

    return (
        <Router>
            <Topbar />
            <div className='container'>
                <Sidebar />
                <Switch>
                    <Route
                        exact
                        path='/'
                        component={() =>
                            user ? <Home /> : <Redirect to='/login' />
                        }
                    />

                    
                    <Route path='/products'>
                        <ProductList />
                    </Route>
                    <Route path='/product/:productId'>
                        <Product />
                    </Route>
                    <Route path='/newproduct'>
                        <NewProduct />
                    </Route>
                    <Route path='/newCategory'>
                        <NewCategory />
                    </Route>
                    <Route path='/login'>
                        <Login hi='Hi' setUser={setUser} />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
