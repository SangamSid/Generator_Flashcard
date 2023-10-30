import React from 'react'

const PrintPage = ({singleData,currentIndex}) => {
  return (
    <div className='hidden'>
      {
        singleData.map((grpCard)=>{
            return (
                <>
                    <div className='space-y-10'>
                        <div className='flex items-center flex-col md:flex-row gap-5 sm:flex-row '>
                            <div>
                                <img
                                src={grpCard.groups.profile}
                                alt="Group_image"
                                className='w-20 h-10 aspect-square rounded-md object-cover'
                                />
                            </div>
                            <div>
                                <h2 className='font-semibold text-xl text-center sm:text-left'>
                                    {grpCard.groups.group}
                                </h2>
                                <p className='text-gray-600'>{grpCard.groups.groupDesc}</p>
                            </div>
                        </div>
                   
                        <div>
                            <ul className='space-y-6 flex flex-col'>

                            <li>
                                <div className='flex gap-3 mb-4'>
                                    <h3 className='font-semibold'>{grpCard.terms[currentIndex].term}</h3>
                                </div>
                                <div className='text-center'>
                                    <div>
                                        <img
                                        src={grpCard.terms[currentIndex].image}
                                        alt="Group_image"
                                        className='w-20 aspect-square object-cover rounded-md float-left mr-2 mb-2 mt-2'
                                        />
                                    </div>
                                    <div>
                                        <p className='text-gray-600 text-justify'>
                                            {grpCard.terms[currentIndex].defination}
                                        </p>
                                    </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </div>

                </>
            )
        })
      }
    </div>
  )
}

export default PrintPage
