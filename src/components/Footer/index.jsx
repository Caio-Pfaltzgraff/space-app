import styled from "styled-components";

const Rodape = styled.footer`
  background-color: #04244f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  padding: 22px;
  box-sizing: border-box;
  p {
    font-size: 16px;
    color: #fff;
    margin: 0;
  }
`;

const IconContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    display: inline-block;
    margin-right: 32px;
  }
`;

const Footer = () => {
  return (
    <Rodape>
      <IconContainer>
        <li>
          <a href="#">
            <img src="/images/sociais/facebook.svg" alt="Icone do Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/sociais/twitter.svg" alt="Icone do Twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/images/sociais/instagram.svg" alt="Icone do Instagram" />
          </a>
        </li>
      </IconContainer>
      <p>Desenvolvido por Caio.</p>
    </Rodape>
  );
};

export default Footer;
