import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 90vh;
`;
export const Title = styled.h1`
  padding-bottom: 50px;
  font-size: 50px;
  font-weight: 500;
  color: #f0f0f0;
`;

export const Forma = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Input = styled(Field)`
  width: 250px;
  height: 25px;
  font-size: 14px;
  padding: 7px 15px 7px 35px;
  border-radius: 5px;
  color: #4b0082;
  outline: none;
  &:focus {
    border: 2px solid #ffbf00;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 400px;
    font-size: 18px;
  }
  @media (min-width: 1200px) {
    width: 400px;
    font-size: 20px;
  }
`;
export const ButtonSubmit = styled.button`
  height: 35px;
  width: 150px;
  color: #f0f0f0;
  outline: none;
  margin-top: 15px;
  border-radius: 5px;
  font-size: 16px;
  background: transparent;
  border: medium none;
  cursor: pointer;
  :hover {
    color: #ffbf00;
  }
  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 18px;
  }
  @media (min-width: 1200px) {
    font-size: 20px;
  }
`;
