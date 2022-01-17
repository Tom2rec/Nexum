import theme from './../Theme';
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: ${(props) => theme[props.theme].accent};
  font-size: 16px;
  padding: 5px 15px;
  border-radius: 12px;
  outline: 0;
  margin: 10px 0;
  cursor: pointer;
  box-shadow: 0 2px 2px lightgray;
  transition: ease background-color 250ms;

  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }

  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue"
};

export default Button