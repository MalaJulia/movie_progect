import {axiosService} from "./axios.service";
import {urls} from "../config";

const searchService =
    {searchFilms:(filmName = '') => axiosService.get(urls.search, {params:{query: filmName}})}


export {
    searchService
}