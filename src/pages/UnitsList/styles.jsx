import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100vh;
  background-color: #fafafa;

  .link {
    width: 120px;
    margin-top: 100px;
    margin-left: 78%;
    border-radius: 15px;
    color: #fff;
    cursor: pointer;

    @media only screen and (max-width: 1400px) {
      display: block;
      margin-left: 0;
      margin: 0 auto;
      margin-bottom: 80px;
      margin-top: 80px;
    }
    @media only screen and (max-width: 600px) {
      display: block;
      margin-left: 0;
      margin: 0 auto;
      margin-bottom: 80px;
    }
  }

  h3 {
    margin-left: 130px;
    padding: 20px;
    font-size: 1.3em;
    font-weight: bold;
    margin-top: 50px;
  }

  @media only screen and (max-width: 600px) {
    width: 100vw;
    h3 {
      margin-left: 0;
      text-align: center;
    }
  }
`;

export const Table = styled.table`
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: #fff;

  @media only screen and (max-width: 600px) {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    margin-bottom: 80px;
  }
`;

export const Row = styled.tr`
  border-bottom: 2px solid #ececec;

  td {
    text-align: center;
    padding: 12px;
  }
`;

export const Edit = styled.button`
  border: none;
  width: 60px;
  padding: 5px;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: #fff;
  background-color: #8db51b;
  cursor: pointer;
`;

export const Delete = styled.button`
  border: none;
  width: 60px;
  padding: 5px;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: #fff;
  background-color: #d82d56;
  cursor: pointer;
`;

export const NewUnit = styled.button`
  border: none;
  padding: 15px;
  font-weight: bold;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: #fff;
  background-color: #4c5df1;
  cursor: pointer;
`;

export const THeader = styled.thead`
  font-weight: bold;
  border-bottom: 2px solid #ebebeb;

  th {
    padding: 10px;
    background-color: #f1f1f1;
  }
`;
