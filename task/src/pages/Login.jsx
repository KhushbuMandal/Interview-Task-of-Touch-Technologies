import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
    const data = {
        name: "Khushbu",
        age: 22,
    };

  return (
    <>
    <h1>The data is stored in State and can be seen in About Page</h1>
    <Link to="/about" state={{ data }}>Go to About Page</Link>
    </>
  )
}

export default Login