import Input from "@material-tailwind/react/Input" ;
import {useHistory} from "react-router-dom";
import {useMutation, useQuery} from "react-query";
import {CREATE_CATEGORY, CREATE_Product} from "../mutation";
import {useEffect, useState, useMemo} from "react";
import MainLayout from "../layouts/MainLayout";
import {ALL_BRANDS, ALL_CATEGORIES} from "../query";
import Select from "react-select";
import Button from "@material-tailwind/react/Button";


const ProductForm = () => {
    const history = useHistory();

    const {data: brands, refetch: getAllBrands} = useQuery(ALL_BRANDS);

    useEffect(() => {
        getAllBrands();
    }, []);

    const brandOptions = useMemo(() => {
        if (brands && brands.length > 0) {
            return brands.map((brand) => {
                return {
                    value: brand?.id,
                    label: brand?.name,
                }
            });
        }
        return [];
    }, [brands]);


    const {data: categories, refetch: getAllCategory} = useQuery(ALL_CATEGORIES);

    useEffect(() => {
        getAllCategory();
    }, []);

    const categoriesOption = useMemo(() => {
        if (categories && categories.length > 0) {
            return categories.map((category) => {
                return {
                    value: category?.id,
                    label: category?.name,
                }
            });
        }
        return [];
    }, [categories]);





    const {mutate: createProduct, isLoading: isloadingCreateProduct} = useMutation(CREATE_Product, {
        onSettled: (data, error) => {
            console.log(data);
            console.log(error);
            if (!error) {
                console.log("data: ", data);
                history.push('/dashboard/products');
            } else {
                console.log(error?.message);
            }

        },
    });


    const [form, setForm] = useState({
        name: '',
        description: '',
        price: '',
        salePrice: '',
        image: '',
        images: '',
        brandId: '',
        categoryId: '',
    })

    const handleChange = (event) => {

        if (event && event?.target) {
            const {value, name} = event?.target;
            setForm({...form, [name]: value});
        }
    }

    console.log(form);
    const SELECT_TYPES = {
        BRAND: 'BRAND',
        CATEGORY: 'CATEGORY',
    };

    const handleChangeSelect = (item, name) => {
        if(item) {
            const {value} = item;
            if(name === SELECT_TYPES.BRAND) {
                setForm({...form, brandId: value});
            } else {
                setForm({...form, categoryId: value});
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        createProduct(form);
    }


    return (
        <MainLayout>
            <form className="w-full container text-center mt-6">
                <div className=" max-w-sm flex-col justify-center">
                    <div className="mb-6">
                        <Input name={'name'} placeholder="Product Name" color="blue" size="lg" outline="Product Name"
                               onChange={(e)=>handleChange(e)}/>
                    </div>
                    <div className="mb-6">
                        <Input name={'description'} placeholder="description" color="blue" size="lg"
                               outline="description" onChange={(e)=>handleChange(e)}/>
                    </div>
                    <div className="mb-6">
                        <Input name={'price'} type="number" placeholder="Price" color="blue" size="lg" outline="Price"
                               onChange={(e)=>handleChange(e)}/>
                    </div>
                    <div className="mb-6">
                        <Input name={'salePrice'} type="number" placeholder="Sale Price" color="blue" size="lg"
                               outline="Sale Price" onChange={(e)=>handleChange(e)}/>
                    </div>
                    <div className="mb-6">
                        <Input name={'image'} type="file" placeholder="image" color="blue" size="lg" outline="Image"
                               onChange={(e)=>handleChange(e)}/>
                    </div>
                    <div className="mb-6">
                        <Input name={'images'} type="file" placeholder="images" color="blue" size="lg" outline="Images"
                               onChange={(e)=>handleChange(e)}/>
                    </div>
                    <div className="mb-6">
                        <Select name={`brandId`} placeholder={`Select Brand`} className={`text-black`} options={brandOptions} onChange={(e) => handleChangeSelect(e, SELECT_TYPES.BRAND)}/>
                    </div>
                    <div className="mb-6">
                        <Select name={`categoryId`} placeholder={`Select Category`} className={`text-black`} options={categoriesOption} onChange={(e) => handleChangeSelect(e, SELECT_TYPES.CATEGORY)}/>
                    </div>

                    <div className="mb-6">
                        <Button buttonType={''} block color={isloadingCreateProduct ? 'gray' : 'blue'} onClick={isloadingCreateProduct ? () => {} : (e) => handleSubmit(e)}>Add New Product</Button>
                    </div>
                </div>
            </form>
        </MainLayout>

    );

}

export default ProductForm;