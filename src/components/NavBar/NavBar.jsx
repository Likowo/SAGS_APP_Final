import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'
import AuthPage from '../../pages/AuthPage/AuthPage';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();

    setUser(null);
  }

  //TODO:
  function handleAuthPage() {
    userService.authPage();

    setUser(null);
  }

  return (
    <nav className='navBar'>
      <p className='logoo'>
      <img src="https://images.unsplash.com/photo-1516383607781-913a19294fd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGVkdWNhdGlvbiUyMGFuZCUyMGVudGVydGFpbm1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" className='logoImg' alt="logo" />
      <span id='CompName'>Sparkle Access Global Services <br /> (SAGS)</span>
      </p>
    
      <Link to='/'></Link>
      &nbsp; | &nbsp;
      <Link to='/home' className='navBarLinks' >HOME</Link>
      &nbsp; | &nbsp;
      <Link to='/authpage' onClick={handleAuthPage} className='navBarLinks' >LOG IN or SIGN UP</Link>
      &nbsp;|| &nbsp;
      { user  ? <span>Welcome, {user.name}</span> : ""}
      &nbsp; || &nbsp;
      <Link to='' onClick={handleLogOut} className='navBarLinks' > 
        LOG OUT
      </Link>
    </nav>
  );
}
