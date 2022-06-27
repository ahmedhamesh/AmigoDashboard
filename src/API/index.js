import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_API_URL;

let axiosConnection = null;

export function getAxiosConnection() {
    if (!axiosConnection) {
        axiosConnection = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json'
            }
        });

        axiosConnection.interceptors.response.use((response) => {
            const { data } = response;
            if(data.error) {
                throw data.error;
            }
            return response;
        })
        return axiosConnection;
    }
}

axiosConnection = getAxiosConnection();

const BASE_API = 'api/';

export const dashboard = {
    user: {
        getUsers: () => {

        },
    },
    category: {
        all: async () => {
            const { data } = await axiosConnection.get(`${BASE_API}categories`);
            return data;
        },
        create: async ({name}) => {
            const { data } = await axiosConnection.post(`${BASE_API}categories`, {
                name,
            });
            return data;
        },
    },
    brand: {
        all: async () => {
            const {data} = await axiosConnection.get(`${BASE_API}brands`);
            return data;
        },
        create: async ({name}) => {
            const { data } = await axiosConnection.post(`${BASE_API}brands`, {
                name,

            });
            return data;
        },
    },
    product: {
        all: async () => {
            const {data} = await axiosConnection.get(`${BASE_API}products`);
            return data;
        },
        create: async ({name,description,price,salePrice,image,images,brandId,categoryId}) => {
            const { data } =  await axiosConnection.post(`${BASE_API}products`, {
                name,
                description,
                price,
                sale_price: salePrice,
                image,
                images,
                brands_id :brandId ,
                category_id: categoryId,
            });
            return data;
        },
    }
}