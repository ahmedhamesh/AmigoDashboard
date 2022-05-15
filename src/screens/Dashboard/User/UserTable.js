import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import { useHistory } from 'react-router-dom';

const UserTable = () => {
    const history = useHistory();
    const handleButtonClick = () => {
        history.push('/dashboard/adduser');
    }
    return (
        <div className="mt-5">
            <Card>
                <CardHeader className="flex" color="purple" contentPosition="left">
                    <div className="flex w-full justify-between ">
                        <h2 className="text-white text-2xl">Users Table</h2>
                        <button onClick={handleButtonClick}  className="duration-500 hover:bg-blue-500 font-bold font-semibold rounded w-40 h-10">
                            Add New User
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
                                    UserName
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th className="px-2 text-black font-bold align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap  text-left">
                                    Ahmed
                                </th>
                                <th className="border-b border-gray-200 align-middle text-black text-sm whitespace-nowrap px-2 py-4 text-left">
                                    User1
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
export default UserTable;