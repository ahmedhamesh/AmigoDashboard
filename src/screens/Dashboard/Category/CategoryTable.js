import {useEffect} from "react";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader" ;
import CardBody from "@material-tailwind/react/CardBody";
import {useHistory} from "react-router-dom";
import {useQuery} from "react-query";
import {ALL_CATEGORIES} from "../query";
import MainLayout from "../layouts/MainLayout";

const CategoryTable = () => {
    const history = useHistory();
    const handleButtonClick = () => {
        history.push('/dashboard/addcategory');
    }

    const {data: categories, refetch: getAllCategory} = useQuery(ALL_CATEGORIES);
    
    useEffect(() => {
        getAllCategory();
    }, []);
    
    console.log("categories: ", categories);

    return (
        <MainLayout>
        <Card>
           <CardHeader className="flex" color="purple" contentPosition="center">
               <div className="flex w-full justify-between ">
                   <h2 className="text-white text-2xl">Category Table</h2>
                   <button onClick={handleButtonClick} className="duration-500 hover:bg-blue-500 font-bold font-semibold rounded w-40 h-10">
                       Add New Category
                   </button>
               </div>
           </CardHeader>
            <CardBody>
                <div className="overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">

                    <thead className="">
                    <tr>
                        <th className="px-2 text-purple-500 text-center border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                All Categories
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {categories && categories.map((category) => (
                        <tr key={category?.id}>
                            <th className="border-b text-center border-gray-200 align-middle text-black text-sm whitespace-nowrap px-2 py-4 text-left">
                                {category?.name}
                            </th>
                        </tr>
                    )) }

                    </tbody>

                </table>
                </div>

            </CardBody>
        </Card>
        </MainLayout>
    )
}

export default CategoryTable;