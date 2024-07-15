import React from 'react'
import { useForm } from "react-hook-form";

function Contactus() {
    const { 
        register, 
        handleSubmit, 
        formState: { errors }, } = useForm();

        const onSubmit = data => console.log(data);
 
    return (

<>
<div className=' modal-form max-w-screen-2l container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>    
    <form action="">
        <div className="space-y-4 mt-28 border-b border-gray-900/10 pb-12">
            
                <h1 className="text-xl text-gray-900">
                    <b>ContactUs</b>
                    <p className="mt-1 text-sm text-gray-600 py-1">
                        This information will helps us to contact you.
                    </p>
                </h1>
                

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                        Name
                    </label>
                        <div className="mt-4">
                            <input
                                    type="text"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    placeholder='Enter your Full name'
                            />
                        </div>
                </div>
                {/* Email input */}
                <div className="sm:col-span-4">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                    </label>
                        <div className="mt-4">
                            <input
                                    type="email"
                                    className="w-80 px-3 py-1 border rounded-md outline-none"
                                    placeholder='Enter your Email'
                                />
                           
                        </div>
                </div>                
                <br />
                    {/*message */}
                <div className="col-span-full">
                    <label className="block text-sm font-medium text-gray-900">
                        Message
                    </label>
                        <div className="mt-4">
                            <textarea
                                id="about"
                                name="about"
                                rows={5}
                                cols={50}
                                className=" rounded-md border outline-none py-1.5 text-gray-900"
                                placeholder='Write a few sentences about yourself.'
                            />
                        </div>
                    </div>
                    
                    {/**Button */}
                    <div className='flex justify-around mt-4'>
                        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                            Contact
                        </button>
                        
                    </div>
 
                    </div>
                
            </div>
    </form>
      
    
</div>
</>
    
  )
}

export default Contactus
