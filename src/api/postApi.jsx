import axios from "axios";

 const api = axios.create({
    baseURL:"https://restcountries.com/v3.1",
});
// HTTP methods

export const  getCountryData = () =>{
    return api.get("/all?fields=name,population,region,capital,flags");
};

//HTTP  get methods for single country
export const getSingleCountry = (name) =>{
    return api.get(`/name/${name}`);
};
