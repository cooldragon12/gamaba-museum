import React,{useEffect, useState} from 'react';
import styled from 'styled-components';
import { NavigationBar, MainContent, Footer } from './components';
import { background } from './style-source/color';
import './css/index.css'
const Background = styled.div`
    background-color: ${background}

`

const Anchor = (maxLength, current, howMany)=>{

    for(var i = 1;i <= howMany;i++){
        const start= (maxLength-55)*(i-1)*.8;
        const end = ((maxLength-56)*(i)*.8)
    
        
        if((start <= current) && (current < end)){
            return i;
        }
    }
    
    
}
const App = ()=>{
    const [currentLoc, setCurrentLoc] = useState(1);
    const maxHeight=window.screen.availHeight;
    
    const handleScroll= () =>{
        const position = window.pageYOffset;
        const count = Anchor(maxHeight, position, 4)
        setCurrentLoc(count);
        console.log(currentLoc)
    }
    useEffect(()=>{

        window.addEventListener('scroll', handleScroll,{passive:true});
        
        return()=>window.removeEventListener('scroll', handleScroll);
        
    })
    
    return(
        <Background className="main">
            
            {/* TODO: Navigation put Here */}
            <NavigationBar currentLoc={currentLoc}/>
          
            <>
            {/* TODO: Body put Here */}
                <MainContent scrollState={currentLoc}/>
            </>
            <>
            {/* TODO: Foot put Here */}
                <Footer/>
            </>
        </Background>
    )
}
export default App;