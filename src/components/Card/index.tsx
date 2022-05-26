import React from "react";

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  Transaction,
} from "./styles";

interface CardProps {
  title: string;
  amount: string;
  transaction: string;
  type: "up" | "down" | "total";
}

const slug_icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
};

export function Card({ type, amount, title, transaction }: CardProps) {
  return (
    <Container type={type}>
      <Header>
        <Title>{title}</Title>
        <Icon name={slug_icon[type]} type={type} />
      </Header>

      <Footer>
        <Amount>{amount}</Amount>
        <Transaction>{transaction}</Transaction>
      </Footer>
    </Container>
  );
}
