import React from 'react';
import styled from 'styled-components';

const Foot = styled.div`
    background-color: #eee;
    height:50px;
    text-align:center;
    color:#111;
    display:flex;
    justify-content:center;
    align-items:center;
    position:sticky;
`

function Footer() {
    return (
        <Foot>
            <span>Muluberhan Yonas</span>
        </Foot>
    );
}

export default Footer;