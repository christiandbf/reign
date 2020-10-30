import styled from 'styled-components';
import moment from 'moment';
import { FaTrashAlt } from 'react-icons/fa';
import { getPosts, deletePost } from '../api';
import React, { useState, useEffect } from 'react';

export const Table = styled.table`
	width: 95%;
	margin: 0% 0% 0% 2%;
	border-collapse:collapse
`;

export const TBody = styled.tbody``;

export const Link = styled.a`
	text-decoration: none;
	color: #333;
	font-size: 1em;
	& p {
		padding-left: 1em;
	}
	& p span {
		color: #999;
	}
`;

export const TitleColumn = styled.td`
	width: 70%;
`;

export const DateColumn = styled.td`
	width: 20%;
`;

export const DeleteColumn = styled.td`
	width: 10%;
	text-align: center;
	& div {
		cursor: pointer;
		visibility: hidden;
	}
`;

export const Row = styled.tr`
	margin:0 auto;
	background-color: #fff;
	& td {
		border-bottom: 1px solid black;
		padding: 0;
		margin: 0;
	}
	&:hover {
		background-color: #fafafa;
	}
	&:hover ${DeleteColumn} div {
		visibility: visible;
	}
`;

export const Post = () => {
  const [posts, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPosts();
      setData(response);
    }
    fetchData();
  }, []);

  const content = posts.map(post =>
    <Row key={post.id}>
      <TitleColumn>
        <Link href={post.url} rel="noreferrer" target="_blank">
          <p>{post.title || post.storyTitle} <span>- {post.author} -</span></p>
        </Link>
      </TitleColumn>
      <DateColumn>{moment(post.date).fromNow()}</DateColumn>
      <DeleteColumn><div><FaTrashAlt onClick={() => deletePost(post.id)} /></div></DeleteColumn>
    </Row>
  );

  return (
    <Table>
      <TBody>
        {content}
      </TBody>
    </Table>
  );
};

export default Post;
