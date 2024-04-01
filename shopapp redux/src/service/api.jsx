import axios from "axios"
import toast from "react-hot-toast";
import {setLoading } from "../redux/Slices/authSlice"

//url
const Url = 'http://localhost:7000';



//add Product
export async function addProduct(data ,dispatch,navigate) {
    const toastId = toast.loading("Loading....")
      dispatch(setLoading(true));
    try {


        const response = await axios.post(`${Url}/api/v1/addProduct`, data )
        console.log("response", response)

        if (!response.data.success) {
            throw new Error(response.data.message);
        }
        console.log("singup time check success", response.data.success);

          navigate("/");



    }
    catch (error) {
        console.log("this error come uploadProducts", error);

    }
      dispatch(setLoading(false))
    toast.dismiss(toastId)
}


//get all Product  


export async function FindAllProduct( dispatch) {

    const toastId = toast.loading("loading.....");
    dispatch(setLoading(true))
    let result = [];
    try {

        const response = await axios.get(`${Url}/api/v1/allProducts` )
        // console.log("response api" ,response);
        if (!response?.data?.success) {
            throw new Error(response?.data?.message)
        }
        result = response?.data?.data;
    }

    catch (error) {
        console.log("auth-api Getall Todo", error);

    }
    toast.dismiss(toastId);
    dispatch(setLoading(false));
    return result;
}

 


//update BY id
// export const updateById=async(id ,data)=>{
//     console.log("id b",id);
//     console.log("dat f",data);
//    // http://localhost:7000/api/v1/edit/6607e45fb73fce0c75986b17
  
//     return(
//         await axios.put(`${Url}/api/v1/edit/${id}`,data)
//     )
// }





export async function updateById(id,data,navigate) {

    //   dispatch(setLoading(true))
    const toastId = toast.loading("Loding.....")
    try {
      const  response= await axios.put(`${Url}/api/v1/edit/${id}`,data)
       // const response = await apiConnector("patch", updateTodoById, id);
        console.log("responseId", response);
       toast.success("Product Updated successfully")
        navigate("/");
    }
    catch (error) {
        toast.error("Todo Not Updated");
        console.log("todo-api-update", error);

    }
    // dispatch(setLoading(false));
    toast.dismiss(toastId);
}






//get data by Id
export const getDataById=async(id)=>{
    return(
        await axios.get(`${Url}/api/v1/findByIdProduct/${id}`)
    )
}


//delete by Id  
// export const deleteById=async(id)=>{
   
//     return (
//         await axios.delete(`${Url}/api/v1/deleteProduct/${id}`) 
//     )
// }



export async function deleteById(id ,navigate) {
    console.log("delete55", id)
    // dispatch(setLoading(true));
    const toastId = toast.loading("Loding.......");

    try {
      //  const response = await apiConnector("Delete", deleteTodoById, id);
        const response= await axios.delete(`${Url}/api/v1/deleteProduct/${id}`) 
        console.log("response2",response);
        toast.success("Product Deleted successfully")
        

    }
    catch (error) {
        toast.error("Product Not Delete");
        console.log("todo-api-delete", error)

    }
    toast.dismiss(toastId);
    //   dispatch(setLoading(false));
}







