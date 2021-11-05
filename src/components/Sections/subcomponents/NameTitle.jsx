import React, { useState, useEffect } from 'react';
import styled, {keyframes} from 'styled-components';
const NameTitle = (props)=>{
    const [txt1, setTxt1] = useState([""]);
    const Title = styled.h1`
        font-family: ${props.font};
        font-size: 78px;
        color: ${props.color};
        font-weight:bold;
        margin: 0;
        display:flex;
        flex-direction:column;
    `;
    const SlowAppearUp = keyframes`
        from{
            opacity:0;

            transform:translateY(30%);
        }to{
            transform:translateY(0%);

            opacity:1;
        }
    `
 
    const WordAppear = styled.span`
        opacity:0;
        animation: ${SlowAppearUp} .35s forwards ease-out;

    `

    useEffect(()=>{
        var txt = (props.children);
        const splitted = txt.split(" ")
        setTxt1(splitted);
    }, [setTxt1, props.children]);

    return(
        
        <Title>
                {
                    txt1.map((word, index)=>{
                        return(
                        <WordAppear style={{animationDelay: (1+index/10)+"s"}}>{word}</WordAppear>)
                    })
                }
        </Title>
        
    )
}
export default NameTitle;