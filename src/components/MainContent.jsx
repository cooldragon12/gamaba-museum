import React from 'react';
import { Gallery, Home, Biography } from './Sections';


const MainContent = (props)=>{
    const {scrollState} = props
    return(
        <div className="main-content" style={{display:'flex',flexDirection:"column"}}>
            <Home scrollLoc={scrollState}/>
            <Biography scrollLoc={scrollState}/>
            <Gallery scrollLoc={scrollState}/>

        </div>
    )
}

export default MainContent