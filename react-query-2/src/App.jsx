import React from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';

const POSTS = [
	{
		id: 1,
		title: 'Post 1',
	},
	{
		id: 2,
		title: 'Post 2',
	},
];

function App() {
	const postFn = async () => {};

	const postQuery = useQuery({
		queryKey: ['post'],
		queryFn: () => wait(1000).then(() => [...POSTS]),
	});

	const newPostMutation = useMutation({
		mutationFn: (title) => {
			return wait(1000).then(() =>
				POSTS.push({
					id: crypto.randomUUID(),
					title,
				})
			);
		},
	});

	if (postQuery.isLoading) {
		return <h1>Loading...</h1>;
	}
	if (postQuery.isError) {
		return <h1>Error: {postQuery.error}</h1>;
	}

	return (
		<div className='app'>
			{postQuery.data.map((data) => {
				return (
					<div key={data.id}>
						<h1>{data.title}</h1>
					</div>
				);
			})}
		</div>
	);
}

function wait(duration) {
	return new Promise((resolve) => {
		setTimeout(resolve, duration);
	});
}

export default App;
