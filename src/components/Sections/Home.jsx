import React from 'react';
import styled, { keyframes } from 'styled-components';
import { background, head_color, title_color } from '../../style-source/color';
import { Section } from './index';
import PortraitHome from '../../img/home1.png'
import NameTitle from './subcomponents/NameTitle';
const Columns = styled.div`
    width:50%;
    height:100%;
    display:flex;
    align-items: center;
    flex-direction: column;
`

// const Title = styled.h1`
//     font-family:'Roboto';
//     font-weight: 900;
//     font-size: 80px;
    
//     color:${title_color};
//     width:50%;
//     margin:0;
//     margin-right:1rem;
// `
const Slide = keyframes`
    from{
        transform: translateX(-100%);

    }
    to{
        transform: translateX(0%);

    }
`
const Box = styled.span`
    width:20%;
    height:3%;
    background-color: ${head_color};
    margin-right:32.5%;
    margin-top:3%;
    transform: translateX(-100%);
    animation: ${Slide} .5s forwards ease-out;
`

const PicPortrait = styled.div`
    background-image: url(${PortraitHome});
    background-position: center;
    background-repeat:no-repeat;
    width:100%;
    height:100%;
    background-size:cover;
    box-shadow: 25px 25px 50px 0 ${background} inset, -25px -25px 50px 0 ${background} inset;
    transition: opacity .15s;
`

const Home = (props) =>{
    const {scrollLoc} = props
    return(
        <Section id="Home">
            <Columns style={{justifyContent:"center"}}>
                <NameTitle style={{marginRight: "5%"}} font={'Roboto'} color={title_color}>TEOFILO GARCIA</NameTitle>
                <Box />
            </Columns>
            <Columns style={{justifyContent:"center"}}>
                <PicPortrait style={{opacity: scrollLoc === 1? "1":"0"}}/>
            </Columns>
        </Section>
    )
}
export default Home;