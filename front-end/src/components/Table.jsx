import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { FaTrashAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const TableContainer = styled.table`
  width: 95%;
  margin: auto;
  border-collapse:collapse;
`;

export const TBody = styled.tbody``;

export const Link = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1em;
  & p {
    padding-left: 1em;
    word-break: break-word;
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

export const Table = ({ posts, onClickDelete }) => {
  const content = posts.map((post) => (
    <Row key={post.id}>
      <TitleColumn>
        <Link href={post.url} rel="noreferrer" target="_blank">
          <p>
            {post.storyTitle || post.title}
            {' '}
            <span>
              -
              {post.author}
              {' '}
              -
            </span>
          </p>
        </Link>
      </TitleColumn>
      <DateColumn>{moment(post.date).fromNow()}</DateColumn>
      <DeleteColumn><div><FaTrashAlt onClick={() => onClickDelete(post.id)} /></div></DeleteColumn>
    </Row>
  ));

  return (
    <TableContainer>
      <TBody>
        {content}
      </TBody>
    </TableContainer>
  );
};

Table.propTypes = {
  posts: PropTypes.arrayOf({
    id: PropTypes.number,
    url: PropTypes.string,
    storyTitle: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
