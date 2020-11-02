const { REACT_APP_API_URL } = process.env;

export const getPosts = async () => {
  const uri = `${REACT_APP_API_URL}/posts`;
  const response = await fetch(uri);
  return response.json();
};

export const deletePost = async (id) => {
  const uri = `${REACT_APP_API_URL}/posts/${id}`;
  const response = await fetch(uri, { method: 'DELETE' });
  return response.json();
};
