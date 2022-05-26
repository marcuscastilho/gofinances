import React from "react";

import { Card } from "../../components/Card";

import {
  Container,
  Header,
  UserContainer,
  UserInfo,
  Photo,
  User,
  Greeting,
  UserName,
  Icon,
  CardList,
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserContainer>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/49495564?v=4",
              }}
            />
            <User>
              <Greeting>Olá,</Greeting>
              <UserName>Marcus</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserContainer>
      </Header>
      <CardList>
        <Card
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          transaction="Última entrada dia 13 de abril"
        />
        <Card
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          transaction="Última saída dia 03 de abril"
        />
        <Card
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          transaction="Saldo atual"
        />
      </CardList>
    </Container>
  );
}
