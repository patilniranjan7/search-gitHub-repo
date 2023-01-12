import { Avatar, Grid, Link } from '@mui/material'
import React from 'react'

export default function GitCard({ gitdata }) {
    return (
        <>
            <div className='w-[80%] sm:flex py-12 m-auto'>
                <Avatar alt="" src={gitdata?.owner?.avatar_url} sx={{ width: 56, height: 56 }} />
                <Grid item xs={12} className='text-truncate overflow-hidden p-1'>
                    <Link href={gitdata?.clone_url} underline='none' color="primary">
                        <div className=' show-text-1-line'> {gitdata?.full_name}</div>
                    </Link>
                    <div className=' show-text-1-line text-slate-600' title={gitdata?.description}> {gitdata?.description}</div>


                </Grid>
            </div>
            <span className='absolute top-4 right-4 text-blue-300'>{gitdata?.stargazers_count} &#9733;</span>
            <span className='absolute bottom-4 right-4 text-slate-600'>{gitdata?.language}</span>
        </>
    )
}
