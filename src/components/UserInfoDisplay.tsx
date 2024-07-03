import React from 'react';
import { UserInfoProps } from '../interface/UserInfo';

const UserInfoDisplay: React.FC<UserInfoProps> = ({ userName, age, email }) => {
  return (
    <div>
      <h2>User Information</h2>
      <p><strong>Name:</strong> {userName}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

export default UserInfoDisplay;
