import React from 'react'
import {useState} from 'react';
import app from './firebase';
import { getDatabase, ref, onValue} from "firebase/database";
import { useHistory } from 'react-router-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

export const Join = () => {
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
            onValue(dbref,(snapshot)=>{
                const data = snapshot.val();
                // console.log(data);
                const len = Object.keys(data).length;
                // console.log(len);
                Object.keys(data).map((id)=>{
                    // console.log(data[id].groupName,data[id].password,groupName,password);
                    if(data[id].groupName === groupName && data[id].password === password)
                    {
                        console.log("matched");
                        history.push('/about/'+id);
                    }
                })
            },{
                onlyOnce : true
            })
        }
    }
    return (
        <div>
            {/* jkdwdkfejw */}
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
