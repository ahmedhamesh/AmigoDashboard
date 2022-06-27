import {QueryClient} from "react-query";

let queryClinet = null;
export default function getQuery () {
    if(!queryClinet) {
         queryClinet = new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    refetchOnReconnect: false,
                    notifyOnChangeProps: 'tracked',
                    retry: false,
                    staleTime: Infinity,
                }
            }
        });
    }
    return queryClinet;
}

