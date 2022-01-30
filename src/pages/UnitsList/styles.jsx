import styled from "styled-components";
// import LogoImage from "../../images/Logo.png";

export const Container = styled.div`
  /* background-color: green; */
  display: flex;
  width: 100vw;
  height: 100vh;
`;
export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    width: 80%;
    height: 100vh;
    h3{
      margin-left: 130px;
      padding: 20px;
      font-size: 1.3em;
      font-weight: bold;
      margin-top: 50px;
    }
   
    background-color: #fafafa;
`;
export const Table = styled.table`
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`;

export const Row = styled.tr`
  border-bottom: 2px solid #ececec;
  
  td{
    text-align: center;
  padding: 12px;
  }

`;

export const Edit = styled.button`
  background-color: #8DB51B;
  color: #fff;
  border: none;
  width: 60px;
  padding: 5px;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Delete = styled.button`
  background-color: #D82D56;
  color: #fff;
  border: none;
  width: 60px;
  padding: 5px;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const NewUnit = styled.button`
  background-color: #4C5DF1;
  /* font-size: 1em; */
  color: #fff;
  border: none;
  width: 150px;
  padding: 15px;
  margin-top: 180px;
  margin-left: 80%;
  font-weight: bold;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const THeader = styled.thead`
  font-weight: bold;
  border-bottom: 2px solid #ebebeb;
  th{
    padding: 10px;
    background-color: #f1f1f1;
  }
`;