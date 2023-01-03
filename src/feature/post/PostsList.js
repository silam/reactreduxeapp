import { useSelector, useDispatch} from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";


function PostsList() {

    const posts = useSelector(selectAllPosts);

    // create a shallow copy of the posts list

    const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date));

    const renderPosts = orderedPosts.map(post=> (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <p className="postCredit">
              <PostAuthor userId={post.userId}></PostAuthor>
              <TimeAgo timestamp={post.date}></TimeAgo>
            </p>
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