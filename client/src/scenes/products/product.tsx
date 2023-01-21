import React, { FC, PropsWithChildren, useState } from 'react'
import { IProductProps } from './product.type'
import { Box, Button, Card, CardActions, CardContent, Collapse, Rating, Typography, useTheme, } from '@mui/material'

const Product: FC<PropsWithChildren<IProductProps>> = (props) => {


  const { _id, name, category, price, rating, description, supply, stat } = props;
  const theme: any = useTheme();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleSeeMoreClick = (e: React.MouseEvent<HTMLElement>): void => {
    setIsExpanded(!isExpanded);
  }

  return (
    <Card
      sx={{
        backgroundImage: "none", backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem"
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color={theme.palette.secondary[700]} gutterBottom>
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          ${Number(price).toFixed(2)}
        </Typography>
        <Rating value={rating} readOnly />
        <Typography variant="body2">
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={handleSeeMoreClick} variant="contained">See More</Button>
      </CardActions>

      <Collapse in={isExpanded} timeout="auto" sx={{ color: theme.palette.neutral[300] }}>
        <CardContent>
          <Typography>id:{_id}</Typography>
          <Typography>Supply left:{supply}</Typography>
          <Typography>Yearly Sales This Year:{stat.yearlySalesTotal}</Typography>
          <Typography> Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits}</Typography>
        </CardContent>

      </Collapse>

    </Card>
  )
}

export default Product