import styled from "@emotion/styled";
import theme from "../globalStyle/theme";

export const ContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${theme.colors.pokegray};
  text-align: center;
  left: 0px;
  top: 0px;
  background: ${theme.colors.pokeshadow};
  @media (max-width: 600px) {
  }
`;

export const ContainerText = styled.div`
  padding-left: 24px;
  padding-top: 16px;
`;
export const ImageStyle = styled.div`
  padding-top: 16px;
  padding-bottom: 6px;
`;
export const UserStyle = styled.div`
  padding-right: 24px;
  padding-top: 16px;
`;
export const ContainerSearch = styled.div`
  background: ${theme.colors.pokered};
  height: 200px;
`;
export const DivInputButton = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
  display: flex;
  justify-content: center;
  @media (max-width: 600px) {
    align-items: center;
    flex-direction: column;
    display: flex;
  }
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
export const InputStyle = styled.div`
  padding-right: 16px;
  @media (max-width: 600px) {
    padding-left: 16px;

    padding-bottom: 16px;
  }
`;
export const ButtonStyle = styled.div`
  color: ${theme.colors.pokeblue};
  @media (max-width: 600px) {
  }
`;

export const PokeList = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  min-height: 600px;
  color: ${theme.colors.pokeblue};
  @media (max-width: 600px) {
    text-align: center;
  }
`;
export const PokeNameDiv = styled.p`
  box-shadow: 5px 5px 5px 5px ${theme.colors.pokeshadow};
  border: 2px solid ${theme.colors.pokeblue};
  border-radius: 8px;
`;
export const PokeName = styled.div`
  font-size: 24px;
  padding: 8px;
`;
