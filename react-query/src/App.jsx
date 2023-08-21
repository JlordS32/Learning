import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Example />
		</QueryClientProvider>
	);
}

function Example() {
	const { isFetching, error, data } = useQuery('data', () => {
		return fetch('https://careersapi.vercel.app/api/careers').then((res) =>
			res.json()
		);
	});

    if (isFetching) return <h1 style={{
		position: 'absolute',
		top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
		fontSize: '5rem'
	}}>Loading...</h1>;
	if (error) return <p>Error :{error.message}</p>;

    return (
		data?.map((data) => {
			return (
                <div key={data.id}>
                    <h1>{data.title}</h1>
					<p>Salary: {data.salary}</p>
					<h2>Description: </h2>
                    <p>{data.description}</p>
                </div>
            );
		})
	)
}

export default App;
