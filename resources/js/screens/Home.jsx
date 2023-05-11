import { Link } from "react-router-dom";

export default function Home()
{
    return (
        <h2>Welcome to the home page. <Link to="/contact" className="btn btn-outline-primary">Contact us!</Link></h2>
    );
}
