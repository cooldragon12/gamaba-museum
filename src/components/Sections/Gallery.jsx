import React from 'react';
import styled from 'styled-components';
import { darkgreen, grey, head_color, title_color } from '../../style-source/color';
import { Section } from './index';
import Gallery1 from '../../img/gallery1.jfif';
import Gallery2 from '../../img/gallery2.jpg';
import Gallery3 from '../../img/gallery3.jpg';
import G1 from '../../img/gallery1-removebg-preview.png'
import Gallery4 from '../../img/gallery4.jpg'
const CardCont = styled.div`
    width:20%;
    height:60%;
    border-radius:4px;
    margin:1%;
    position:relative;
    transition:height .2s,width .2s;
    &:hover, .open{
        width:25%;
        height:65%;
    }
`

const Row = styled.div`
    width:100%;
    height:50%;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:${props => props.alignitems}; 
    transition:right .5s ease-out, left .5s ease-out, position .2s
`

const ImgCont = styled.div`
    background-image: url(${props => props.Image});
    background-position:center;
    background-size:cover;
    background-repeat: no-repeat;
    width:100%;
    height:100%;
    border-radius:4px;
    transition: opacity .2s;
    
`;
const ImgHover = styled.div`
background-image: url(${props => props.Image});
    background-position:top;
    background-size:contain;
    background-repeat: no-repeat;
    width:100%;
    height:100%;
    opacity:0;
    position:absolute;
    
    transition: width .2s ease-in, opacity .25s ease-out;
    z-index:2;
    &:hover {
        width:150%;
        height:125%;
        opacity:1;
    }
  
`

const VidPlay = styled.iframe`
position:relative; width:100%; height:100%;
z-index:1;
`
const Gallery = ({scrollLoc})=>{
  
    return(
        <Section id="Gallery" style={{flexDirection:"column"}}>
            <Row alignitems="flex-end" style={{right:scrollLoc === 3 ?"0%":"100%", position:scrollLoc === 3 ? "relative":"absolute"}}>
                <CardCont ><ImgHover className="imgHover" Image={G1}/><ImgCont className="iactive" Image={Gallery1}/></CardCont>
                <CardCont style={{backgroundColor:head_color}}>
                    
                    <VidPlay src="https://www.youtube.com/embed/bC7maD_80SE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                </CardCont>
                <CardCont><ImgHover className="imgHover" Image={Gallery2}/><ImgCont className="iactive" Image={Gallery2}/></CardCont>
                <CardCont style={{backgroundColor:title_color}}>
                    
                    
                    <VidPlay  src="https://www.youtube.com/embed/7sTVBWoRuAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                
                </CardCont>
            </Row>
            <Row alignitems="flex-start" style={{left:scrollLoc === 3 ?"0%":"100%", position:scrollLoc === 3 ? "relative":"absolute"}}>
                <CardCont style={{backgroundColor:grey}}>
                    

                    <VidPlay  src="https://www.youtube.com/embed/9wrcF5CjjRo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                </CardCont>
                <CardCont ><ImgHover className="imgHover" Image={Gallery3}/><ImgCont className="iactive" Image={Gallery3}/></CardCont>
                <CardCont style={{backgroundColor:darkgreen}}>
                    

                    <VidPlay  src="https://www.youtube.com/embed/e4fZsl13YPk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>

                </CardCont>
                <CardCont ><ImgHover className="imgHover" Image={Gallery4}/><ImgCont className="iactive" Image={Gallery4}/></CardCont>
            </Row>

        </Section>
    )
}
export default Gallery;