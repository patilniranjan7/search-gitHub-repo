import { Card, CardContent } from '@mui/material';
import React from 'react';
import CardLayout from '../../layout/CardLayout';

const CardUI = ({ children }) => {
    return (
        <CardLayout>
            <Card>
                <CardContent>
                    {children}
                </CardContent>
            </Card>
        </CardLayout>
    );
}

export default CardUI;
