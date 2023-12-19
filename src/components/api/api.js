import axios from "axios";
   
const KEY = '40272444-68c2b8bdd462bea697b437f9a'
const URL_BASE = 'https://pixabay.com/api/'
  
async function getAllPhoto(searchValue, page) {

    const paramsObj = {
        key: KEY,
        q: searchValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
        page
    }

    const params = new URLSearchParams(paramsObj);
    
    const response = await axios((`${URL_BASE}?${params}`))

    return response
}

export { getAllPhoto } 

