import React, { FC, PropsWithChildren, useEffect } from 'react'
import { IProduct, IProductsProps } from './product.type';
import { useGetProductsQuery } from 'state/api';
import { Box, useMediaQuery } from '@mui/material';
import Header from 'components/header';
import Product from './product';
import ProductList from './productList';

const Products: FC<PropsWithChildren<IProductsProps>> = (props) => {
  const { data = [], isLoading } = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  useEffect(() => {
    console.log(data);
  }, [data])
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle='See your list of products'></Header>
      {data || !isLoading ? (
        <Box mt="20px" display="grid" gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between" rowGap="20px" columnGap="1.3%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }
          }}>
          <ProductList products={data} />
        </Box>
      ) : <>Loading....</>}
    </Box>
  )
}

export default Products