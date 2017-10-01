import styled from 'styled-components';

const Button = styled.button`
width: 212px;
height: 48px;
margin: 24px 0;
position: relative;
background: #71b045;
border-radius: 5px;
color: #fff;
display: inline-block;
font-weight: 800;
font-size: 16px;
letter-spacing: 0.03em;
line-height: 1;
padding: 12px 25px;
text-transform: uppercase;
text-shadow: none;
transition: background 0.2s ease-in-out, border-color 0.2s ease-in-out;
border: none;
outline: none;

&:hover {
  text-decoration: none;
  background: #639a3c;
  border-color: #639a3c;
  color: #fff;
  cursor: pointer;
}
`;

export { Button };