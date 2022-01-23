import styled from "styled-components";
import LogoImage from "../../images/Logo.png";
import ImageLogon from "../../images/image1.png";



export const Lock = styled.div`
  .lock{
    position: absolute;
    left: 1208px;
    top: 617px;
    width: 70px;
    height: 30px;
    color: #a8a8a8;
  }
`;

export const Envelope = styled.div`
  .envelope{
    position: absolute;
    left: 1208px;
    top: 512px;
    width: 70px;
    height: 30px;
    color: #a8a8a8;
  }
`;

export const Container = styled.div`
  /* height: 1080px; */
  height: 929px;
  width: 1920px;
  /* left: -414px;
  top: -513px;
  border-radius: 0px; */

  background: #fafafa;
  /* background: cadetblue; */
`;



export const Imagem = styled.div`
  position: absolute;
  width: 979px;
  /* height: 1080px; */
  height: 929px;
  left: 0px;
  top: 0px;

  opacity: 0.8;
  /* background-color: red; */
`;

export const Imagem1 = styled.div`
  position: absolute;
  width: 1135.89px;
  /* height: 1080px; */
  height: 929px;
  left: 0px;
  top: 0px;

  background: url(${ImageLogon}) no-repeat;
`;

export const Retangle = styled.div`
  position: absolute;
  width: 979px;
  height: 929px;
  left: 0px;
  top: 0px;

  background: #ffffff;
`;

export const Logon = styled.div`
  position: absolute;
  width: 518px;
  height: 708.06px;
  left: 1208px;
  /* top: 132px; */
  top: 110.5px;
  
  /* mix-blend-mode: multiply; */
  /* background-color: red; */
`;

export const Logo = styled.div`
  position: absolute;
  width: 309px;
  height: 309px;
  left: 1324px;
  top: 90px;

  background-color: aliceblue;

  /* background: url("https://www.tailorbrands.com/wp-content/uploads/2020/07/twitter-logo.jpg"); */

  background: url(${LogoImage});
`;



export const Text = styled.p`
  position: absolute;
  width: 257.48px;
  height: 48.75px;
  left: 1339.02px;
  top: 406.5px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  text-align: center;

  color: #374557;
`;

export const Email = styled.input`
  position: absolute;
  width: 445px;
  height: 65px;
  left: 1208px;
  top: 492.85px;
  border: 1px solid #000000;
  border-radius: 10px;
  font-size: 1.3em;
  padding-left: 70px;
`;

export const Password = styled.input`
  position: absolute;
  width: 445px;
  height: 65px;
  left: 1208px;
  top: 597.5px;
  border: 1px solid #000000;
  border-radius: 10px;
  font-size: 1.3em;
  padding-left: 70px
`;

export const Submit = styled.input`
  position: absolute;
  width: 518px;
  height: 65px;
  left: 1208px;
  top: 713.24px;
  font-weight: bold;
  border-radius: 10px;
  font-size: 1.3em;
  color: #fff;
  background-color: #4cbc9a;

  // On click
  // Navigate to: "None";
  // Animate: Instant;
  animation-duration: 0ms;
`;
