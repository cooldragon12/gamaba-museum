import React from 'react';
import styled from 'styled-components';
import {backlight, head_color, main_content} from '../style-source/color'
import logo from '../img/logo.png'
 // TODO need to check to see, or see the result


 const NavigationBar = (props)=>{
    const {scrollState} =props;
    return(
        <NavCont>
            <LogoCont/>
            <Un>
                <Lis>
                    <NavItem style={{ color: (scrollState === 1 ?main_content:head_color), textDecoration:(scrollState === 1 ?"underline 2px #3d2305":"none")}} className={scrollState === 1 ? "active":""} href="#Home">HOME</NavItem>
                </Lis>
                <Lis>
                    <NavItem style={{ color: (scrollState === 2 ?main_content:head_color), textDecoration:(scrollState === 2 ?"underline 2px #3d2305":"none")}} className={scrollState === 2 ? "active":""} href="#Biography">BIOGRAPHY</NavItem>
                </Lis>
                <Lis>
                    <NavItem style={{ color: (scrollState === 3 ?main_content:head_color), textDecoration:(scrollState === 3 ?"underline 2px #3d2305":"none")}} className={scrollState === 3 ? "active":""} href="#Gallery">GALLERY</NavItem>
                </Lis>
                <Lis>
                    <NavItem style={{ color: (scrollState === 4 ?main_content:head_color), textDecoration:(scrollState === 4 ?"underline 2px #3d2305":"none")}} className={scrollState === 4 ? "active":""} href="#Reference">REFERENCES</NavItem>
                </Lis>
            </Un>
        </NavCont>
    )
}
var invert = 70
const LogoCont = styled.div`
    background-image: url(${logo});
    background-position:center;
    background-size:contain;
    width:10%;
    background-repeat:no-repeat;
    z-index:2;
    filter: invert(${invert}%)
`
const Lis = styled.li`
    margin-left: 1.5rem;
`
const NavCont = styled.nav`
        width: 100%;
        heigth: 20%;
        display: flex;
        flex-direction: row;
        justify-content: left;
        position: fixed;
        z-index:2;
        background-color:rgba(${backlight});
    `
const Un = styled.ul`
        display:flex;
        flex-direction: row;
        list-style: none;
        padding:0;
    ` 
const NavItem = styled.a`
        font-family: 'Open Sans';
        font-size: 20px;
        color: ${head_color};
        text-decoration:none;
        font-weight: 600;
        transition: text-decoration .25s ease-in, color .28s ease-out;
        &:hover{
            color: ${main_content};
            text-decoration:underline 2px ${main_content};
        }
    `

export default NavigationBar;