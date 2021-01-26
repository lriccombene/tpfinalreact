import instance from "../Config/axios"
export const getProducts = ()=>{
    return instance.get("/products")
}
export const getProduct = (id)=>{

    return instance.get("/product/"+id)
}