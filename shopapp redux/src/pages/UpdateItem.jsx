
import { useNavigate, useLocation } from "react-router-dom"
import React, { useState } from 'react';
import { addProduct, getDataById, updateById } from "../service/api"
import { useEffect } from "react";
import axios from "axios";


const UpdateItem = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let parms = location.pathname.split("/");
  console.log("parms", parms)
  let id = parms[2]
   
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
 const [t, setT] = useState('');

  useEffect(() => {
    getUserData(id);

  }, [])

  const getUserData = async (id) => {
    const userDetails = await getDataById(id ,navigate);
   setT(userDetails)
  }

  const handleImageChange = (e) => {

    setImage(e.target.files[0]);
  };
  console.log("file", image);
  console.log(typeof image)

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('image', image);
      console.log("form data", formData);

      const response = await updateById(id,formData,navigate);
     
      console.log('Product uploaded:', response);
      
    } catch (error) {
      console.error('Error uploading product:', error.message);
    }
  };

  return (
    <>
    <h1 className='text-3xl p-5 text-blue-700 bg-blue-950 w-50% text-center '>Update Your items Here</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-[50%] mx-auto gap-y-4 mt-6 ">
        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Title:
            <sup className="text-pink-200">*</sup>
          </p>
          <input className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5" type="text"  value={title} placeholder="Enter Product Title" onChange={(e) => setTitle(e.target.value)} />

        </label>



        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Description:
            <sup className="text-pink-200">*</sup>
          </p>
          <textarea className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5" value={description}  placeholder='Enter Product Description' onChange={(e) => setDescription(e.target.value)} />

        </label>



        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Price:
            <sup className="text-pink-200">*</sup>
          </p>
          <input className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5" type="number"  placeholder='Enter Product Price' value={price} onChange={(e) => setPrice(e.target.value)} />

        </label>




        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Product Image:
            <sup className="text-pink-200">*</sup>
          </p>
          <input className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5" type="file" onChange={handleImageChange}  placeholder='Upload Product Image' />
        </label>
        <button type='submit' className="bg-blue-950  hover:text-yellow-500 py-[8px] px-[12px] w-fit rounded-[8px] mt-6 font-medium text-richblack-900 fit">Update Product</button>








        {/* <button type="submit">Upload Product</button> */}
      </form>
    </>
  )
}

export default UpdateItem;