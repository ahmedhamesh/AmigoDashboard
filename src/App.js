import './App.css';
import {Route, Switch} from "react-router-dom";
import "@material-tailwind/react/tailwind.css";
import Sidebar from "./screens/Dashboard/Sidebar";
import Home from "./screens/Dashboard";
import ProductTable from "./screens/Dashboard/Product/ProductTable";
import './assets/styles/tailwind.css';
import ProductForm from "./screens/Dashboard/Product/ProductForm";
import CategoryTable from "./screens/Dashboard/Category/CategoryTable";
import AddCategory from "./screens/Dashboard/Category/CategoryForm";
import BrandTable from "./screens/Dashboard/Brand/BrandTable";
import BrandForm from "./screens/Dashboard/Brand/BrandForm";
import UserTable from "./screens/Dashboard/User/UserTable";
import AddUser from "./screens/Dashboard/User/AddUser";
import {getAxiosConnection} from "./API";
import {useEffect} from "react";


const App = (props) => {


    //setup axios connection
    useEffect(() => {
        getAxiosConnection();
    }, [])

    return (

            <div className="md:ml-64">
                    <Sidebar/>
                    <Switch>
                        <Route path={`/dashboard/home`}>
                            <Home/>
                        </Route>
                        <Route path={`/dashboard/products`}>
                            <ProductTable/>
                        </Route>
                        <Route path={`/dashboard/AddNew`}>
                            <ProductForm />
                        </Route>
                        <Route path={`/dashboard/categories`}>
                            <CategoryTable />
                        </Route>
                        <Route path={`/dashboard/addcategory`}>
                            <AddCategory />
                        </Route>
                        <Route path={`/dashboard/brands`}>
                            <BrandTable />
                        </Route>
                        <Route path={`/dashboard/addbrand`}>
                            <BrandForm />
                        </Route>
                        <Route path={`/dashboard/users`}>
                            <UserTable />
                        </Route>
                        <Route path={`/dashboard/adduser`}>
                            <AddUser />
                        </Route>
                    </Switch>
            </div>

    );
}

export default App;
