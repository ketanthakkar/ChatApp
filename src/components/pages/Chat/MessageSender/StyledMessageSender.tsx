import styled from '../../../../theme';

const StyledMessageSender = styled("section")`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  
  svg {
    color: ${props => props.theme.primaryTextColor};
  }
  
  input {
    color: ${props => props.theme.secondaryTextColor};
    width: 80%;
    line-height: 42px;
    font-size: 1.1em;
    box-sizing: border-box;
    padding: 7px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
  }
  
  button {
    background-color: ${props => props.theme.primaryDarkColor};
    width: 20%;
    height: 60px;
    border: none;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
    cursor: pointer;
  }
`;

export default StyledMessageSender;