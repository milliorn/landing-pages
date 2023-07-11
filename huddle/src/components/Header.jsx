import React from "react";
import { Container } from "./styles/Container.styled";
import {
  Logo,
  Nav,
  StyledHeader,
  Image,
  Paragraph,
} from "./styles/Header.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="logo" />
          <Button>Try it Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
              natus.
            </h1>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              tenetur magni voluptates accusantium, voluptatem illum reiciendis
              dolor eum dignissimos eligendi quo earum sit minima quas libero
              nostrum numquam ratione quis.
            </Paragraph>
            <Button bg="#9D174D" color="#fff">
              Get Started For Free
            </Button>
          </div>
          <Image
            src={`${process.env.PUBLIC_URL}/images/illustration-mockups.svg`}
            alt="illustration"
          />
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
