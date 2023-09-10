import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Community from './pages/Community/Community';
import Post from './pages/Community/Post';
import MyPage from './pages/MyPage/MyPage';
import MyPageEditing from './pages/MyPage/MyPageEditing';
import Payment from './pages/Payment/Payment';
import PersonalTraining from './pages/PersonalTraining/PersonalTraining';
import PostDetail from './pages/Community/PostDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/post" element={<Post />} />
        <Route path="/community/postdetail/:id" element={<PostDetail />} />

        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage-editing" element={<MyPageEditing />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/personal-training" element={<PersonalTraining />} />
      </Routes>
      <Nav />
    </BrowserRouter>
  );
};

export default Router;
