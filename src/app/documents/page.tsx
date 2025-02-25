import Link from 'next/link'
import React from 'react'

const DocumentsPage = () => {
 return (
  <div className='flex min-h-screen items-center justify-center'>
   DocumentsPage
   <p>
    Click<Link href='/documents/123'>&nbsp;here&nbsp;</Link> to go to document
    id
   </p>
  </div>
 )
}

export default DocumentsPage
