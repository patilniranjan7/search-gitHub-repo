import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Notifications from 'react-notify-toast';
import { TextField, Typography } from '@mui/material';
import Github from './page/Github/Github';

function App() {

  return (
    <>
      <Github />
      <Notifications />
    </>
  );
}

export default App;
