import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Common.css';
import '../css/Chat.css';
import dummy from "../db/data.json";

const Chat = () => {
	//for POST
	const [question, setQuestion] = useState(null);
	//for GET
	const [chat, setChat] = useState([]);
	const navigate = useNavigate();

	const goToChatList = () => {
		navigate('/list');
	};

	const handleInput = (e) => {
		e.preventDefault();
		setQuestion(e.target.question.value);
		//question post

		//전체 리스트 get
		const testData = dummy.chat;
		setChat(testData);
		e.target.question.value = "";
		//role에 따라 채팅 띄우기? ---->>>> index 짝수면 user로!!!

	}

	return (
		<div className='border-box'>
			<div className='top' style={{marginBottom:'20px'}}>
				<div style={{display:'flex', flex:1}}>
					<div className='title'>Dev Oceanflow</div>
				</div>
				<div style={{display:'flex', flex:1, justifyContent:'flex-end', alignItems:'center'}}>
					<div onClick={goToChatList} className='button'>목록</div>
				</div>
			</div>

			{/* <div className='line-div'>
				<div className='common-line' style={{width:'80%'}}></div>
			</div> */}

			<div className='middle'>
				<div className='chat-div'>
					<div className='user-chat-area'>
						<div className='user'>
							{question}
						</div>
					</div>
				</div>
			</div>

			<div className='bottom'>
				<form className='input' onSubmit={handleInput}>
					<textarea name='question' placeholder='Send a message'/>
					<input type='submit' value='GO'/>
				</form>
			</div>
		</div>
	);
}

export default Chat;
