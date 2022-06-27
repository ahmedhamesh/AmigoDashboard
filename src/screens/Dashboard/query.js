import {dashboard} from "../../API";
import getQuery from '../../utilities/query';

const queryClinet = getQuery();

export const ALL_CATEGORIES = 'dashboard.getAllCategories';

queryClinet.setQueryDefaults(ALL_CATEGORIES, {
    queryFn: () => dashboard.category.all(),
    onError: (error) => {
        console.log("error get all categories: ", error);
    }

})

export const ALL_BRANDS = 'dashboard.getAllBrands';

queryClinet.setQueryDefaults(ALL_BRANDS,{
    queryFn: () => dashboard.brand.all(),
    onError: (error) => {
        console.log("error get all brands: ", error);
    }
})

export const ALL_PRODUCTS = "dashboard.getAllProducts";

queryClinet.setQueryDefaults(ALL_PRODUCTS,{
    queryFn: () => dashboard.product.all(),
    onError: (error) => {
        console.log("error get all products: ", error);
    }
})

