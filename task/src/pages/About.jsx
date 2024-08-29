import React from 'react'
import { useLocation , Link } from 'react-router-dom';

function About() {
const location = useLocation();
  const { data } = location.state;
  return (
    <>
    <h1>About</h1>
    <p>Name: {data.name}</p>
    <p>Age: {data.age}</p>
    <Link to="/login">Go to Login Page</Link>
    </>
  )
}

export default About