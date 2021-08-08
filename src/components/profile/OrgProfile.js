import React from 'react';
import { useState } from 'react';
import ViewOrgProfile from './viewProfile/ViewOrgProfile';
import EditOrgProfile from './editProfile/EditOrgProfile';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOrgProfile } from './getUserProfile';

const OrgProfile = () => {
    const [isEditMode, setEditMode] = useState(false);
    const [org, setOrg] = useState('');

    const toggleEditMode = () => {
        setEditMode((isEditMode) => !isEditMode);
    };

    const {
        userInfo: { access, id },
    } = useSelector((state) => state.userLogin);

    useEffect(() => {
        getOrgProfile(setOrg, access, id);
    }, [setOrg, access, id]);

    console.log(org);

    if (isEditMode) {
        return (
            <EditOrgProfile
                org={org}
                setOrg={setOrg}
                toggleEditMode={toggleEditMode}
            />
        );
    } else {
        return <ViewOrgProfile org={org} toggleEditMode={toggleEditMode} />;
    }
};

export default OrgProfile;
