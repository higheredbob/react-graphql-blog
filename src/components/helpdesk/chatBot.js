import React, { Component } from 'react';
import { ReactSlackChat } from 'react-slack-chat';

class ChatBot extends Component {
  render() {
    return (
        <ReactSlackChat
          botName='5splunk-nefa1-mimchat-24sf3' // VisitorID, CorpID, Email, IP address etc.
          apiToken='base64-encoded-api-token-119aab37r32r32r316e0296c3da'
          channels={[
          {
            name: 'mim-helpdesk'
          },
          {
            name: 'BotTest',
            id: 'C48SAX4',
            icon: ''
          },
          {
            name: 'test22',
            id: 'da467s',
            icon: './logo.svg'
          }]}
          helpText='Welcome to the Help Desk'
          themeColor='#856090'
          userImage='http://www.iconshock.com/img_vista/FLAT/mail/jpg/robot_icon.jpg'
          debugMode={true}
          hooks={[
            {
              /* My Custom Hook */
              id: 'getSystemInfo',
              action: () => 'MY SYSTEM INFO!'
            }
          ]}
        />
      )
  }
}

export default Chatbot
