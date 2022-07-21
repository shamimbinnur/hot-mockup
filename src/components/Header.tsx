import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={{margin: "2rem"}}>
      <Link
            style={{ display: "inline", margin: "1rem 1rem" }}
            to="/"
            key={0}
          >
            This week
      </Link>
      <Link
            style={{ display: "inline", margin: "1rem 1rem" }}
            to="/votes"
            key={0}
          >
            My votes
      </Link>
    </div>
  )
}

export default Header