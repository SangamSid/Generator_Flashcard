import React from 'react'
import CreateGroup from "../CreateGroup"
import {Formik,Form} from "formik"
import CreateTerm from "../CreateTerm"
import {flashcardSchema} from "../Validation"
import {useDispatch,useSelector } from "react-redux"
import {createFlashcard} from "../redux/action"
import { useState } from 'react'
import Toast from "./../Toast"


const CreateFlashCard = () => {

const dispatch=useDispatch();
const [toast,setToast]=useState(false);
const {flashcards}=useSelector((state)=>state.flashCardData)
console.log(flashcards);

if(flashcards.length>0)
localStorage.setItem("flashcards",JSON.stringify(flashcards));



  return (
    <Formik
    
    let initialValues={{
        id:"",
        groups:{
            group:"",
            groupDesc:"",
            profile:null
        },
        terms:[
            {
                term:"",
                defination:"",
                image:null
            }
        ]
    }}
    validationSchema={flashcardSchema}
    onSubmit={(values,action)=>{
        values.id=Date.now();
        dispatch(createFlashcard(values));
        action.resetForm();
        setToast(true);

        setTimeout(()=>{
            setToast(false)
        },2000)
    }}
    >
        {({values,setFieldValue})=>(
            <Form>
                {toast && (
                    <Toast
                    fn={()=>setToast(false)}
                    toastClass={!toast ? "-translate-y-96": "translate-y-0"}
                    />
                )}
                <CreateGroup values={values} setFieldValue={setFieldValue}/>
                <CreateTerm values={values} setFieldValue={setFieldValue}/>

                <div className='flex justify-center w-full'>
                    <button className='py-2 px-10 bg-red-500 text-white rounded-md mb-3' type='submit'>Create</button>
                </div>
            </Form>
        )}
      
    </Formik>
  )
}

export default CreateFlashCard
