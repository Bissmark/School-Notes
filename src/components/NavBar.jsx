import { Link } from 'react-router-dom';
import { AiFillAliwangwang } from 'react-icons/ai';
import * as userService from '../utilities/users-service';
import './NavBar.css';
import SearchBar from './SearchBar';

export default function NavBar({ user, setUser, setSearchQuery }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <SearchBar setSearchQuery={setSearchQuery} />
      <Link className='link' to="/tasks">
        <AiFillAliwangwang />
        <span className='tooltiptext'>Tasks</span>
      </Link>
      <Link className='link' to="/tasks/new">
        <AiFillAliwangwang />
        <span className='tooltiptext'>New Task</span>
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