import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<ReactQueryDevtools />
			<App />
		</QueryClientProvider>
	</React.StrictMode>
);