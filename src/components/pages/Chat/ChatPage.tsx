import * as React from 'react';
import ChatArea from './ChatArea'
import StyledPageContainer from '../StyledPageContainer';
import { withTranslations } from '../../../utilities/withTranslations';
import MessageSender from './MessageSender';

/* Chat Page */
const ChatPage = () => (
  <StyledPageContainer>
    <ChatArea />
    <MessageSender />    
  </StyledPageContainer>
);

export default withTranslations(ChatPage);
