import React from 'react'
import app from './firebase';
import { getDatabase, ref, onValue, set} from "firebase/database";
import { useHistory } from 'react-router-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';



export const Create = () => {
    const db = getDatabase();
    const history = useHistory();

    const [groupName, setgroupName] = useState('');
    const [password, setpassword] = useState('');

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
        alert("bsdk empty hin rakhega kya !!");
        else
        {
            // console.log(app);
            
            const dbref = ref(db,'rooms/');
            set(dbref,{groupName:groupName,password:password});
            history.push()
        }
    }
    return (
        <div>
            <form onSubmit={submitted}>
                <input type="text" value={groupName} onChange={changeGroupName}></input>
                <br/>
                <input type="password" value={password} onChange={changePassword}></input>
                <br/>
                <button type="submit"></button>
                <br/>
            </form>
        </div>
    )
}
