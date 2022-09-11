import React from 'react';
import Profile from './Profile';
import { useGlobalContext } from '../context';
import './profilelist.css';
import {
    Container,

} from "@mui/material";
const ProfileList = () => {
  const { githubdetails } = useGlobalContext();

  return (
    <Container className="container">
      <h2 className="header">Most Starred Repos</h2>
      <div className="row-container">
      {githubdetails.map((profile) => {
          return <Profile key={profile.id} {...profile} />;
        })}
      </div>
    </Container>
  );
};

export default ProfileList;