import './App.css';
import {Route, Switch} from "react-router-dom";
import "@material-tailwind/react/tailwind.css";
import Sidebar from "./screens/Dashboard/Sidebar";
import Home from "./screens/Dashboard";
import ProductTable from "./screens/Dashboard/Product/Table";
import './assets/styles/tailwind.css';
import AddNewProduct from "./screens/Dashboard/Product/AddNewProduct";
import CategoryTable from "./screens/Dashboard/Category/CategoryTable";
import AddCategory from "./screens/Dashboard/Category/AddCategory";
import BrandTable from "./screens/Dashboard/Brand/BrandTable";
import AddBrand from "./screens/Dashboard/Brand/AddBrand";
import UserTable from "./screens/Dashboard/User/UserTable";
import AddUser from "./screens/Dashboard/User/AddUser";


const App = (props) => {
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
                            <AddNewProduct />
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
                            <AddBrand />
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
