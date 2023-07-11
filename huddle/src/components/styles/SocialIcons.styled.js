import styled from "styled-components";

export const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
  }

  li {
    margin-right: 10px;
  }

  a {
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    text-decoration: none;
  }
`;
