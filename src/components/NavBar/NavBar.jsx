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
      <img src="" className='logoImg' alt="logo" />
      <Link to='/'></Link>
      &nbsp; | &nbsp;
      <Link to='/home'>HOME</Link>
      &nbsp; | &nbsp;
      <Link to='/authpage' onClick={handleAuthPage}>LOG IN OR SIGN UP</Link>
      &nbsp;|| &nbsp;
      { user  ? <span>Welcome, {user.name}</span> : ""}
      &nbsp; || &nbsp;
      <Link to='' onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
