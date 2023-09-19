import { useEffect, useState } from 'react';
import './TasksList.css';
import { Link } from 'react-router-dom';

export default function TasksList ({searchQuery, category}) {
    const [reverse, setReverse] = useState(false);
    const [loading, setLoading] = useState(false);
    
    // console.log(category)
    // if (category.length === 0) {
    //     return <p>No tasks yet!</p>
    // }

    useEffect(() => {
        setLoading(true);
    }, []);

    useEffect(() => {
    category.tasks.map((t) => {
        return (
        <div key={t._id} className='task'>
            <ul>
                <Link to={`/tasks/${t._id}`}><li>{ t.name }</li></Link>
            </ul>
        </div>
        )
    })
    });
    
    // return ( loading ?
    //     <p>Loading...</p>
    //     :
    //     <div>
    //         {/* <button onClick={ () => setReverse(!reverse) }>
    //             ▲ | ▼ 
    //         </button> */}
    //         {
    //             reverse ? tasksList.reverse() : tasksList
    //         }
    //     </div>        
    // )
}

//.filter((task) => 
        //task.name.toLowerCase().includes(searchQuery.toLowerCase()))