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
import Transactions from 'scenes/transactions';
import Geography from 'scenes/geography';
import OverView from 'scenes/overview';
import Daily from 'scenes/daily';
import Admin from 'scenes/admin';
import { BreakDown, Performance } from 'scenes';




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
              <Route path="/products" element={<Products />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<OverView />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/breakdown" element={<BreakDown />} />
              <Route path ="/performance" element={<Performance/>}/>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
