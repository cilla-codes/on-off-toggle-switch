import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: #fbfafa;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Switch = styled.div`
  background-color: ${({ toggle }) => (toggle ? '#02a3fa' : '#fbb303')};
  position: relative;
  width: 19rem;
  height: 9rem;
  border-radius: 5rem;
  cursor: pointer;
  transition: 0.4s;
`;

export const Slider = styled.span`
  ${({ toggle }) =>
    toggle === true &&
    `
      transform: translateX(132%);
    `};
  position: absolute;
  background-color: #fff;
  width: 7.5rem;
  height: 7.5rem;
  left: 0.8rem;
  bottom: 0.8rem;
  border-radius: 50%;
  transition: 0.4s;
`;
