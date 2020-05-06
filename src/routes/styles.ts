import styled, { css } from 'styled-components/native';

interface NavButtonProps {
  isActive: boolean;
}

export const HeaderContainer = styled.View`
  background-color: #fff;
  padding-bottom: 25px;
  width: 100%;
`;

export const HeaderTop = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  color: #8f5de8;
  font-family: 'Montserrat-BlackItalic';
  font-size: 35px;
  margin-left: 25px;
`;

export const NewPostButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 15px;
  margin-right: 5px;
`;

export const NewPostButton = styled.TouchableOpacity`
  flex-direction: row;
  width: 65%;
  align-items: center;
  justify-content: center;
  background-color: #8f5de8;
  border-radius: 40px;
  padding: 5px 20px 5px 20px;
  margin-top: 10px;
`;

export const NavButtonsContainer = styled.View`
  width: 65%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 10px;
`;

export const NavButton = styled.TouchableOpacity<NavButtonProps>`
  ${props =>
    props.isActive &&
    css`
      border-bottom-width: 4px;
      border-bottom-color: #8f5de8;
    `}
`;

export const NavButtonText = styled.Text<NavButtonProps>`
  color: #8f5de8;
  font-size: 15px;
  ${props =>
    props.isActive &&
    css`
      font-weight: bold;
    `}
`;
