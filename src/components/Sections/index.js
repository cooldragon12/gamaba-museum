import styled from 'styled-components';

export {default as Home} from './Home';
export {default as Gallery} from './Gallery';
export {default as Biography} from './Biography';

export const Section = styled.div`
    margin: 1% 0%;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction:row;
    position:relative;
    overflow:hidden;
`
