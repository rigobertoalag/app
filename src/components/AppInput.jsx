import React from "react";
import styled from "styled-components";

const AppInput = (props, ref) => {
  return (
    <FieldSet>
      <label htmlFor="">{props.label}</label>
      <Input ref={ref}{...props}></Input>
    </FieldSet>
  );
};

const FieldSet = styled.fieldset`
  border: 0;
  max-width: ${({ theme }) => theme.dims.widths.forms};
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  margin-top: ${({ theme }) => theme.dims.margin.intersection};

  & label {
    opacity: 0.6;
  }
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.dims.padding.largePadding};
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-top: ${({ theme }) => theme.dims.margin.small};
  outline: none;
  border: none;
  border-radius: ${({ theme }) => theme.dims.borderRadius.normal};
  background-color: ${({ theme }) => theme.colors.gray};
  border: solid 1px;
  border-color: ${({ theme }) => theme.colors.silver};
`;

export default  React.forwardRef(AppInput);

