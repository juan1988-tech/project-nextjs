import React from 'react';
import Link from 'next/link';

const Navbar = () =>{
  return(
      <menu>
        <Link href="/" prefetch={ false }><a>Home</a></Link>
        <Link href="/about">About</Link>
      </menu>
  )
}

export default Navbar;