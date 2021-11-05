import React from 'react';
import styled from 'styled-components';
import { contrast, main_content } from '../style-source/color';
const FooterCont = styled.div`
    background-color:${contrast};
    width:100%;
    height:85vh;
`
const Columns = styled.div`
    width:50%;
    height:85%;
    display:flex;
    align-items: flex-start;
    justify-content:center;
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
const ContentTitle = styled.h2`
    font-family: 'Open Sans';
    font-size:35px;
    font-weight:bold;
    color:${main_content};
    margin:5% 0%;

`
const Footer = ()=>{
    const ref = [
    "https://outoftownblog.com/teofilo-garcia-a-national-living-treasure-awardee-from-abra/",
    "https://ncca.gov.ph/about-culture-and-arts/culture-profile/gamaba/national-living-treasures-teofilo-garcia/",
    "https://langyaw.com/2015/04/06/teofilo-garcia-national-living-treasure-from-abra/",
    "https://www.silverbackpacker.com/teofilo-garcia-tabungaw-hat-maker-san-quintin/"
    ]
    const ref2 =[
        "https://twitter.com/abragovph/status/1219894169285513216","https://ncca.gov.ph/about-culture-and-arts/culture-profile/gamaba/2012-teofilo-garcia/", "https://www.flickr.com/photos/govph/16200511869", "https://www.alamy.com/traditional-gourd-hats-locally-called-tabungaw-created-by-national-living-treasure-awardee-teofilo-garcia-image384163213.html"
    ]
    return(
        <FooterCont id="Reference">
            <Row alignitems="center" style={{height:"80%"}}>
                <Columns>
                    <ContentTitle style={{margin: "2% 20%"}}>Members</ContentTitle>
                    <Subtitle style={{margin: "2% 20%"}} fw="bold">
                        Aaliyah Liveta
                    </Subtitle>
                    <Subtitle style={{margin: "2% 20%"}} fw="bold">
                        Clark Muros
                    </Subtitle>
                    <Subtitle style={{margin: "2% 20%"}} fw="bold">
                        Ezra Sablan
                    </Subtitle>
                    <Subtitle style={{margin: "2% 20%"}} fw="bold">
                        Johndel Encabo
                    </Subtitle>
                    <Subtitle style={{margin: "2% 20%"}} fw="bold">
                        Karl Nikko Centeno
                    </Subtitle>
                </Columns>
                    
                <Columns style={{justifyContent:'left', }}>
                    <ContentTitle>REFERENCES</ContentTitle>
                        <ul>
                        {
                            ref.map((refs, index)=>{
                                return(
                                    <li style={{margin:"1% 0%"}}><Subtitle>{refs}</Subtitle></li>
                                )
                            })
                        }
                        </ul>
                </Columns>
                <Columns>
                    <ul>
                        {
                            ref2.map((refs, index)=>{
                                return(
                                    <li style={{margin:"1% 0%"}}><Subtitle>{refs}</Subtitle></li>
                                )
                            })
                        }
                    </ul>
                </Columns>

            </Row>
            <Row  alignitems="center" style={{height:"20%"}}>
                <Subtitle fw="bold">all copyrights reserved - name name name bcs23</Subtitle>
            </Row>
        </FooterCont>
    )
}
export default Footer