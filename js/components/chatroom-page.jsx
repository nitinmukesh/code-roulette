import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

class ChatRoom extends React.Component{

  sendMessage(event) {
    event.preventDefault();
    this.props.dispatch({
      type: "server/postMessage",
      data: {
        input: this.refs.messageText.value,
        questionID: this.props.questionID,
        userName: this.props.userName
      }
    })
  }

  render() {
    if (!this.props.questionText) {
      return null
    }

    return (
      <div>
        <h1 className="questionText">{this.props.questionText}</h1>
        <ul></ul>
        <input type="text" className="newMessage" ref="messageText" placeholder="submit message" />
        <button type="button" className="newMessageButton" onClick={this.sendMessage}>send message</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questionID: state.currentQuestion.questionID,
    questionText: state.currentQuestion.questionText,
    userName: state.userName

  }
};

module.exports = connect(mapStateToProps)(ChatRoom);
