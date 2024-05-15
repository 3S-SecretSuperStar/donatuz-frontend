import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './pages/singin';
import SignUp from './pages/singup';

function App() {
  return (
    <div className='bg-custom-bg text-white'>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
