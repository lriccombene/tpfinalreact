import instance from "../Config/axios"
export const getProductos = (buscar="")=>{
    return instance.get("/productos?buscar="+buscar)
}
export const getProducto = (id)=>{
    
    return instance.get("/productos/"+id);
}
export const getProductosTop = ()=>{
    return instance.get("/productos/top");
}
export const getDelete = (id)=>{

    return instance.delete("/productos/"+id);
}
export const create = (data)=>{
    return instance.post("/productos/",data)
}