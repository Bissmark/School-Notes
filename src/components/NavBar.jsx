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
      <Link className='link' to="/notes">
        <AiFillAliwangwang />
        <span className='tooltiptext'>Notes</span>
      </Link>
      <Link className='link' to="/notes/new">
        <AiFillAliwangwang />
        <span className='tooltiptext'>New Note</span>
      </Link>
      <Link className='link' to="/categories/new">
        <AiFillAliwangwang />
        <span className='tooltiptext'>New Category</span>
      </Link>
      <Link className='link' onClick={handleLogOut}>
        <AiFillAliwangwang />
        <span className='tooltiptext'>Logout</span>
      </Link>
      <Link className='link' to="/login">
        <AiFillAliwangwang />
        <span className='tooltiptext'>Login</span>
      </Link>
      <Link className='link' to="/signup">
        <AiFillAliwangwang />
        <span className='tooltiptext'>Signup</span>
      </Link>
    </nav>
  );
}