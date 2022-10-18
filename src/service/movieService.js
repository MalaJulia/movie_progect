
import {axiosService} from "./axios.service";
import {urls} from "../config";



const MovieService ={
    getAll:() => axiosService.get(urls.movie)
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