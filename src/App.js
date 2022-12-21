import './App.css';

// import Login from './login-signup/login';
import PostView from './postviewPage/post'
// import Postviewnew from './postviewnew';
import To_Routes from './to-route/to_routes';
import { BrowserRouter } from 'react-router-dom';
import Login from './login-signup/login';
import CreatePost from './createPost/addPost';

function App() {
  return (
    <div>
      {/* <BrowserRouter>
      <To_Routes/>
      </BrowserRouter> */}
      {/* <Login/> */}
     {/* <PostView/> */}
     <CreatePost/>/
     
    </div>
  );
}

export default App;
