import {useState} from 'react';
import AdminNavbar from './AdminNavbar';
import { NavLink }  from 'react-router-dom';
import Icon from '@material-tailwind/react/Icon';
import H6 from '@material-tailwind/react/Heading6';

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState('-left-64');

    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}>
                <div className="flex-col items-stretch min-h-full flex-wrap px-0 relative">
                    <a className="mt-2 text-center w-full inline-block" href="#">
                        <H6 color="gray">Amigo Dashboard</H6>
                    </a>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />
                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to={`/dashboard/home`}
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                     activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                     >
                                    <Icon name="home" size="2xl" />
                                    Home
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 ">
                                <NavLink
                                    to={`/dashboard/products`}
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                     activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="layers" size="2xl" />
                                    Products
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to={`/dashboard/categories`}
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="list_alt" size="2xl" />
                                    Categories
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to={`/dashboard/brands`}
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                <Icon name="web" size="2xl" />
                                    Brands
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to={`/dashboard/users`}
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="account_circle" size="2xl" />
                                    Users
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Sidebar;
