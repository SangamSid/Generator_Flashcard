import React from 'react'
import {AiFillFileImage} from "react-icons/ai"
import {Field,ErrorMessage} from "formik"
import TextError from "./TextError"

const CreateGroup = ({values,setFieldValue}) => {
  return (
    <div className='bg-white shadow-md md:p-10 p-5 rounded-md sm:p-5 w-[calc(100vw-100px)] mx-auto m-5 flex flex-col gap-5'>
      
      <div className='flex flex-wrap'>

        <div className='flex flex-col flex-wrap w-80 gap-3 mr-5'>
    <label htmlFor='createGroup'> Create Group</label>
    <Field 
    id="createGroup"
    type="text"
    placeholder="enter group name"
    name="groups.group"
    setFieldValue
    className="border-2 border-solid p-3"
    />
<ErrorMessage component={TextError} name="groups.group"/>

        </div>

<div className='flex flex-col flex-wrap w-50 gap-3 mr-5 mt-9'>
    <label htmlFor='groupFile' className='border-2 border-solid p-3 flex gap-3'>
        <AiFillFileImage className="text-xl"/>
        <span>{values.groups.profile?"Change Image":"Upload Image"}</span>
    </label>
    <input
    id="groupFile"
    type="file"
    hidden
    accept='image/*'
    placeholder='enter group image'
    name="groups.profile"
    onChange={(e)=>{
        const file=e.target.files[0];
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>{
            setFieldValue("groups.profile",reader.result)
        }
    }}
    className='border-2 border-solid p-3'
      
    />
</div>
<div className='flex flex-wrap w-20 gap-5'>

{
    values.groups.profile? (
        <img src={values.groups.profile} alt="groupimage" loading="lazy"/>
    ):null
}
</div>
      </div>

<div>
    <label htmlFor='groupDesc'>Group Description</label>
    <Field
    as="textarea"
    name="groups.groupDesc"
    id="groupDesc"
    cols="" row="5"
    className='w-[calc(100vw-200px)] border-2 border-solid mt-3 p-4'></Field>
    <ErrorMessage component={TextError} name="groups.groupDesc"/>

</div>
    </div>
  )
}

export default CreateGroup
