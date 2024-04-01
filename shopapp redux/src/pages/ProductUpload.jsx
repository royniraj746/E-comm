import React, { useState } from 'react';
import { addProduct } from "../service/api"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"



const ProductUpload = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {

    setImage(e.target.files[0]);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('image', image);
      console.log("form data", formData);

      const response = await addProduct(formData,dispatch,navigate);

      // Handle the response as needed
    } catch (error) {
      console.error('Error uploading product:', error.message);
    }
  };

  return (
    <>
    <h1 className='text-3xl p-5 text-blue-700 bg-yellow-600 w-50% text-center '>Upload Your Products Here</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-[50%] mx-auto gap-y-4 mt-6 ">
        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
            Title:
            <sup className="text-pink-200">*</sup>
          </p>
          <input className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5" type="text" required value={title}  placeholder="Enter Product Title" onChange={(e) => setTitle(e.target.value)} />

        </label>



        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Description:
            <sup className="text-pink-200">*</sup>
          </p>
          <textarea className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5" value={description} required placeholder='Enter Product Description' onChange={(e) => setDescription(e.target.value)} />

        </label>



        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Price:
            <sup className="text-pink-200">*</sup>
          </p>
          <input className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5" type="number" required placeholder='Enter Product Price' value={price} onChange={(e) => setPrice(e.target.value)} />

        </label>




        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Product Image:
            <sup className="text-pink-200">*</sup>
          </p>
          <input className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5" type="file" onChange={handleImageChange} required placeholder='Upload Product Image' />
        </label>
        <button type='submit' className="bg-yellow-500 hover:text-blue-500 py-[8px] px-[12px] w-fit rounded-[8px] mt-6 font-medium text-richblack-900 ">Upload Product</button>
     

    
      </form>
    </>
  )
}

export default ProductUpload;