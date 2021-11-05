import React from 'react';
import styled from 'styled-components';
import { contrast } from '../style-source/color';
const FooterCont = styled.div`
    background-color:${contrast};
    width:100%;
    height:85vh;
`
const Columns = styled.div`
    width:50%;
    height:100%;
    display:flex;
    align-items: center;
    flex-direction: column;
`
const Row = styled.div`
width:100%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:${props => props.alignitems}; 
    transition:right .5s ease-out, left .5s ease-out, position .2s
`
const Subtitle = styled.span`
    font-family:'Open Sans';
    font-weight:${props => props.fw};
    font-size:12px;
`
const Footer = ()=>{
    return(
        <FooterCont id="Reference">
            <Row alignitems="center" style={{height:"80%"}}>
                <Columns></Columns>
                <Columns></Columns>
                <Columns></Columns>
                <Columns></Columns>

            </Row>
            <Row  alignitems="center" style={{height:"20%"}}>
                <Subtitle fw="bold">all copyrights reserved - name name name bcs23</Subtitle>
            </Row>
        </FooterCont>
    )
}
export default Footer