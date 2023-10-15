import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='mt-64 mb-20'>
            <h6 className='text-sm'>Developed by <Link href='https://github.com/kingdeorayom' target='_blank' className='text-blue-800'>Serking</Link>.</h6>
        </footer>
    )
}

export default Footer