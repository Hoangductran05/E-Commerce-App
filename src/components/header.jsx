/* eslint-disable no-unused-vars */
import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const header = () => {
  return (
    <>
    <header className='header-top-strip p-3'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <p>The trending</p>
          </div>
          <div className="col-6 d-flex justify-content-between">
           <div>
           <a href="tel:+123465789"> Call us +123465789</a>
           </div>
           <div>
            <Link><BiPhoneCall className='fs-3 mx-4'/></Link>
            <Link><AiOutlineMail className='fs-3 mx-4' /></Link>
           </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default header