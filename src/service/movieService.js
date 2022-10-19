
import {axiosService} from "./axios.service";
import {urls} from "../config";



const MovieService = {
    getAll:(page  = '1') => axiosService.get(urls.movie, {params:{page}})
}


// const som = () => {
    // try {
    //     MovieService.getAll().then(res => console.log(res));
    // } catch (error) {
    //     console.log(error, 'ERROR')
    // }
// }

// som()

export {
    MovieService
}