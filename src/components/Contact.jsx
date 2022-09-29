import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

const Contact = () => {
    return (
        <div className="w-full h-screen bg-[#0a192f]" name="contact">
            <div className="max-w-[800px] mx-auto h-full w-full flex flex-col justify-center px-20  p-4 ">
                <h1 className="pb-5 text-[#982d4f] font-bold text-4xl sm:7xl">Contact</h1>
                <h1 className="pb-10 text-gray-300 font-bold">
                    You can fill the form or you can contact me on my email: petarginic@gmail.com
                </h1>
                <form
                    method="POST"
                    action="https://getform.io/f/5f874d72-79b5-4db1-ab52-b723485dac84"
                    className="flex flex-col justify-center "
                >
                    <input
                        type="text"
                        className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-300 p-2 text-sm font-bold"
                        placeholder="Your name"
                        name="name"
                    />
                    <input
                        type="email"
                        className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-300 p-2 text-sm font-bold"
                        placeholder="Your email"
                        name="email"
                    />
                    <textarea
                        type="text"
                        rows="4"
                        class="block p-2 w-full  text-gray-900 font-bold bg-gray-50 rounded-lg border border-gray-300 text-sm"
                        placeholder="Your message..."
                        name="text"
                    ></textarea>

                    <div className="flex flex-col justify-center">
                        <button className="mt-6 flex justify-center items-center w-[100px] rounded-lg  text-white font-bold py-3 px-3  bg-[#982d4f]  hover:scale-110 duration-500">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
