import { styled } from '@stitches/react'
import React from 'react'
import { CiHamburger } from '../style/CiHamburger'
import { IcSharpSettings } from '../style/IcSharpSettings'
import { PhChartBarHorizontalLight } from '../style/PhChartBarHorizontalLight'
import { UiwQuestionCircleO } from '../style/UiwQuestionCircleO'

const NavbarContainer = styled('div', {
 height:'20px',
 width:'100vw',
 position:'fixed',
 top:'0px',
 display:'flex',
 justifyContent:'space-between',
 alignItems:'center',
 borderBottom:'1px solid #d8d8d8',
 fontFamily:'Clear Sans',
 fontSize:'16px',
 padding:'15px'
})
const IconLeft= styled ('div', {
display:'flex',
alignItems:'center',
gap:'10px'
})
const IconRight= styled ('div', {
    display:'flex',
    alignItems:'center',
    gap:'10px',
    marginRight:'50px'
})
const Navbar = () => {
    return (
        <NavbarContainer>
            <IconLeft>
                <CiHamburger/>
            <UiwQuestionCircleO/>
            </IconLeft>
            
            <h1>Wordle</h1>
            <IconRight>
                <p style={{transform:'rotate(-90deg)'}}>
                  <PhChartBarHorizontalLight/>  
                </p>
            
            <IcSharpSettings/>
            </IconRight>
        </NavbarContainer>
    )
}

export default Navbar
