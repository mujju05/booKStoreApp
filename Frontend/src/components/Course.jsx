import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom';
import axios from "axios";

function Course() {
    const [book,setBook]=useState([])
    useEffect(() => {
        const getBook = async() => {
            try {
              const res = await axios.get("http://localhost:4001/book");
              console.log(res.data);
              setBook(res.data);
            } catch (error) {
                console.log(error);              
            }
        };
        getBook();
    },[]);

    return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
        <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>
                We're delighted to have you  <span className='text-pink-500'> Here!:</span>
            </h1>
            <p className='mt-12'>
                It took me a Long time to realize that not everything in life is meant to ebe a beautiful story.
                Not every person we feel something deep and movinf with is meant to make a home within us, is meant to be a forever.
                Sometimes, people come into our lives to teach us how to love and Sometimes, people come into our lives to teach us how <i>not</i> to love.
                How <i>not</i> to settle , how <i>not</i> to shrink ourselves ever again.
                Yes , Sometimes people leave-but that's okay,because their lessons always stay, and that is what matters. That is what remains. 

            </p>
            <Link to={"/"}>
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
                Back
            </button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                book.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>


    </div>
    </>
  )
}

export default Course
