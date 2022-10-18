import axios from "axios";
import {baseURL} from "../config";

const axiosService = axios.create({baseURL})

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTcxNDU5ZDc5N2I3YmYxNWMzNzRjMzViNzRiMDdkNyIsInN1YiI6IjYzNGQ4MWI0ZWY5ZDcyMDA3ZDA3MWEzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bt9LqBZRZX36T1j06AmcZ63llx_eBXSKypGMsMk771I'

axiosService.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export {
    axiosService
}