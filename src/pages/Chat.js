import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Common.css';
import '../css/Chat.css';

const WS = new WebSocket("ws://localhost:8000/ws");

const Chat = () => {
	const [chat, setChat] = useState([]);
	const navigate = useNavigate();

	const goToChatList = () => {
		navigate('/list');
	};

	const handleInput = (e) => {
		e.preventDefault();

		const newQuestion = e.target.question.value;
		setChat(prevChat => [
			...prevChat,
			{role: 'user', message: newQuestion}
		]);

		WS.send(newQuestion);

		e.target.question.value = "";
	}

	const handleWSMessage = (e) => {
		const content = e.data;

		if (content.startsWith('Master Link:')) {
			const url = content.slice('Master Link:'.length).trim();
			window.open(url, '_blank', 'noopener noreferrer');
		} else {
			setChat(prevChat => [
				...prevChat,
				{role: 'ass', message: content}
			]);
		}
	}

	useEffect(() => {
		WS.onmessage = handleWSMessage;
	}, []);

	return (
		<div className='border-box'>
			<div>
				<div className='top' style={{marginBottom:'20px'}}>
						<div style={{display:'flex', flex:1}}>
							<div className='title'>Dev Oceanflow</div>
						</div>
						<div style={{display:'flex', flex:1, justifyContent:'flex-end', alignItems:'center'}}>
							<div onClick={goToChatList} className='button'>목록</div>
						</div>
				</div>
				<div style={{display:'flex', justifyContent:'flex-start', fontSize:'18px', fontWeight:'600', marginBottom:'20px'}}>
					개발자를 위한 코드 어시스턴트, Dev Oceanflow를 이용해보세요
				</div>
			</div>

			{/* <div className='line-div'>
				<div className='common-line' style={{width:'80%'}}></div>
			</div> */}

			<div className='middle'>
				<div className='chat-div'>
					{chat.map((messageObj, index) => (
						<div className={`${messageObj.role}-area`} key={index}>
							<div className={`${messageObj.role}-chat`}>
							{messageObj.message.split('\n').map((line, index) => (
								<React.Fragment key={index}>
									{line}
									<br />
								</React.Fragment>
	))}
							</div>
						</div>
					))}
				</div>
			</div>

			<div className='bottom'>
				<form className='input' onSubmit={handleInput}>
					<textarea type='text' name='question' id='sendMessage' placeholder='Send a message'/>
					<input type='submit' value='GO'/>
				</form>
			</div>
		</div>
	);
}

export default Chat;
