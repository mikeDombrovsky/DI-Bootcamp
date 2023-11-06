const PostList = ({ posts }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hi this is a title</h1>
      {posts.map(({ title, content }) => {
        return (
          <div>
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
