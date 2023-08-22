import React from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

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
	const queryClient = useQueryClient();

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

		onSuccess: () => {
			queryClient.invalidateQueries(['post']);
		},
	});

	if (postQuery.isLoading) {
		return <h1>Loading...</h1>;
	}
	if (postQuery.isError) {
		return <h1>Error: {postQuery.error}</h1>;
	}

	// Comments 2

	return (
		<div className='app'>
			{postQuery.data.map((data) => {
				return (
					<div key={data.id}>
						<h1>{data.title}</h1>
					</div>
				);
			})}

			<button
				disabled={newPostMutation.isLoading}
				onClick={() => newPostMutation.mutate('New Post')}
			>
				{newPostMutation.isLoading ? 'Loading...' : 'Click'}
			</button>
		</div>
	);
}

function wait(duration) {
	return new Promise((resolve) => {
		setTimeout(resolve, duration);
	});
}

export default App;
