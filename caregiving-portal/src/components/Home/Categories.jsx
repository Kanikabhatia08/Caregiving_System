import React from 'react'
import art from '../../images/cancer.webp'
import dev from '../../images/diabetes.jpeg'
import com from '../../images/cardio.png'
import vid from '../../images/neuro.jpeg'
import mar from '../../images/resp.png'
import pho from '../../images/ortho.jpeg'
import con from '../../images/derma.jpeg'
import fin from '../../images/gastro.png'
import sci from '../../images/pedia.png'
import psy from '../../images/psych.jpeg'



function Categories({ categories }) {
    const img =[art, dev, com, vid, mar, pho, con, fin, sci,psy];

    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-center gap-4 mt-4 text-center">
        {categories.map((category, index) => (
            
        <div key={category.id} className="flex flex-col text-center border-lightgray xl:py-16 xl:px-6 border-[2px] py-20 p-10 rounded-2xl 
            transform transition duration-200 ease-in-out hover:-translate-y-3 hover:text-orange hover:shadow-xl ">
                <img className="mx-auto py-2 w-20"  src={img[index]} alt="icon" />
                <h3 className="font-medium xl:text-lg">{category.title}</h3>
                <p className="font-light text-gray">{category.count} Doctors</p>
        
        </div>
        ))}
    </div>
    );
}

export default Categories