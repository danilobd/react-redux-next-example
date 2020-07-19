import React from 'react';

var posts = [
  {
    title: "Titulo do post 1",
    content: "Conteúdo do post 1",
  },
  {
    title: "Titulo do post 2",
    content: "Conteúdo do post 2",
  }
];

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
  return (
    <div className="conteiner">

      <div className="postsArea">

        <Posts posts={posts} />

      </div>

    </div>
  )
}
