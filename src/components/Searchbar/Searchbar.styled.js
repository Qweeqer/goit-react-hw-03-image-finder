import styled from '@emotion/styled';

export const SearchMenu = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  //   background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 10%;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 48px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
// export const ButtonLabel = styled.span`
//   display: flex;
//   align-items: center;
//   width: 100%;
//   max-width: 600px;
//   background-color: #fff;
//   border-radius: 3px;
//   overflow: hidden;
// `;
// export const CylonEye = styled.div`
//   background-color: red;
//   background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.9) 25%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.9) 75%);
//   background-image: -moz-linear-gradient(left, rgba(0, 0, 0, 0.9) 25%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.9) 75%);
//   background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.9) 25%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.9) 75%);
//   background-image: linear-gradient(to right, rgba(0, 0, 0, 0.9) 25%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.9) 75%);
//   color: white;
//   height: 100%;
//   width: 20%;
//   animation: 4s linear 0s infinite alternate move_eye;
// }

// @keyframes move_eye {
//   from {
//     margin-left: -20%;
//   }

//   to {
//     margin-left: 100%;
//   }`;
