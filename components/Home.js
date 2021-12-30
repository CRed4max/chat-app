import React from 'react'
import {Link} from 'react-router-dom';
export const Home = () => {
    return (
        <div align="center"> 
            <Link to="/join">
            <button>
                join
            </button>
            </Link>
            <hr/>
            <Link to="/create">
            <button>
                Create
            </button>
            </Link>
        </div>
    )
}
