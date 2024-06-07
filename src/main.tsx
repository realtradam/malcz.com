import React from 'react';
import ReactDOM from 'react-dom/client';
import { CustomProvider } from 'rsuite';
import App from './App.tsx';
import 'rsuite/dist/rsuite-no-reset.min.css'; 
import './index.css';

 // null assertion for tsx
//ReactDOM.createRoot(document.getElementById('root')!).render(
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CustomProvider>
			<App />
		</CustomProvider>
	</React.StrictMode>,
);
