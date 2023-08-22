import './App.css';
import Chat from "./pages/Chat";
import ChatList from './pages/ChatList';
import ChatHistory from './pages/ChatHistory';
import Header from "./component/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<Chat />} />
					<Route path="/list" element={<ChatList />} />
					<Route path="/chatHistory/:chatId" element={<ChatHistory />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
