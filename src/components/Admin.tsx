import React from 'react';
import User from './User';

type UserProps = React.ComponentProps<typeof User>

interface AdminProps extends UserProps {
  role: string;
}

const Admin: React.FC<AdminProps> = (props) => {
  return (
    <div>
      <span>Role: {props.role}</span>
      <User name={props.name} />
    </div>
  );
};

export default Admin;
