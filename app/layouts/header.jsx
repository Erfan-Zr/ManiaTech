import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.png'
import { Searchbar, ShoppingCart } from '../components'

const Header = () => {
  return (
    <div className='grid grid-cols-4 items-center px-20 py-2'>
      <Image src={logo} alt="ManiaTech" width={100} height={50} />
      <Searchbar />
      <p>Customer Support</p>
      <ShoppingCart/>
    </div>
  )
}

export default Header