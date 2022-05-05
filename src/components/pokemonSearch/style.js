import styled from "@emotion/styled";
import theme from "../globalStyle/theme";

export const Name = styled.p`
color: ${theme.colors.pokeblue}
  font-size: 32px;
`;

export const Pokemon = styled.div`
 text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #93C5D8 ;
  box-shadow: 5px 5px 5px 5px ${theme.colors.pokeshadow};
  border: 10px ${theme.colors.pokegray};
  margin-top: 32px;
  margin-bottom: 32px;
  border-radius: 8px;
`;
export const Image = styled.div`
   text-align: center;
`;
export const CardDescription = styled.div`

`;
export const ButtonSearch = styled.button`
  font-size: 16px;
  text-align: center;
  width: 100px;
  height: 36px;
  border: 5px ${theme.colors.pokeshadow};
  background: ${theme.colors.pokeblue};
  border-radius: 8px;
  margin-bottom: 18px;
`