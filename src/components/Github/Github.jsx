import React, { use } from 'react'
import { useEffect,useState } from 'react'

const Github = () => {

    const [userData,setUserData]=useState([]);

useEffect(()=>{
    fetch("https://api.github.com/users/dharmendrarathva")
    .then(response=>response.json())
    .then(data=>{
        console.log(data)   
        setUserData(data);
        
    })
  },[])

  return (
    <section className="display-flex flex-col items-center justify-center gap-8 mt-20">

        <div className='min-h-screen flex items-center justify-center bg-neutral-900 text-amber-50 text-6xl'>
    <span className="text-3xl width-[600px] font-bold mb-4 bg-neutral-800 p-6 rounded-lg shadow-lg">
        Github <br /><br />
         Followers : {userData.followers}  <br /><br />
        Following : {userData.following}
    </span>   
        </div>
        <div className='min-h-screen flex items-center justify-center bg-neutral-900 text-amber-50 text-6xl'>
            <img src={userData.avatar_url} alt="User Avatar" width="200" height="200"/>
        </div>
    </section>

  )
}

export default Github