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
		queryFn: () => wait(seconds(1)).then(() => [...POSTS]),
		staleTime: seconds(1),
		refetchInterval: seconds(20),
	});

	const newPostMutation = useMutation({
		mutationFn: async (title) => {
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

	// Comments 3

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

function seconds(milliseconds) {
	return 1000 * milliseconds;
}

function wait(duration) {
	return new Promise((resolve) => {
		setTimeout(resolve, duration);
	});
}

export default App;
