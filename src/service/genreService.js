import {axiosService} from "./axios.service";
import {urls} from "../config";

const genreService={

    getAll:() => axiosService.get(urls.genre)
}

export {
    genreService
}