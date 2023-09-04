import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <Link className="navbar-brand text-white" style={{ fontFamily: 'courier, arial, helvetica' }} to="/"><b>Zuhot</b></Link>
                </div>
            </nav>
        </>
    )
}
export default Navbar;