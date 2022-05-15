import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import { useHistory } from 'react-router-dom';

const ProductTable = () => {
    const history = useHistory();
    const handleButtonClick = () => {
        history.push('/dashboard/AddNew');
    }
    console.log('Products table page');
    return (
        <div className="mt-5">
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
                                <th className="px-2 text-purple-500 font-bold align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                    Image
                                </th>
                                <th className="px-2 text-purple-500 font-bold align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                    Price
                                </th>
                                <th className="px-2 text-purple-500 font-bold align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                    Category
                                </th>
                                <th className="px-2 text-purple-500 font-bold align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                    Brands
                                </th>
                                <th className="px-2 text-purple-500 font-bold align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap  text-left">
                                    Visibility
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th className="px-2 text-black font-bold align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap  text-left">
                                    Jeans
                                </th>
                                <th className="border-b border-gray-200 align-middle text-black text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Image
                                </th>
                                <th className="border-b border-gray-200 align-middle text-black text-sm whitespace-nowrap px-2 py-4 text-left">
                                    100$
                                </th>
                                <th className="border-b border-gray-200 align-middle text-black text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Jeans
                                </th>
                                <th className="border-b border-gray-200 align-middle  text-black text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Polo
                                </th>
                                <th className="border-b border-gray-200 align-middle text-black text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Visible
                                </th>

                            </tr>
                            </tbody>
                        </table>
                    </div>
                </CardBody>
            </Card>
        </div>


);
}
export default ProductTable;