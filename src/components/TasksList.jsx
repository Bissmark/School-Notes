import { useState } from 'react';
import './TasksList.css';
import { Link } from 'react-router-dom';

export default function TasksList ({tasks}) {
    const [reverse, setReverse] = useState(false);

    if (tasks.length === 0) {
        return <p>No tasks yet!</p>
    }

    const tasksList = tasks.map(t => (
        <div key={t._id} className='task'>
            <ul>
                <Link to={t._id}><li>{ t.name }</li></Link>
            </ul>
        </div>
    ));
    
    return (
        <div>
            {/* <button onClick={ () => setReverse(!reverse) }>
                ▲ | ▼ 
            </button> */}
            {
                reverse ? tasksList.reverse() : tasksList
            }
        </div>
    )
}