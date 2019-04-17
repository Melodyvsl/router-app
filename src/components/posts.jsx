import React from 'react';
import queryString from 'query-string';

const Posts = ({ match, location }) => {
  const result = queryString.parse(location.search); // this gives us a obj with properties based on parametrs in query strin pramater
  console.log(result);
  return (
    <div>
      <h1>Posts</h1>
      Year: {match.params.year}, Month:{match.params.month}
    </div>
  );
};

export default Posts;
