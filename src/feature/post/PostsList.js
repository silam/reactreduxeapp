import { useSelector, useDispatch} from "react-redux";
import { selectAllPosts } from "./postSlice";

function PostsList() {

    const posts = useSelector(selectAllPosts);

    const renderPosts = posts.map(post=> (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
        </article>
    ))



  return (
    <section>
        <h2>Posts</h2>
        {renderPosts}
    </section>
  )
}

export default PostsList