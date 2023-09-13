import { Link } from 'react-router-dom';
import { AiFillAliwangwang } from 'react-icons/ai';
import * as userService from '../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link className='link-1' to="/notes">
        <AiFillAliwangwang />
        <span className='tooltiptext'>Notes</span>
      </Link>
      <Link className='link-2' to="/notes/new">
        <AiFillAliwangwang />
        <span className='tooltiptext'>New Note</span>
      </Link>
      {/* <span>Welcome, {user.name}</span> */}
      <Link className='link-3' onClick={handleLogOut}>
        <AiFillAliwangwang />
        <span className='tooltiptext'>Logout</span>
      </Link>
      <Link className='link-4' to="/login">
        <AiFillAliwangwang />
        <span className='tooltiptext'>Login</span>
      </Link>
      <Link className='link-5' to="/signup">
        <AiFillAliwangwang />
        <span className='tooltiptext'>Signup</span>
      </Link>
    </nav>
  );
}