/* jshint ignore: start */

import React from 'react';
import { Message } from 'reactbulma';
import '../smde-editor.css';

class MessageText extends React.Component {
  render() {
    return (
      <div className="fit pad-bottom">
        <Message className="change-body body-styles">
          <Message.Header class="fit change-header change-text header-styles" >
            <p>You're checking out Check Yo Self</p>
          </Message.Header>
          <Message.Body>
            <h2>Hey! <span role="img" aria-label="wave-emoji-brown">👋🏾</span></h2>
            <p>This is Check Yo Self, an app to check the <span className="highlight">grammar and spelling</span> of your <span className="highlight">markdown blog posts</span>.</p>
            {/* <p>

            </p> */}
          </Message.Body>
        </Message>
      </div>
    );
  }
}

export default MessageText;
