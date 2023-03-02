
import axios from 'axios'

 
const BASE_URL = 'https://fakestoreapi.com'

const getApi = async ()=>{
     const response = await axios.get(`${BASE_URL}/products`)
     console.log(response.data);
     return response.data
}

export{getApi}