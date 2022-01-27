import styled from "styled-components";
import LogoImage from "../../images/logo.png";
import ImageLogon from "../../images/image1.png";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #fafafa;
`;

export const Image = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${ImageLogon}) no-repeat;
`;

export const ContainerImage = styled.div`
  width: 50%;
  height: 100vh;
  background: #ffffff;

  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

export const ContainerLogon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media only screen and (max-width: 1100px) {
    width: 100%;
    height: 100vh;
  }
`;
export const Logon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 708.06px;

  background-color: aqua;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  /* height: 708.06px; */

  background-color: greenyellow;
  
`;

export const Logo = styled.div`
  width: 309px;
  height: 309px;
  background: url(${LogoImage});
`;

export const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  width: 257.48px;
  height: 48.75px;
  line-height: 32px;
  text-align: center;
  color: #374557;
`;

// export const Email = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 5px;
//   border: 1px solid;
//   border-radius: 5px;
//   width: 90%;
//   height: 50px;
//   margin-top: 30px;

//   &:hover {
//     box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 1px;
//   }
//   .envelope-icon {
//     width: 70px;
//     height: 30px;
//     color: #a8a8a8;
//   }
//   @media only screen and (max-width: 400px) {
//     .envelope-icon {
//       display: none;
//     }
//   }
// `;

// export const EmailInput = styled.input`
//   flex: 1 0;
//   font-size: 1.2em;
//   background-color: transparent;
//   padding-left: 5px;
//   border: 0;

//   &:focus {
//     outline: none;
//   }
// `;

// export const Password = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 5px;
//   border: 1px solid;
//   border-radius: 5px;
//   width: 90%;
//   height: 50px;
//   margin-top: 30px;
//   border: 1px solid #000000;

//   &:hover {
//     box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 1px;
//   }
//   .lock-icon {
//     width: 70px;
//     height: 30px;
//     color: #a8a8a8;
//   }
//   @media only screen and (max-width: 400px) {
//     .lock-icon {
//       display: none;
//     }
//   }
// `;

// export const PasswordInput = styled.input`
//   flex: 1 0;
//   font-size: 1.1em;
//   background-color: transparent;
//   padding-left: 5px;
//   border: 0;

//   &:focus {
//     outline: none;
//   }
// `;

export const Submit = styled.button`
  /* width: 93.5%; */
  min-width: 150px;
  height: 50px;
  /* font-weight: bold; */
  border-radius: 5px;
  font-size: 1.3em;
  margin-top: 30px;
  animation-duration: 0ms;
  color: #fff;
  background-color: #4cbc9a;

  border: none;
`;
