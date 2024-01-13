import axios from "axios";
const data_path = 'http://localhost:3001'
export async function getProductList(searchTerm){
    var req_path = ''
    if (!searchTerm) req_path = data_path+'/products'
    else req_path = data_path+'/products?name_like='+searchTerm
    const data = await axios.get(req_path)
    .then(response => {
        console.log(response)
        if(!response.statusText === "OK"){
            console.log("not ok")
            throw { message: response.statusText, status: response.status }; //eslint-disable-line
        }
        return response.data;
    })
    return data;
}

export async function getProduct(id){
    var req_path = data_path+'/products/'+id
    const response = await fetch(req_path);
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json()
    return data;
}

export async function getFeaturedList(){
    const response = await fetch(data_path+'/featured_products');
    if(!response.ok){
        throw { message: response.statusText, status: response.status }; //eslint-disable-line
    }
    const data = await response.json()
    return data;
}