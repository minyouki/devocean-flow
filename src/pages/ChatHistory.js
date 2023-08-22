import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import dummy from '../db/data.json';

const ChatHistory = () => {
	const [chatHistory, setChatHistory] = useState([]);
	const navigate = useNavigate();
	const { chatId } = useParams();
	const [searchParams] = useSearchParams(); // useSearchParams 훅 사용

	const goToChatList = () => {
		navigate('/list');
	};

	const goToChat = () => {
		navigate('/');
	};

	useEffect(() => {
		const foundChat = dummy.board.find(chat => chat.chatId === parseInt(chatId));

		if (foundChat) {
			setChatHistory([foundChat]);
			console.log(foundChat);
		}
	}, [searchParams]);

	return (
		<div className='border-box'>
			<div className='top'>
				<div style={{display:'flex', flex:1}}>
					<div className='title'>Dev Oceanflow</div>
				</div>
				<div style={{display:'flex', flex:1, justifyContent:'flex-end', alignItems:'center'}}>
					<div style={{display:'flex', flexDirection:'column', gap: '10px'}}>
						<div onClick={goToChat} className='button'>질문하기</div>
						<div onClick={goToChatList} className='button'>목록</div>
					</div>
				</div>
			</div>
			{chatHistory.map(chat => (
			<div key={chat.chatId}>
				<h2>{chat.title}</h2>
				<p>{chat.content}</p>
			</div>
		))}
		</div>
	);
}

export default ChatHistory;

