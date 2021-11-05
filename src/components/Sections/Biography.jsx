import React from 'react';
import styled from 'styled-components';
import { Section } from '.';
import { background, main_content } from '../../style-source/color';
import PortraitBio from '../../img/biography1.png'

const ColumnsB = styled.div`
    width:50%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content:center;

  
`
const ColumnsA = styled.div`
    width:50%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction: column;
`
const ContentTitle = styled.h2`
    font-family: 'Open Sans';
    font-size:40px;
    font-weight:bold;
    color:${main_content};
    margin:5% 0%;

`
const ContentParagraph = styled.p`
    color:${main_content};
    font-family:'Open Sans';
    font-size:14px;
    margin:0;
`
const PicPortrait = styled.div`
    background-image: url(${PortraitBio});
    background-position: center;
    background-repeat:no-repeat;
    width:100%;
    height:100%;
    background-size:contain;
    box-shadow: 25px 25px 50px 0 ${background} inset, -25px -25px 50px 0 ${background} inset; 
    transition: opacity .3s ease-in;
    `
const Biography = ({scrollLoc})=>{
    return(
        <Section id="Biography">
            <ColumnsA>
                <PicPortrait style={{opacity:scrollLoc === 2?"1":"0" }}/>
            </ColumnsA>
            <ColumnsB>
                <Section style={{flexDirection:"column", width:"80%",justifyContent:"center"}}>
                    <ContentTitle>Biography</ContentTitle>
                    <ContentParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum eros sit amet diam cursus, eu ultricies metus feugiat. Cras lacinia odio nec magna auctor, nec egestas tellus fringilla. Pellentesque cursus velit dolor, sed fermentum nisl volutpat et. Fusce faucibus elit imperdiet justo fringilla varius. Aenean feugiat justo quis risus posuere venenatis. Donec facilisis mollis turpis, vel condimentum augue pulvinar vel. Donec ullamcorper metus eu porttitor porta.
                    <br/>
                    <br/>

                    Morbi quam nulla, efficitur ut nisi laoreet, bibendum ornare nisl. Donec porta sodales felis ut aliquet. Vivamus malesuada hendrerit eros, et hendrerit magna aliquet at. Vivamus id iaculis neque. Cras tempus vulputate tellus at rhoncus. Donec arcu tortor, sagittis nec sagittis et, dignissim id arcu. Ut placerat vulputate ipsum nec ornare. Quisque at orci pulvinar, posuere justo sit amet, porttitor urna. In tristique sit amet elit eu tincidunt.


                    </ContentParagraph>
                </Section>
            </ColumnsB>
        </Section>
    )
}
export default Biography;