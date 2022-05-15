import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";



const AddUser = () => {
    return (
        <div className="w-full container text-center mt-6">
            <div className=" max-w-sm flex-col justify-center">
                <div className="mb-6">
                    <Input placeholder="Username" color="blue" size="lg" outline="Username"/>
                </div>
                <div className="mb-6">
                    <Input type="password" placeholder="Password" color="blue" size="lg" outline="Password"/>
                </div>
                <div className="mb-6">
                    <Button>Add New User</Button>
                </div>
            </div>
        </div>
    );
}

export default AddUser;