import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import { useHistory } from 'react-router-dom';
import {useQuery} from "react-query";
import {ALL_PRODUCTS} from "../query";
import {useEffect} from "react";
import MainLayout from "../layouts/MainLayout";

const ProductTable = () => {
    const history = useHistory();
    const handleButtonClick = () => {
        history.push('/dashboard/AddNew');
    }

    const {data: products, refetch: getAllProducts} = useQuery(ALL_PRODUCTS);

    useEffect(() => {
        getAllProducts();
    }, []);

    console.log("products: ", products);
    return (
        <MainLayout>
            <Card>

                <CardHeader className="flex" color="purple" contentPosition="left">
                    <div className="flex w-full justify-between ">
                        <h2 className="text-white text-2xl">Product Table</h2>
                        <button onClick={handleButtonClick}  className="duration-500 hover:bg-blue-500 font-bold font-semibold rounded w-40 h-10">
                            Add New Product
                        </button>
                    </div>
                </CardHeader>

                <CardBody>
                    <div className="overflow-x-auto">
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                            <tr>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                    Name
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                    description
                                </th>

                                <th className="px-2 text-purple-500 font-bold align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                    Price
                                </th>
                                <th className="px-2 text-purple-500 font-bold align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                   Sale Price
                                </th>
                                <th className="px-2 text-purple-500 font-bold align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap  text-left">
                                    Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {products && products.map((products) => (
                            <tr key={products?.id}>
                                <th className="px-2 text-black font-bold align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap  text-left">
                                    {products?.name}
                                </th>
                                <th className="px-2 text-black font-bold align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap  text-left">
                                    {products?.description}
                                </th>
                                <th className="border-b border-gray-200 align-middle text-black text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {products?.price}
                                </th>
                                <th className="border-b border-gray-200 align-middle text-black text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {products?.sale_price}
                                </th>

                                <th className="border-b border-gray-200 align-middle text-black text-sm whitespace-nowrap px-2 py-4 text-left">
                                    details
                                </th>

                            </tr>
                            )) }
                            </tbody>
                        </table>
                    </div>
                </CardBody>
            </Card>
        </MainLayout>


);
}
export default ProductTable;