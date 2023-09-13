/* eslint-disable no-unused-vars */
import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import logo from '../assets/img/Untitled-1.png'

const header = () => {
  return (
    <>
    <header className='header-top-strip p-1 shadow-sm'>
      <div className="container-xxl">
        <div className="row align-items-center">
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

    <header className='header-upper p-5'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-2">
            <Link to={'/'}><img src={logo} alt='logo' className='img-fluid logo' /></Link>
          </div>
          <div className="col-5 d-flex align-items-center justify-content-between">
            <Link to={'/'}>Home</Link>
            <Link to={'shop'}>Shop</Link>
          </div>
          <div className="col-5"></div>
        </div>
      </div>
    </header>
    </>
  )
}

export default header