import React from 'react'
import Link from 'next/link'

export default function Index() {
  return (<>
    <h2>Api</h2>
    <Link className='anchor' href='/api/productsdb'>products</Link>
  </>
  )
}
