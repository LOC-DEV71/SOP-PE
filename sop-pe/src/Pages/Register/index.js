import { Link } from "react-router";
import '../Login/index.scss';
function Register(){
    return(
        <>
            <div className='goHome'>
                <Link to={"/"}>
                    Go Home
                </Link>
            </div>
            <div className="login">
                <video autoPlay loop muted className='login__video'>
                    <source src="/6944326804742.mp4" type="video/mp4" />
                </video>
                <form className="login__form">
                    <h2>Register</h2>
                    <div className="login__form-input">
                    <input
                        type="text"
                        placeholder="User Name"
                        required
                    
                    />
                    <input
                        type="password"
                        placeholder="PassWord"
                        required
                
                    />
                    </div>
                    <button type="submit" className="login__form-submit">
                    Đăng Nhập
                    </button>
                </form>
            </div>
        </>
    )
}

export default Register;