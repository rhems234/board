import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const socket = io('http://localhost:8090'); // 서버 주소에 맞게 변경

  useEffect(() => {
    // 소켓 이벤트 핸들러 등록
    const handleReceivemessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    socket.on('chat message', handleReceivemessage);

    // 컴포넌트가 언마운트될 때 이벤트 핸들러 제거
    return () => {
      socket.off('chat message', handleReceivemessage);
    };
  }, [socket]);

  // 메시지 입력 핸들러
  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  // 전송 버튼 클릭 핸들러
  const handleSendMessage = () => {
    // 입력된 메시지를 서버로 전송
    socket.emit('chat message', inputMessage);
    // 입력 필드 초기화
    setInputMessage('');
  };

  return (
    <div>
      <h1>Chat Page</h1>
      <div>
        {/* 메시지 목록 표시 */}
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
      <div>
        {/* 메시지 입력 필드 */}
        <input
          type="text"
          value={inputMessage}
          onChange={handleInputChange}
        />
        {/* 전송 버튼 */}
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatPage;
