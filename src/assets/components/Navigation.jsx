import React from 'react'
import { Link } from 'react-router';
import logo from '../../../public/images/logo.png';
export const Navigation = () => {
  return (
    <>
    <div className='w-full navbar bg-white text-black border-b justify-center'>
       
            <Link to="/">
              <img src={logo} className='w-35' alt="Logo" />
            </Link>
        </div>
      <div className="navbar shadow-sm bg-white text-black  ">
        
        <div className="navbar-center flex w-full justify-center">
          <ul className="menu menu-horizontal px-4">
            <li><Link to="/" className='px-5 text-[20px] '>Our Firm</Link></li>
            <li><Link to="/" className='px-5 text-[20px]'>Our Team</Link></li>
            <li><Link to="/" className='px-5 text-[20px]'>Insight</Link ></li>
            <li><Link to="/" className='px-5 text-[20px]'>Contact</Link ></li>
            <li><Link to="/" className='px-5 text-[20px]'>Join Us</Link ></li>
          </ul>
        </div>
      </div>
    </>
  )
}
