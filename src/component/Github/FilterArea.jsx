import { Grid, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Filter from './Filter';

let debounceTimer;

export default function FilterArea({ fetchData }) {
    const [inputText, setInputText] = useState('');
    const [checkBoxValue, setCheckBoxValue] = useState([]);

    const debounce = (callback) => {
        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }
        debounceTimer = setTimeout(callback, 400);
    }

    const handleChange = (event) => {
        setInputText(event.target.value);
        debounce(() => makeQueries())
    }

    const makeQueries = () => {
        let filterQuery = '';
        for (let i of checkBoxValue) {
            filterQuery += i.apiParams;
        }
        fetchData(`?q=${inputText || 'javaScript'}${filterQuery}`)
    }

    useEffect(() => {
        debounce(() => makeQueries())
    }, [checkBoxValue.length]);
    return (
        <Grid container className="p-4 bg-white">
            <img
                src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png"
                width={50}
                height={50}
                alt='GithubIcon'
            />
            <div className="mx-2">
                <TextField
                    id="outlined-basic"
                    label="Search"
                    variant="outlined"
                    value={inputText}
                    onChange={handleChange}
                />
            </div>

            <Filter setCheckBoxValue={setCheckBoxValue} checkBoxValue={checkBoxValue} />
        </Grid>
    )
}
