import { Route, Routes } from 'react-router-dom';

import { AllUsers, CreatePost, EditPost, Explore, Home, PostDetails, Profile, Saved, UpdateProfile } from './_root/pages';
import SigninForms from './_auth/forms/signinForms';
import SignupForm from './_auth/forms/signupForm';
import AuthLayout from './_auth/authLayout';
import RootLayout from './_root/RootLayout';
import { Toaster } from './components/ui/sonner';



export default function App() {
  return (
    <main className='flex h-screen'>
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path='/sign-in' element={<SigninForms />} />
          <Route path='/sign-up' element={<SignupForm />} />
        </Route>

        <Route element={<RootLayout/>}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore/>} />
          <Route path="/saved" element={<Saved/>} />
          <Route path="/all-users" element={<AllUsers/>} />
          <Route path="/create-post" element={<CreatePost/>} />
          <Route path="/update-post/:id" element={<EditPost/>} />
          <Route path="/posts/:id" element={<PostDetails/>} />
          <Route path="/profile/:id/*" element={<Profile/>} />
          <Route path="/update-profile/:id" element={<UpdateProfile/>} />
        </Route>
      </Routes>
      <Toaster/>
    </main>
  )
}