import React from 'react'
import { useState,useRef } from 'react'
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
import {useDispatch,useSelector} from "react-redux"
import { useParams,useNavigate } from 'react-router-dom'
import {BiShare, BiShareAlt, BiCopy,BiLeftArrowAlt} from "react-icons/bi"
import {
    AiOutlineDownload,
    AiFillPrinter,
    AiFillCloseCircle
} from "react-icons/ai"
import {renderToStaticMarkup,renderToString} from "react-dom/server"
import {
    FacebookShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    TwitterShareButton,
    EmailShareButton
} from "react-share"

import Facebook from "./../logo/facebook-icon.svg"
import Linkedin from "./../logo/linkedin-icon.svg"
import Mail from "./../logo/mail-icon.svg"
import Twitter from "./../logo/twitter-icon.svg"
import Whatsapp from "./../logo/whatsapp-icon.svg"
import PrintPage from './PrintPage'

import { saveAs } from 'file-saver';




const FlashCardDetails = () => {

const [currentIndex,setCurrentIndex]=useState(0);
const [active,setActive]=useState(0);
const navigate=useNavigate();
const params=useParams();
const mainId=params.id

const {flashcards}=useSelector((state)=>state.flashCardData);
let singleData=flashcards.filter((flashcard,index)=>flashcard.id==mainId)

const dispatch=useDispatch();
const [isCopied,setIsCopied]=useState(false);
const [url,setUrl]=useState();
const [share,setShare]=useState("none")

const shareHandlerOpen=()=>{
    setShare("flex")
    setUrl(`${document.location.href}`)
}
const shareHandlerClose=()=>{
    setShare("none")
}

const handleSideBar=(index)=>{
    setCurrentIndex(index);
    setActive(index)
}
const handleLeft=()=>{
    setCurrentIndex((prevIndex)=>prevIndex===0?0:prevIndex-1)
    setActive((prevIndex)=>prevIndex-1)
}

const handleDownload = () => {
  const { document } = window;
  const content=renderToString(<PrintPage singleData={singleData} currentIndex={currentIndex}/>)
  const blob = new Blob([content], { type: 'text/html' });
  saveAs(blob, 'page.html');
};

const handlePrint=()=>{
    const printWindow=window.open("","_blank");
    const contentToPrint=renderToStaticMarkup(<PrintPage singleData={singleData} currentIndex={currentIndex}/>)
    printWindow.document.open();
    printWindow.document.write('<html><head><title>Print Content</title></head><body>');
    printWindow.document.write(contentToPrint)
    printWindow.document.write('</body></html>')
    printWindow.document.close();

    printWindow.print();
    printWindow.close();
}


  return (
    <div className='p-8 '>
        {
            singleData.map((item,index)=>{
                return (
                    <>
                    <div className='flex'>
                        <button onClick={()=>navigate("/flashcard")}><BiLeftArrowAlt className='mr-4 text-3xl text-red-500 cursor-pointer'/> </button>
                    <div>
                        <p className='text-2xl'>{item.groups.group}</p>
                        <p className='text-gray-500'>{item.groups.groupDesc}</p>
                    
                    </div>
                    </div>
                    
                    <div className='gap-4 p-8 flex flex-wrap border-2'>

                        <div className='w-1/5 shadow-2xl rounded-lg bg-white '>
                            <p className='m-4 border-b-2 border-solid border-gray-500'> FlashCards</p>
                            <ul className='m-4'>
                                {
                                    item.terms.map((card,index)=>{
                                        return <li className='border-b-2'>
                                            <button className={active === index ? "my-1 text-blue-600":"my-1"}
                                            onClick={()=>handleSideBar(index)}
                                            >{card.term}</button>
                                        </li>
                                    })
                                }

                            </ul>
                        </div>

                        <div className='w-1/2 flex-col flex-wrap p-3 shadow-2xl rounded-lg bg-white '>
                            <div className='flex'>
                                <div className='flex-2 flex items-center justify-center'>
                                    <img src={item.terms[currentIndex].image} alt="cardImage" className='w-40 h-40 p-3'/>
                                </div>
                                <div className='flex-1 p-4'>
                                    <p>{item.terms[currentIndex].defination}</p>
                                </div>
                            </div>
        <div className='flex justify-center text-xl item-center'>
            <>
            <AiOutlineLeft className='mx-4 cursor-pointer' onClick={handleLeft}/>
            <p className='mx-4 text-xl'>{currentIndex+1}/{item.terms.length}</p>
            <AiOutlineRight className='mx-4 cursor-pointer'
            onClick={()=>[setCurrentIndex((prevIndex)=>item.terms.length-1===prevIndex ? prevIndex:prevIndex+1),setActive((prevIndex)=>prevIndex+1)]}/>
            </>
        </div>
                        </div>


                      <div className='w-1/5 text-center'>
                          <aside className='col-span-1 md:flex flex-col items-center space-y-5'>

                              <button 
                                      type='text'
                                      onClick={shareHandlerOpen}
                                      className='flex items-center py-3 px-4 xl:w-60 space-x-5 bg-white rounded-md shadow-lg active:scale-100 transition-all duration-100 hover:scale-105'
                              >
                                  <BiShare className='scale-x-[-1]'/>
                                  <span>Share</span>
                              </button>

                      <button className='flex items-center py-3 px-4 xl:w-60 space-x-5 bg-white rounded-md shadow-lg active:scale-100 transition-all duration-100 hover:scale-105'>
                      <AiOutlineDownload/>
                      <span onClick={handleDownload}>Download</span>
                      </button>

                      <button className='flex items-center py-3 px-4 xl:w-60 space-x-5 bg-white rounded-md shadow-lg active:scale-100 transition-all duration-100 hover:scale-105' onClick={handlePrint}>
                      <AiFillPrinter/>
                      <p >Print</p>
                      </button>
                          </aside>
                      </div>
                   
                   
                    </div> 
                    </>
                )
            })
        }
      
      <div className="popupBox" style={{ display: share }}>
        <div className="relative w-11/12 xl:w-2/5 sm:w-11/12 p-3 sm:p-8 bg-white rounded-lg inline-table">
          <h3 className="text-lg font-semibold mb-2 ">Share :</h3>
          <div className="flex sm:items-center flex-col sm:flex-row ">
            <span className="w-6/7 px-2 py-6 rounded-lg outline-dashed outline-1 outline-blue-200 inline-table">
              <span>Link :</span>&nbsp;&nbsp;
              <span className="inline-block">{url}</span>
              <h2 className="p-2 h-5 ml-3 text-sm text-red-500 font-semibold">
                {isCopied && "Link copied to clipboard"}
              </h2>
            </span>

            <span className="flex mt-3 sm:mt-0">
              <BiCopy
                className="text-2xl ml-4  mb-5 cursor-pointer"
                onClick={() => setIsCopied(true)}
              />
              <BiShareAlt className="text-2xl  ml-4  mb-6 cursor-pointer" />
              <AiFillCloseCircle
                className="closebtn "
                onClick={shareHandlerClose}
              />
            </span>
          </div>
          <div className="mt-6 flex items-center space-x-10 justify-center">
            <FacebookShareButton url="https://www.facebook.com/">
              <img
                src={Facebook}
                alt="Facebook"
                className="w-10 p-2 bg-amber-100 rounded-lg cursor-pointer"
              />
            </FacebookShareButton>
            <LinkedinShareButton url="https://www.linkedin.com/">
              <img
                src={Linkedin}
                alt="Linkedin"
                className="w-10 p-2 bg-amber-100 rounded-lg cursor-pointer"
              />
            </LinkedinShareButton>
            <WhatsappShareButton url="https://web.whatsapp.com/">
              <img
                src={Whatsapp}
                alt="Whatsapp"
                className="w-10 p-2 bg-amber-100 rounded-lg cursor-pointer"
              />
            </WhatsappShareButton>
            <TwitterShareButton url="https://twitter.com/">
              <img
                src={Twitter}
                alt="Twitter"
                className="w-10 p-2 bg-amber-100 rounded-lg cursor-pointer"
              />
            </TwitterShareButton>
            <EmailShareButton url="https://gmail.com/">
              <img
                src={Mail}
                alt="Mail"
                className="w-10 p-2 bg-amber-100 rounded-lg cursor-pointer"
              />
            </EmailShareButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlashCardDetails
