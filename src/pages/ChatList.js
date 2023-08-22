import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import dummy from '../db/data.json';
import '../css/ChatList.css';

const ChatList = () => {
	const [chatList, setChatList] = useState(dummy.board);
	const navigate = useNavigate();

	const goToChat = () => {
		navigate('/');
	};

	return (
		<div>
			<div className='border-box'>
				<div className='top'>
					<div style={{display:'flex', flex:1}}>
						<div className='title'>Dev Oceanflow</div>
					</div>
					<div style={{display:'flex', flex:1, justifyContent:'flex-end', alignItems:'center'}}>
						<div onClick={goToChat} className='button'>질문하기</div>
					</div>
				</div>

				{chatList.map(chat => (
					<div key={chat.chatId}>
						<Link to={`/chatHistory/${chat.chatId}`}>
							<strong>{chat.title}</strong><br></br>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default ChatList;
