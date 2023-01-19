import React, { FC, PropsWithChildren } from 'react'
import { IProductProps } from './product.type'
import { Box, } from '@mui/material'
const Product:FC<PropsWithChildren<IProductProps>> = (props) => {
  return (
    <div>product</div>
  )
}

export default Product