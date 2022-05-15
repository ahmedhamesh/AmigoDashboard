import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";

const AddBrand = ()=> {
    return(
        <div className="w-full container text-center mt-6">
            <div className=" max-w-sm flex-col justify-center">
                <div className="mb-6">
                    <Input placeholder="Add New Category" color="blue" size="lg" outline="Category Name"/>
                </div>
                <div className="mb-6">
                    <Button>Add New Brand</Button>
                </div>
            </div>
        </div>
    );

}
export default AddBrand;