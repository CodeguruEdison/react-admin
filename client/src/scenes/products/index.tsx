import React, { FC, PropsWithChildren } from 'react'
import { IProduct } from './product.type'

const Products:FC<PropsWithChildren<IProduct>> = (props) => {
  return (
    <div>Prpducts</div>
  )
}

export default Products