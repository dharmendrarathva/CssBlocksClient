import React from 'react'
import {useContext} from 'react'

const Profile = () => {
    const {user} = useContext(UserContext);
  return (
    <div>
        <h2>Profile Component</h2>
        {user ? (
            <div>
                <p>Username: {user.username}</p>
            </div>
        ) : (
            <p>No user logged in.</p>
        )}

    </div>
  )
}

export default Profile
