"use client";

import styled from "styled-components";

const CustomButtonStyled = styled.button`
  background-color: #4ac;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
`;

export const CustomButton = ({ children }) => {
  return <CustomButtonStyled>{children}</CustomButtonStyled>;
};
