import {axiosService} from "./axios.service";
import {urls} from "../config";


const MovieService = {
    getAll:(page  = '1') => axiosService.get(urls.movie, {params:{page}})
}

export {
    MovieService
}