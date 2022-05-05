import styled from "@emotion/styled";
import theme from "../globalStyle/theme";

export const LoginStyle = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 5px 5px 5px 5px ${theme.colors.pokeshadow};
  border: 10px ${theme.colors.pokegray};
  margin-top: 32px;
  margin-bottom: 32px;
  border-radius: 8px;
  background: ${theme.colors.pokeblue};
`;
export const Form = styled.div`
  max-width: 800px;
  margin: 0 auto;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Input = styled.input`
  font-size: 16px;

  width: 300px;
  height: 35px;
  color: ${theme.colors.pokegray};
  background: ${theme.colors.pokewhite};
  border-radius: 8px;
  border-color: ${theme.colors.pokeblue};
  border: 5px ${theme.colors.pokeshadow};
  margin-bottom: 18px;
`;

export const Button = styled.button`
  font-size: 16px;
  text-align: center;
  width: 300px;
  height: 35px;
  border: 5px ${theme.colors.pokeshadow};
  background: ${theme.colors.pokered};
  border-radius: 8px;
  margin-bottom: 18px;
`;
export const UserText = styled.p`
  padding-bottom: 32px;
  font-size: 16px;
`;
export const Image = styled.div`
  border-radius: 8px;

  text-align: center;
`;
