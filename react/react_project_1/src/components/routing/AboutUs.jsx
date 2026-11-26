import { Link } from "react-router";
import { useNavigate } from 'react-router';

export default function AboutUs() {
    const navigate = useNavigate();
    const doSomethingAndGoToHome = () => {
        console.log('Execute Some Logic....');
        navigate('/home')
    }
    return <>
        <h3>This is Aboutus Component</h3>

        <p><a href="/home">Go To Home</a></p>
        <p><Link to="/home">Go To Home</Link></p>

        <p>
            <button className="btn btn-primary" onClick={doSomethingAndGoToHome}>Do something & Go To Home</button>
        </p>

        <button onClick={() => navigate(-1)}>Go Back</button>
        <button onClick={() => navigate(1)}>Go Next</button>
    </>
}
