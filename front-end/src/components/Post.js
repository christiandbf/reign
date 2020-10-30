import React, { useState, useEffect } from 'react';
import { getPosts, deletePost } from '../api';
import Table from './Table';

export const Post = () => {
	const [posts, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await getPosts();
			setData(response);
		}
		fetchData();
	}, []);

	return (
		<Table posts={posts} onClickDelete={deletePost}></Table>
	);
};

export default Post;
