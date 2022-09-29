import React from 'react'
import image from './../assets/image.jpg'

const About = () => {
    return (
        <div name="about" className="w-full min-h-screen h-fit bg-[#0a192f]">
            <div className="flex flex-col items-center">
                <h1 className="text-[#982d4f] font-bold text-center text-2xl md:text-4xl mt-10">
                    I am Petar, the developer of this website!
                </h1>
            </div>

            <div className="flex flex-col items-center">
                <h1 className="text-gray-300 border-b-4 border-b-[#982d4f] font-bold text-2xl md:text-4xl mt-20 ">
                    About me
                </h1>
            </div>

            <div className="max-w-[1000px] mx-auto h-full w-full flex flex-col justify-center px-20">
                <div className="max-w-[1000px] mx-auto mt-10">
                    <div class="grid md:grid-cols-3 gap-6 justify-items-center items-center">
                        <div class="col-span-2">
                            <p className="text-gray-400 font-bold ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, maiores nostrum? Ab,
                                totam? Iste aspernatur adipisci accusantium atque tempore provident veniam unde sunt
                                consequatur ratione obcaecati, ut, soluta at et. Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Impedit officiis unde provident autem ipsam illum quae maxime iste
                                odit nobis ex veritatis quia soluta, doloremque, earum, laborum atque odio dolor. Lorem,
                                ipsum dolor sit amet consectetur
                            </p>
                        </div>
                        <div class="...">
                            <img
                                src={image}
                                alt="image"
                                className="w-[200px] h-[250px] hidden md:flex object-top rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-gray-300 border-b-4 text-center border-b-[#982d4f] font-bold text-[20px] md:text-4xl  mt-20 ">
                        Education and Work experiance
                    </h1>
                </div>

                <div className="max-w-[1000px] mx-auto mt-10">
                    <div class="flex justify-center items-center">
                        <p className="text-gray-400 font-bold ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, maiores nostrum? Ab,
                            totam? Iste aspernatur adipisci accusantium atque tempore provident veniam unde sunt
                            consequatur ratione obcaecati, ut, soluta at et. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Impedit officiis unde provident autem ipsam illum quae maxime iste odit
                            nobis ex veritatis quia soluta, doloremque, earum, laborum atque odio dolor. Lorem, ipsum
                            dolor sit amet consectetur
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
