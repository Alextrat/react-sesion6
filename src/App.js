import { Route, Routes } from 'react-router-dom';
import NavigationComponent from './components/NavigationComponent/NavigationComponent'
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import SinglePostPage from './pages/SinglePostPage';
import ProfilePage from './pages/ProfilePage'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function App() {
  const {user} = useSelector((state)=>state.AuthReducer)
  return (
    <div className="App">
      <NavigationComponent></NavigationComponent>
      <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>
        <Route exact path="/posts" element={<PostsPage/>}></Route>
        <Route exact path="/about" element={<AboutPage/>}></Route>
        <Route exact path="/login" element={<LoginPage/>}></Route>
        <Route exact path="/post/:id" element={<SinglePostPage/>}></Route>
        <Route exact path="/profile" element={user && user.id?<ProfilePage/>:<Navigate to="/login" replace/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
