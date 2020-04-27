import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { sendMessage } from '../../../../store/message/actions';
import StyledMessageSender from './StyledMessageSender';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { readRecord } from '../../../../utilities/localStorageService';

interface IMessageSenderDispatchProps {
  sendMessage: (message: { from: string, content: string, time: Date }) => void;
}

const KEY_CODES = {
  ENTER: 'Enter',
  CTRL: 'Control'
};

/* Message sender component with typing area and send button */
export class MessageSender extends React.Component {
  public state = {
    username: readRecord('username') || [...Array(10)].map(() => Math.random().toString(36)[2]).join(''),
    chatMessage: ''
  };
  private messagesInputRef = React.createRef<HTMLInputElement>();
  private pressedKeysMap: {} = {};

  public componentDidMount(): void {
    document.addEventListener('keydown', this.handleKeyPress);
    document.addEventListener('keyup', this.handleKeyUp);
  }

  public componentWillUnmount(): void {
    document.removeEventListener('keydown', this.handleKeyPress);
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  public render() {
    const { chatMessage } = this.state;

    return (
      <StyledMessageSender>
        <input id='send-message-input' type='text' ref={this.messagesInputRef} value={chatMessage}
               onChange={this.handleOnChange} placeholder="Type a message"/>
        <button id='send-message-btn' onClick={this.handleClick}>
          <FontAwesomeIcon icon={faPaperPlane} size="2x"/>
        </button>
      </StyledMessageSender>
    );
  }

  private handleKeyUp = () => {
    this.pressedKeysMap = {};
  };

  private handleKeyPress = (e: KeyboardEvent) => {
    e = e || event;
    this.pressedKeysMap[e.key] = e.type === 'keydown';

    if (readRecord('ctrlEnterSending') !== 'On') {
      this.sendOnPressEnter();
    } else {
      this.sendOnPressCtrlEnter();
    }
  };

  private sendOnPressEnter = () => {
    if (KEY_CODES.ENTER in this.pressedKeysMap && !(KEY_CODES.CTRL in this.pressedKeysMap)) {
      this.sendChatMessage();
      this.cleanMessageInput();
    } else {
      return;
    }
  };

  private sendOnPressCtrlEnter = () => {
    if (KEY_CODES.CTRL in this.pressedKeysMap && KEY_CODES.ENTER in this.pressedKeysMap) {
      this.sendChatMessage();
      this.cleanMessageInput();
    } else {
      return;
    }
  };

  private handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ chatMessage: e.currentTarget.value });
  };

  private handleClick = () => {
    this.sendChatMessage();
    this.cleanMessageInput();
  };

  private sendChatMessage = (): void => {
    const { username, chatMessage } = this.state;
    if (chatMessage !== '') {
      // @ts-ignore
      this.props.sendMessage({ from: username, content: chatMessage, time: new Date() });
    }
  };

  private cleanMessageInput = (): void => {
    this.setState({ chatMessage: '' });
    if ((this.messagesInputRef.current as HTMLInputElement)) {
      (this.messagesInputRef.current as HTMLInputElement).focus();
    }
  };
}

const mapDispatchToProps = (dispatch: Dispatch<any>): IMessageSenderDispatchProps => ({
  sendMessage: (message: { from: string, content: string, time: Date }) => dispatch(sendMessage(message)),
});

export default connect(null, mapDispatchToProps)(MessageSender);
