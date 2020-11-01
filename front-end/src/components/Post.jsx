import React, { useState, useEffect } from 'react';
import { getPosts, deletePost } from '../api';
import { Table } from './Table';

// eslint-disable-next-line import/prefer-default-export
export const Post = () => {
  const [posts, setData] = useState([]);

  const deletePostAndRefresh = async (id) => {
    try {
      await deletePost(id);
      const response = await getPosts();
      setData(response);
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('Sorry, but something bad happened: ', error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPosts();
        setData(response);
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('Sorry, but something bad happened: ', error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <Table posts={posts} onClickDelete={deletePostAndRefresh} />
  );
};
