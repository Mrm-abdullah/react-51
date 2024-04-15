import { Link , useNavigate} from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Login = () => {
    const {signInUser} = useContext(AuthContext)


    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()
    const handleLoginForm = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        console.log(form);
        console.log(form.get('password'));

        setError('')
        setSuccess('')
        
        signInUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user)
                setSuccess('User Successfully login')
                e.target.reset()
                navigate('/')
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage)
            });
    }
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse my-8">

                <div className="card shrink-0 w-full shadow-2xl bg-base-100 py-8">
                    <form onSubmit={handleLoginForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center ">Are you new? <Link to='/register'>Register</Link> </p>


                    {
                        success && <><p className="text-green-700">{success}</p></>
                    }

                    {
                        error && <><p className="text-red-600">{error}</p></>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;