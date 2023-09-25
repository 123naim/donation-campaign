import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex gap-5 w-full h-screen justify-center items-center">
            <h2>Oppos !!!</h2>
            <Link to={'/'}><button className="btn">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;