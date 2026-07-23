import { Link, NavLink } from "react-router";

export const Navbar = () => {

  return (
    <div>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
    </div>
  )
}
