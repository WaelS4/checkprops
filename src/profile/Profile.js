import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'react-bootstrap';

const Profile = ({ bio, profession, fullName, handleName }, props) => {
    return (
        <div >
            <h1>{fullName}</h1>
            <h4>{profession}</h4>
            <p> {bio}</p>
            <Button onClick={() => { handleName(fullName) }}>Show</Button>

        </div>
    )
}

export default Profile

Profile.propTypes = {
    bio: PropTypes.object,
    handleName: PropTypes.func
}