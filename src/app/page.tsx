import Link from 'next/link'
import React from 'react'

const Home = () => {
 return (
  <div>
   <p>
    Click<Link href='/documents/123'>&nbsp;here&nbsp;</Link> to go to document
    id
   </p>
  </div>
 )
}

export default Home
