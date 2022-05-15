import Input from "@material-tailwind/react/Input" ;

const AddNewProduct = () => {
    console.log("Add New Product")
    return (
        <form className="w-full container text-center mt-6">
            <div className=" max-w-sm flex-col justify-center">
                <div className="mb-6">
                    <Input placeholder="Product Name" color="blue" size="lg" outline="Product Name"/>
                </div>
                <div className="mb-6">
                    <Input type="number" placeholder="Price" color="blue" size="lg" outline="Price"/>
                </div>
                <div className="mb-6">
                    <Input type="file" placeholder="Price1" color="blue" size="lg" outline="Image"/>
                </div>
                <div className="mb-6">
                    <Input placeholder="Category" color="blue" size="lg" outline="Category"/>
                </div>
                <div className="mb-6">
                    <Input placeholder="Brand" color="blue" size="lg" outline="Brand"/>
                </div>
            </div>
        </form>

    );

}

export default AddNewProduct;