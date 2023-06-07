import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import House from './pages/House';
import About from './pages/About';
import Error from './pages/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/house/:houseId" element={<House />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</Router>
	</React.StrictMode>
);