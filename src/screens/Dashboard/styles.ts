import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background };
`;

export const Title = styled.Text`
  font-size: 36px;
  font-family: ${({ theme }) => theme.fonts.thin };
  color: ${({ theme }) => theme.colors.title };
`;

export const SubTitle = styled.Text`
  font-size: 36px;
  font-family: ${({ theme }) => theme.fonts.bold };
  color: ${({ theme }) => theme.colors.title };
`;
