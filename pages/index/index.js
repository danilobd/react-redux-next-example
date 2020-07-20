import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { allPostsReference } from "../../features/post/postSlice";

const Posts = ({ posts }) => {

  if (!posts.length)
    return (
      <div className="nocontent">
        <span>Post something to see here</span>
      </div>
    )

  return posts.map((post, key) => {
    return (
      <div key={key} className="post">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
  });

};

export default function index() {

  const posts    = useSelector(allPostsReference);

  return (
    <div className="conteiner">

      <div className="postsArea">

        <Posts posts={posts} />

      </div>

    </div>
  )
}
