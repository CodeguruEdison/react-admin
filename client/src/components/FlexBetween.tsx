import { FC, PropsWithChildren } from "react";
import { IFlexBetweenProps } from "./flexBetween.type";
import { styled } from '@mui/system';
import { Box } from "@mui/material";



const FlexBetween = styled(Box)((props: IFlexBetweenProps) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: props.backgroundColor
}));


export default FlexBetween;
