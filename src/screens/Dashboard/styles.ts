import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}PX;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const UserContainer = styled.View`
  margin-top: ${RFValue(54)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  position: relative;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 18px;
`;

export const Greeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px; ;
`;
{/* @ts-ignore */ }
export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.attention};
  font-size: ${RFValue(24)}px;
`;

export const CardList = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingHorizontal: 16 },
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFValue(150)}px;
`;
