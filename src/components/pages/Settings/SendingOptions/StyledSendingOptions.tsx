import styled from '../../../../theme';

const StyledSendingOptions = styled("div")`
 padding: 14px;
 text-align: left;
 border-bottom: 1px solid ${props => props.theme.primaryDarkColor};
 
 label {
  font-size: 1.2em;
  color: ${props => props.theme.primaryTextColor};
 }
`;

export default StyledSendingOptions;