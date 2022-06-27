import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";
import {useState} from "react";
import {useMutation} from "react-query";
import {CREATE_CATEGORY } from "../mutation";
import {useHistory} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const CategoryForm = ()=> {

    const history = useHistory();

        const { mutate: createCategory, isLoading: isloadingCreateCategory} = useMutation(CREATE_CATEGORY, {
            onSettled: (data, error) => {
                if(!error) {
                    console.log("data: ", data);
                    history.push('/dashboard/categories');
                }else {
                    console.log(error?.message);
                }

            },
        });


        const [form, setForm] = useState({
            name: '',
        })

        const handleNameInput = (event) => {
            console.log(event?.target?.value || '');

            if(event && event?.target) {
                const {value} = event?.target;
                setForm({name: value});
            }

        }
        const handleSubmit = () => {
            console.log(form);
            createCategory({name: form.name})
        }


        return(
        <MainLayout isForm>
            <div className="mb-6">
                <Input placeholder="Add New Category" color="blue" size="lg" outline="Category Name" onChange={(e) => handleNameInput(e)} />
            </div>
            <Button block color={isloadingCreateCategory ? 'gray' : 'blue'} onClick={isloadingCreateCategory ? () => {} : handleSubmit}>Add New Category</Button>
        </MainLayout>
    );

}
export default CategoryForm;