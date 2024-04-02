import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  min-height: 280px;
  background-color: lightgray;
  margin: 0 auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  width: 50%;
  flex: 1;
`;
const ImgModal = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 50%;
  border: 5px solid black;
  margin-right: 40px;

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TextTitle = styled.h2`
  font-size: 24px;
  margin: 0;
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid gray;
`;

const TextParagraph = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

export default {
  Container,
  TextContainer,
  ImgModal,
  TextTitle,
  TextParagraph,
};
