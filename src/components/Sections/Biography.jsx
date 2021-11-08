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
                    <ContentParagraph s>
                	Known to be the last of the Tabungaw hat makers, a traditional headgear made of tabungaw or gourd.
                    <br/>
                    <br/>

                    Born on March 27, 1941, Teofilo, an Abra local started the art of Kattukong or Tabungaw hat making from his grandfather Hipolito at the age of 15.
                    <br/>
                    <br/>
                    
                    In order to send his five children to school, he spent most of his life working as a farmer. Besides planting upo, he also used the material to make traditional tabungaw. Tabungaw hats are said to take at least seven days to make since he uses only hand tools that he designs himself.
                    <br/>
                    <br/>

                    Teofilo Garcia, 74, has learned making the tabungaw from his grandfather when he was still 15 years old. Whenever he goes out, he often wears his tabungaw to the curiosity of other people who often ask then order from him. Over the years, he has mastered and innovated his craft to the point of being recognized nationally.
                    <br/>
                    <br/>

                    He mentioned that before, tabungaw makers were also present in several towns in the Ilocos, both Norte and Sur, but like most traditions, and the advent of cheaper, mass-produced products, the craft of the tabungaw has silently waned until, possibly, Mr. Garcia is the last one.

                    </ContentParagraph>
                </Section>
            </ColumnsB>
        </Section>
    )
}
export default Biography;