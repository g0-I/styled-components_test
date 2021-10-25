import React from "react";
import styled, {css} from "styled-components";

export const Link = ({to,children,fontColor,isBluePattern}) => {
    return <StyledLink href={to} fontColor={fontColor} isBluePattern={isBluePattern}>{children}</StyledLink>
};

const StyledLink =styled.a`
    outline: none;
    text-decoration: none;
    display: inline-block;
    width: 19.5%;
    margin-right: 0.625%;
    text-align: center;
    line-height: 3;
    color:${(props) => props.fontColor};
    ${(props) => props.isBluePattern ? 
    (css`
        background: aquamarine;
    &:hover{
        background: aqua;    
    }
    &:active {
        background: blue;
        color: white;
    }`):
    (css`
        background: yellow;
    &:hover{
        background: orange;    
    }
    &:active {
        background: red;
        color: white;
    }`)
}`
