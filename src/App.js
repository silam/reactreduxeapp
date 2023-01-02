import logo from './logo.svg';
import './App.css';
import Counter from './feature/counter/Counter';
import PostsList from './feature/post/PostsList';
import AddPostForm from './feature/post/AddPostForm';

function App() {
  return (
    <div className="App">
      <main className='App'>
        {/* <Counter></Counter> */}
        <AddPostForm></AddPostForm>
        <PostsList></PostsList>
      </main>
    </div>
  );
}

export default App;
