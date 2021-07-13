import React from 'react';
import { useState } from 'react';
import ViewUserProfile from './viewProfile/ViewUserProfile';
import EditUserProfile from './editProfile/EditUserProfile';

const UserProfile = () => {
    const [isEditMode, setEditMode] = useState(false);
    const toggleEditMode = ()=> {
        setEditMode(isEditMode=>!isEditMode)
    }
    if (isEditMode){
        return(
            <EditUserProfile 
            toggleEditMode={toggleEditMode}
            />
        )
    }
    else{
        return(
            <ViewUserProfile
            toggleEditMode={toggleEditMode}
            />
        )
    }
}

export default UserProfile;