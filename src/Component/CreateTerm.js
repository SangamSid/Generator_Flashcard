import React from 'react'
import {FieldArray,Field,ErrorMessage} from "formik"
import {AiFillFileImage} from "react-icons/ai"
import {TbTrashX} from "react-icons/tb"
import {BiEdit} from "react-icons/bi"
import TextError from "./TextError"

const CreateTerm = ({values,setFieldValue}) => {
  return (
    <div>
      <FieldArray
      name="terms"
      validateOnChange={false}
      render={(arrayHelpers)=>(

        <ul className='bg-white shadow-md md:p-10 p-5 rounded-md sm:p-5 w-[calc(100vw-100px)] mx-auto m-5 flex flex-col gap-5'>

        {
            values.terms.map((item,index)=>(
                <li key={index} className='flex flex-wrap'>
                    <span className='px-4 py-2 rounded-full bg-red-500 text-xl h-10'>{index+1}</span>

                    <div className='flex flex-col flex-wrap w-80 gap-3 mx-4 mt-4 '>
                        <label htmlFor='enterTerm' className=''>Enter Term </label>
                        <Field 
                        id="enterTerm"
                        type="text"
                        placeholder="enter card name"
                        name={`terms.${index}.term`}
                        className="border-2 border-solid p-3 sm:mt-3"/>
                        <ErrorMessage component={TextError} name={`terms.${index}.term`}/>

                    </div>

                <div className='flex flex-col flex-wrap w-80 gap-3 mx-4 mt-4'>
                    <label htmlFor='enterDefination'> Enter Defination</label>
                    <Field
                    id="enterDefination"
                    type="text"
                    placeholder="enter card Description"
                    name={`terms.${index}.defination`}
                    className="border-2 border-solid p-3 "/>
                    <ErrorMessage component={TextError} name={`terms.${index}.defination`}/>
                </div>

{
    !item.image && 
    <div className='flex flex-col flex-wrap w-50 gap-3 mr-5 mt-16'>
        <label htmlFor='cardFile' className='border-2 border-solid p-3 flex gap-3'>

<AiFillFileImage className='text-xl'/>
<span>{values.terms.image?"Change Image":"Upload Image"}</span>
        </label>
        <input
        id="cardFile"
        type="file"
        hidden
        accept='image/*'
        name={`terms.${index}.image`}
        onChange={(e)=>{
            const file=e.target.files[0];
            const reader=new FileReader();
            reader.readAsDataURL(file)
            reader.onload=()=>{
                const image=reader.result
                setFieldValue(`terms.${index}.image`,reader.result)
            }
        }}
        className='border-2 border-solid p-3'/>
    </div>
}

{
    item.image && 
    <div className='flex flex-wrap w-50 gap-3 mx-4 m-4'>
        <div>
            <img src={item.image} alt="cardImage" loading='lazy' className='w-20 h-20'/>
        </div>
        <div className='flex flex-col ml-3'>
            <TbTrashX className='text-2xl mb-2' onClick={()=>setFieldValue(`terms.${index}.image`,"")}/>
            <label htmlFor='cardImage'>
        <BiEdit className='text-2xl'/>
        <input
        type='file'
        id="cardImage"
        hidden
        onChange={(e)=>{
            const file=e.target.files[0];
            const reader=new FileReader();
            reader.readAsDataURL(file);
            reader.onload=()=>{
                const imageUrl=reader.result;
                arrayHelpers.replace(index,{
                    ...item,image:imageUrl
                })
            }
        }}
/>            </label>

        </div>

    </div>
}

{
    !index==0 &&
    <div>
        <button onClick={()=>arrayHelpers.remove(index)} className='text-blue-500'> Remove</button>
    </div>
}
               </li>
            ))
        }

<li className='text-center md:text-left'>
    <div onClick={()=>arrayHelpers.push("")}
    className='text-red-500 cursor-pointer'>
        Add More
    </div>
</li>
        </ul> 

      )}>
      </FieldArray>
    </div>
  )
}

export default CreateTerm
