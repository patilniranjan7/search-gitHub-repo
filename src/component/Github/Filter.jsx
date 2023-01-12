import { Button, Checkbox, FormControlLabel, Popover } from '@mui/material';
import React, { useState } from 'react'
import { filterItems } from '../../constant/Filter';


export default function Filter({ checkBoxValue, setCheckBoxValue }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'filter-popover' : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const updateCheckBoxValue = (param) => {
        const array = [];
        let flag = true;
        for (let i of checkBoxValue) {
            if (i.name !== param.name) {
                array.push(i)
            } else {
                flag = false;
            }
        }
        if (flag) {
            array.push(param)
        }
        setCheckBoxValue(array);
    }

    return (
        <>
            <Button aria-describedby={id} variant="outlined" onClick={handleClick}>
                Filters
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <div className='m-4 flex flex-col'>
                    {
                        (filterItems || []).map((item) => {
                            let isChecked = false;
                            for (let i of checkBoxValue) {
                                if (item.name === i.name) {
                                    isChecked = true;
                                    break;
                                }
                            }
                            return (<FormControlLabel
                                key={item.name}
                                control={<Checkbox onChange={() => { updateCheckBoxValue(item) }} defaultChecked={isChecked} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />}
                                label={item.name}
                            />)
                        }
                        )
                    }
                </div>
            </Popover>
        </>
    )
}
