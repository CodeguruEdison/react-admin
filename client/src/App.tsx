import React, { useMemo } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { themeSettings } from 'theme';
import './App.css';
import { useSelector } from 'react-redux';
import { RootState } from 'state/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router';
import Dashboard from 'scenes/dashboard';
import Layout from 'scenes/layout';
import Customers from 'scenes/customers';
import Products from 'scenes/products';




const App = () => {
  const mode = useSelector((state: RootState) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path='/customers' element={<Customers />} />
              <Route path="/products" element={<Products/>}/>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
