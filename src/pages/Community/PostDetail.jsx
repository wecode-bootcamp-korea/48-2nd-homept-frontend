import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostNav from './components/PostNav';
import PostDetailBox from './components/PostDetailBox';
import PostUser from './components/PostUser';
import PostTrainer from './components/PostTrainer';
import './PostDetail.scss';

const PostDetail = () => {
  const [communityData, setCommunityData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch('/data/communityData.json')
      .then(response => response.json())
      .then(data => setCommunityData(data));
  }, []);

  const post = communityData.find(post => post.id === parseInt(id, 10));

  return (
    <div className="postDetail">
      <div className="container">
        <PostNav text="   " />
        {post ? <PostDetailBox post={post} /> : <p>Loading...</p>}
        {post && post.buttonStyle === 'coaching' ? (
          <PostTrainer />
        ) : (
          <PostUser />
        )}
      </div>
    </div>
  );
};

export default PostDetail;
