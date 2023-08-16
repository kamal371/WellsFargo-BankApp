import ReactState, {useState,useEffect} from "react";

const App=()=>{
const [posts, setPosts] = useState([]);

const getData = () => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("http://localhost:3030/posts", requestOptions)
    .then((response) => response.json())
    .then((result) => setPosts(result))
    .catch((error) => console.log("error", error));
};

useEffect(() => {
  getData();
}, []);

return (
  <div>
    {posts.map((post) => (
      <div key={post.username}>
        <h3>
          <span>{post.username}</span> {post.password}
        </h3>

      </div>
    ))}
  </div>
);
};

export default App;