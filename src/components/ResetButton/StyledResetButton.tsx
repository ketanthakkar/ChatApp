import styled from '../../theme';

const StyledResetButton = styled("div")`
  width: 100%;
  position: fixed;
  bottom: 14px;
  
  button {
    width: 100%;
    line-height: 28px;
    font-size: 1.1em;
    padding: 7px;
    border: 1px solid ${(props) => props.theme.primaryTextColor};
    cursor: pointer;
    color: ${(props) => props.theme.primaryTextColor};
    background-color: ${(props) => props.theme.secondaryLightColor};
  }
`;

export default StyledResetButton;