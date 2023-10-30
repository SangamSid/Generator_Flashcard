import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link,NavLink } from 'react-router-dom'
import {AiFillDelete} from "react-icons/ai"
import { deleteFlashCard } from '../redux/action'

const MyFlashCard = () => {

const {flashcards}=useSelector((state)=>state.flashCardData);
const dispatch=useDispatch();
const handleDeleteCard=(id)=>{
    dispatch(deleteFlashCard(id))
}

  return (
    <div className='px-3 mx-auto mt-10 xl:px-20 lg:px-14 md:px-10 border-solid p-3 flex flex-wrap gap-14 items-center justify-center'>
      {

        flashcards.length===0?
        (
            <div className='text-center text-2xl'>
                <p> You don't have any Flash Card</p>
                <div className='text-center m-5'>
                    <Link to="/">
                        <button className='bg-red-500 text-white p-4 m-6'>Create Flashcard</button>
                    </Link>
                </div>

            </div>

        ):(

            flashcards.map((flashcard,index)=>{
                return (
                    <div className='w-1/5 h-1/3 border-solid border-2 flex flex-col justify-center items-center shadow-md bg-white rounder-md flex-wrap'>
                        <img src={flashcard.groups.profile} alt="img" className='w-20 h-20 border-solid border-2 rounded-full mt-[-40px]'/>

                        <p className='mt-2 font-bold '> {flashcard.groups.group}</p>
                        <p className='text-gray-400 p-3'>{flashcard.groups.groupDesc}</p>

                       <p className='m-2'><span className='text-xl'>{flashcard.terms.length}</span>Cards</p> 
                       <div className='w-30 m-4 flex cursor-pointer justify-between item-center'>
                    <NavLink className="flex border-2 border-solid border-red-600 rounded-md p-2"
                    to={`/flashcard/${flashcard.id}`}>
                        <button className='text-red-600'> View Card</button>
                    </NavLink>
                    <AiFillDelete className='text-4xl ml-2'onClick={()=>handleDeleteCard(flashcard.id)}/>
                       </div>

                    </div>
                )
            })



        )



      }
    </div>
  )
}

export default MyFlashCard
