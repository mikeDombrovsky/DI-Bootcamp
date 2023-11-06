const PostList = ({ posts }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hi this is a title</h1>
      {posts.map(({ title, content }, i) => {
        return (
          <div key={i}>
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
