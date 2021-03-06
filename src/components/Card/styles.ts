import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface CardProps {
  type: "up" | "down" | "total";
}

export const Container = styled.View<CardProps>`
  background-color: ${({ theme, type }) => type === 'total' ? theme.colors.secondary : theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 18px 22px;
  padding-bottom: ${RFValue(42)}px;
  margin: 0 8px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
`;

{/* @ts-ignore */}
export const Icon = styled(Feather)<CardProps>`
  font-size: ${RFValue(32)}px;
  ${({ type }) =>
    type === "up" &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `}
  ${(props) =>
    props.type === "down" &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `}
  ${(props) =>
    props.type === "total" &&
    css`
      color: ${({ theme }) => theme.colors.title};
    `}
`;
export const Footer = styled.View`
  margin-top: 38px;
`;
export const Amount = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.title};
`;
export const Transaction = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
`;
