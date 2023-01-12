import React from 'react';
import { Box, Fade, Modal } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import { alignModalStyle } from '../constant/CssClasses';

const ModalLayout = ({ children, show, setShow }) => {
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={show}
            onClose={setShow}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 200,
            }}
        >
            <Fade in={show}>
                <Box sx={alignModalStyle}>
                    {children}
                </Box>
            </Fade>
        </Modal>
    );
}

export default ModalLayout;
