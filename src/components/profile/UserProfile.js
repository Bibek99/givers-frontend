import React from 'react';
import { useState } from 'react';
import ViewUserProfile from './viewProfile/ViewUserProfile';
import EditUserProfile from './editProfile/EditUserProfile';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserProfile } from './getUserProfile';

const UserProfile = () => {
    const [isEditMode, setEditMode] = useState(false);
    const [user, setUser] = useState('');

    const toggleEditMode = () => {
        setEditMode((isEditMode) => !isEditMode);
    };

    const {
        userInfo: { access, id },
    } = useSelector((state) => state.userLogin);

    useEffect(() => {
        getUserProfile(setUser, access, id);
    }, [setUser, access, id]);

    if (isEditMode) {
        return (
            <EditUserProfile
                user={user}
                setUser={setUser}
                access={access}
                id={id}
                toggleEditMode={toggleEditMode}
            />
        );
    } else {
        return <ViewUserProfile user={user} toggleEditMode={toggleEditMode} />;
    }
};

export default UserProfile;
