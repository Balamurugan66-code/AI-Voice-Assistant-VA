import React, { useContext } from 'react'
import Card from '../components/Card'
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/authBg.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.jpeg"
import image7 from "../assets/image7.jpeg"
import { userDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { MdKeyboardBackspace } from "react-icons/md";

function Customize() {
  const { selectedImage, setSelectedImage } = useContext(userDataContext)
  const navigate = useNavigate()

  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex-col p-[20px]'>

      <MdKeyboardBackspace
        className='absolute top-[30px] left-[30px] text-white cursor-pointer w-[25px] h-[25px]'
        onClick={() => navigate("/")}
      />

      <h1 className='text-white mb-[40px] text-[30px] text-center'>
        Select your <span className='text-blue-200'>Assistant Image</span>
      </h1>

      <div className='w-full max-w-[900px] flex justify-center items-center flex-wrap gap-[15px]'>

        <div onClick={()=>setSelectedImage(image1)}><Card image={image1}/></div>
        <div onClick={()=>setSelectedImage(image2)}><Card image={image2}/></div>
        <div onClick={()=>setSelectedImage(image3)}><Card image={image3}/></div>
        <div onClick={()=>setSelectedImage(image4)}><Card image={image4}/></div>
        <div onClick={()=>setSelectedImage(image5)}><Card image={image5}/></div>
        <div onClick={()=>setSelectedImage(image6)}><Card image={image6}/></div>
        <div onClick={()=>setSelectedImage(image7)}><Card image={image7}/></div>

      </div>

      {selectedImage && (
        <button
          className='min-w-[150px] h-[60px] mt-[30px] text-black font-semibold bg-white rounded-full text-[19px]'
          onClick={() => navigate("/customize2")}
        >
          Next
        </button>
      )}

    </div>
  )
}

export default Customize