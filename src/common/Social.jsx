import styled from 'styled-components'
import Facebook from '../assets/SVG/Facebook'
import Youtube from "../assets/Youtube_logo.png"
import Tiktok from "../assets/tiktok-logo.png"
import Insta from "../assets/logo-ig.jpg"

const Social = () => {

// ! Props
// ! State
// ! Function
// ! Effect
// ! Render
  return (    
  <SWrapSocial>
    <div id='navSocial'>
      <div class="social">
        <ul>
          <li>
          <a href="https://www.facebook.com/hoanghamobilecom" title="Facebook Hoàng Hà Mobile">
            <Facebook />
          </a>
          </li>
          <li>
          <a href="https://www.youtube.com/channel/UCJm_GdFJzT8h1odq1oMu_7Q" title="Youtube Hoàng Hà Mobile">
            <img src={Youtube} alt='Youtube'/>
          </a>
          </li>
          <li>
          <a href="https://www.instagram.com/hoanghamobile/?hl=vi" title="Instagram Hoàng Hà Mobile">
            <img src={Insta} alt='Instagram'/>
          </a>
          </li>
          <li>
          <a href="https://www.tiktok.com/@hoanghaangels?" title="Tiktok Hoàng Hà Mobile">
            <img src={Tiktok} alt='Tiktok'/>
          </a>
          </li>
        </ul>
      </div>
    </div>
  </SWrapSocial>)
}

export default Social

export const SWrapSocial = styled.div `
    #navSocial {
        margin-left: 270px;
    }
    .social {
    background: #f5f5f5 0% 0% no-repeat;
    box-shadow: 0 4px 6px #00000029;
    border-radius: 30px;
    display: inline-block;
    padding: 2px;
    position: fixed;
    top: 45%;
    ul {
    list-style: none;
    padding: 0;
    margin: 0;
    img{
        max-width: 40px;
        max-height: 40px;
    }
}
}
`