import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Common.css';

const Chat = () => {
	const [question, setQuestion] = useState([]);
	const [answer, setAnswer] = useState([]);
	const navigate = useNavigate();

	const goToChatList = () => {
		navigate('/list');
	};

	return (
		<div>
			<div className='border-box'>
				<div className='top'>
					<div style={{display:'flex', flex:1}}>
						<div className='title'>Dev Oceanflow</div>
					</div>
					<div style={{display:'flex', flex:1, justifyContent:'flex-end', alignItems:'center'}}>
						<div onClick={goToChatList} className='button'>목록</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Chat;
