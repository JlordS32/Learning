import React, { useEffect } from 'react';
import { useQuery, QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ChildComponent />
		</QueryClientProvider>
	);
}

function ChildComponent() {
	const fetchCareers = async () => {
		const res = await fetch('http://careersapi.vercel.app/api/careers');
		const data = await res.json();

		return data;
	};

    const fetchCareersById = async (id) => {
        const res = await fetch(`http://careersapi.vercel.app/api/careers/${id}`);
        return await res.json();
    }

	const { status, data, error } = useQuery({
		queryKey: ['todo'],
		queryFn: fetchCareers,
	});

	if (status === 'loading') {
		console.log('Loading...');
	}

	if (status === 'error') {
		return <span>Error: {error.message}</span>;
	}

	return (
		<div className='app' style={{
            fontSize: '9px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '10px',
        }}>
			{data?.map((career) => {
				return (
					<div key={career.id} style={{
                        fontFamily: 'Arial, opensans',
                        backgroundColor: 'gray'
                    }}>
						<h1>{career.title}</h1>
					</div>
				);
			})}
		</div>
	);
}

export default App;
