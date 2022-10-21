import {axiosService} from "./axios.service";
import {urls} from "../config";

const pageService={

    getAll:() => axiosService.get(`${urls.movie}`)
}

export {
    pageService
}