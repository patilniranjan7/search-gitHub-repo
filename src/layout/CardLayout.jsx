import { Card } from '@mui/material'
import React from 'react'

export default function CardLayout({ children }) {
    return (
        <div className='w-full md:w-1/2 xl:w-1/3 p-2 relative'>
            {children}
        </div>
    )
}
