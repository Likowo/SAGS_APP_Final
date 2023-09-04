import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from './utilities/users-service';
// pages
import AuthPage from './pages/AuthPage/AuthPage';
import ServicesPage from './pages/AllServicesPage/ServicesPage';
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
// components
import HomePage from './pages/HomePage/Home'
import NavBar from './components/NavBar/NavBar';
import Create from './components/CreateNewServiceForm/CreateForm';
import ReadServiceInfor from './components/ReadServiceInfor/ReadServiceInfor';
// css //TODO: 
import './App.css';


function App() {
  // array destructuring
  const [user, setUser] = useState(getUser());

  return (
    <main className='App'>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/home' element={<ServicesPage />} />
            <Route path='/authpage' element={ <AuthPage setUser={setUser} />} />
            <Route path='/add' element={ <Create />} />
            {/* <Route path='/edit/:id' element={ <Edit/>} /> */}
            <Route path='/read/:id' element={ <ReadServiceInfor />} />

          </Routes>
        </>
      ) : (
        <>
         <NavBar user={user} setUser={setUser} />          
         <AuthPage setUser={setUser} />       
        </>      
      )}     
    </main>
  );
}

export default App;






///////////////////////////////
{/* <main className='App'>
{user ? (
  <>
    <NavBar user={user} setUser={setUser} />
    <Routes>
      <Route path='/orders/new' element={<NewOrderPage />} />
      <Route path='/orders' element={<OrderHistoryPage />} />
    </Routes>
  </>
) : (
  <AuthPage setUser={setUser} />
)}
</main> */}
