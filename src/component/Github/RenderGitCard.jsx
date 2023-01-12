import { Grid } from '@mui/material'
import React from 'react'
import CardLayout from '../../layout/CardLayout'
import CardUI from '../UI/CardUI'
import GitCard from './GitCard'

export default function RenderGitCard({ data, ...props }) {
    return (
        <Grid container>
            {
                (data || []).map((gitdata) =>
                    <CardUI key={gitdata?.clone_url}>
                        <GitCard gitdata={gitdata} />
                    </CardUI>
                )
            }
        </Grid>
    )
}
