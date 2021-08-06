import React from 'react';
import { useState } from 'react';
import ViewOrgProfile from './viewProfile/ViewOrgProfile';
import EditOrgProfile from './editProfile/EditOrgProfile';

const OrgProfile = () => {
    const [isEditMode, setEditMode] = useState(false);
    const toggleEditMode = ()=> {
        setEditMode(isEditMode=>!isEditMode)
    }
    if (isEditMode){
        return(
            <EditOrgProfile />
        )
    }
    else{
        return(
            <ViewOrgProfile 
            toggleEditMode={toggleEditMode}
            />
        )
    }
}

export default OrgProfile;