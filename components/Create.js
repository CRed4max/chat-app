import React, { useEffect, useState } from 'react'
import app from './firebase';
import {Link} from 'react-router-dom';
import { getDatabase, ref, onValue, set} from "firebase/database";
import { useHistory } from 'react-router-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { getAuth } from "firebase/auth";
import "../style/create.css";



export const Create = () => {
    const auth = getAuth();
    const { uid, photoURL } = auth.currentUser;
    const db = getDatabase();
    const history = useHistory();
    const [groupName, setgroupName] = useState('');
    const [password, setpassword] = useState('');
    const [gid, setgid] = useState('');
    useEffect(() => {
        const user = auth.currentUser;
        // setgid(roomKey.substring(3,7));
    }, [])
    const changeGroupName=(e)=>{
        // console.log(e.target.value);
        setgroupName(e.target.value);
    }
    const changePassword=(e)=>{
        // console.log(e.target.value);
        setpassword(e.target.value);
    }
    const submitted = (e)=>{
        e.preventDefault();
        if(!password || !groupName)
        alert("Please provide both entries !!");
        else
        {
            // console.log(app);
            const user = auth.currentUser;
            // console.log(user);
            const date = new Date();
            const encDate = btoa(date);
            const roomKey = user.uid + encDate;
            console.log(roomKey);
            const dbref = ref(db,'rooms/'+roomKey);
            set(dbref,{groupName:groupName,password:password});
            history.push('/about/'+roomKey);
        }
    }
    return (
        <div className='create'>

        <header>
            <h1>⚛️🔥💬</h1>
            <h1><img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} /></h1>
            <Link to='/'>
                <button className="sign-out" onClick={()=>auth.signOut()}>Sign Out</button>
            </Link>
        </header>

      <section>
            <form onSubmit={submitted}>
                <input type="text" value={gid}></input><br></br>
                <input type="text" value={groupName} onChange={changeGroupName} placeholder='Enter Group Name'></input>
                <br/>
                <input type="password" value={password} onChange={changePassword} placeholder='Enter Group Password'></input>
                <br/><br/>
                <button type="submit" className='submit'>Create Group</button>
                <br/>
            </form>
      </section>

        </div>
    )
}
