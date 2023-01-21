import { Box } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react'
import Product from './product';
import { IProductListProps } from './product.type'

const ProductList: FC<PropsWithChildren<IProductListProps>> = (props) => {
    const { products } = props;
    return (
        <>
            {products?.map((product) => (
                <Product key={product._id} {...product} />
            )
            )}
        </>

    )
}

export default ProductList