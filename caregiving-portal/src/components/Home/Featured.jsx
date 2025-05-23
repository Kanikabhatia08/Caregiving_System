import React from 'react'
import Img1 from "../../images/doc1.jpeg"
import Img2 from "../../images/doc2.jpeg"
import Img3 from "../../images/doc3.jpeg"
import Img4 from "../../images/doc4.jpeg"
import Img5 from "../../images/doc5.jpeg"
import Img6 from "../../images/doc6.jpeg"
import clock from "../../images/Clock.png"
import hat from "../../images/Hat.png"

function Featured({featured}) {

  const img =[Img1, Img2, Img3, Img4, Img5, Img6]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 ">
        {featured.map((card,index)=>(
          <div key={card.id} className="flex flex-col group border-2 border-lightgray 2xl:my-4 rounded-2xl 2xl:rounded-3xl 
          hover:shadow-xl transform transition duration-200 ease-in-out hover:-translate-y-3 hover:h3-text-orange">
            <div>
              <img src={img[index]} alt='featured' className=" w-full rounded-t-2xl"/>
            </div>

            <div className="xl:max-w-[90%] 2xl:max-w-[80%] mt-3 pl-2 2xl:m-3">
                <p className="text-gray">by <span className="text-black">{card.sub}</span></p>
                <h3 className="text-xl font-semibold py-2 group-hover:text-orange">{card.title}</h3>
                <div className="flex flex-col 2xl:flex-row lg:gap-3 2xl:gap-2 py-2">
                    <p className="flex gap-2"><img src={hat} alt='hat' className="sm:h-4 lg:h-[20px] mt-1"/>{card.duration}yrs Experience </p>
                    <p className="flex gap-2"><img src={clock} alt='clock' className="sm:h-5 lg:h-[18px] mt-1"/>{card.students} Patients </p>
                </div>
            </div>

            <div>
                <hr className='w-[90%] mx-auto border-1 border-gray'/>
                <div className="flex justify-between max-w-[90%] m-3">
                    <p className="text-lg text-green-600">{card.cost} per hour</p>
                    
                </div>
            </div>

          </div>
        ))}            
    </div>
  )
}

export default Featured