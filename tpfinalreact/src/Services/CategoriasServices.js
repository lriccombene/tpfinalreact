import instance from "../Config/axios"
export const getCategorias = (buscar="")=>{
    return instance.get("/categories?buscar="+buscar)
}
export const getCategoria = (id)=>{
    
    return instance.get("/categories/"+id);
}
export const create = (data)=>{
    return instance.post("/categories/",data)
}