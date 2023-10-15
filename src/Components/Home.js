import React from 'react'
import pfImg from '../images/profileImg.jpg'

export const Home = () => {
    const RESUME_FILE='http://localhost:3000/abhi.pdf';
    const donwloadResume = (url) =>{
        const fName= url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href=url;
        aTag.setAttribute("download", fName);
        aTag.click();
        aTag.remove();
    }
  return (
    <div className='flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md backdrop-saturate-150 backdrop-filter-none min-h-screen min-w-screen'>
       <div ><div className=' flex-col justify-center items-center'><div className='flex justify-center items-center my-4'>
            <img src={pfImg} className='w-36 h-36 rounded-full border-white border-4'></img>
        </div>
        <div className='text-center text-white justify-center  text-xl font-bold '>MY NAME IS</div>
        <div className='text-yellow-100 text-center text-4xl font-bold  text-opacity-80 transition-opacity duration-300 hover:text-opacity-100 my-2'>ABHISHEK VASHISHTH</div>

        <div className='text-white text-center text-3xl font-bold text-opacity-80 transition-opacity duration-300 hover:text-opacity-100 my-2'>SOFTWARE DEVELOPER</div>
        <div className='text-white text-center text-xl font-bold text-opacity-80 transition-opacity duration-300 hover:text-opacity-100 w-1/2 mx-auto my-2 '>I'm an experienced React developer with 3+ years of
expertise in front-end technologies like React,
JavaScript, Redux, and HTML5/CSS3.</div>
<div className='flex justify-center my-8'><button className=' bg-white rounded opacity-50 py-2 px-4 transition-opacity duration-300 hover:opacity-100 border-greyNeo border-2 ' onClick={()=>{
            donwloadResume(RESUME_FILE);
        }}>Download Cv</button></div>
        </div></div>
    </div>
  )
}
