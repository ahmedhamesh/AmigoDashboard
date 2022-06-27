import {dashboard} from "../../API";
import getQuery from '../../utilities/query';

const queryClinet = getQuery();

export const  CREATE_CATEGORY = 'category.create';


queryClinet.setMutationDefaults(CREATE_CATEGORY, {
    mutationFn: dashboard.category.create,
    onError: (error) => {
        console.log(error);
    }
});
export const  CREATE_Brand = 'brand.create';


queryClinet.setMutationDefaults(CREATE_Brand, {
    mutationFn: dashboard.brand.create,
    onError: (error) => {
        console.log(error);
    }
});

export const  CREATE_Product = 'Product.create';

queryClinet.setMutationDefaults(CREATE_Product, {
    mutationFn: dashboard.product.create,
    onError: (error) => {
        console.log(error);
    }
});