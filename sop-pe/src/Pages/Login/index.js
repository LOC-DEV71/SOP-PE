import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import './index.scss';
import { getUserName } from '../../service';
import Swal from 'sweetalert2';
import { Link } from 'react-router';


function Login() {
  const [user, setUser] = useState([]);
  const [userNameInput, setUserNameInput] = useState("");
  const [userPassInput, setUserPassInput] = useState("");
  const {login} = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      const result = await getUserName();
      setUser(result);
    };
    fetchUser();
  }, []);

//   console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = user.find(
      (u) => u.username === userNameInput && u.password === userPassInput
    );

    if (!found) {
      Swal.fire({
      icon: "error",
      text: "Incorrect username or password!",
      });
      return; // dừng xử lý nếu không tìm thấy user
    }

    login(found);

    if (found.role === "admin") {
      Swal.fire({
        title: "You are an Admin, redirecting to the admin page!",
        icon: "success",
        draggable: true
      }).then(() =>{
        window.location.href = "/admin";
      })

    } 
    else if (found.role === "member") {
      window.location.href = "/";
    } 
    else {
      Swal.fire({
      icon: "error",
      text: "Undefined role”",
      });
    }
  };


  return (
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
      <form className="login__form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="login__form-input">
          <input
            type="text"
            placeholder="User Name"
            required
            value={userNameInput}
            onChange={(e) => setUserNameInput(e.target.value)}
          />
          <input
            type="password"
            placeholder="PassWord"
            required
            value={userPassInput}
            onChange={(e) => setUserPassInput(e.target.value)}
          />
        </div>
        <button type="submit" className="login__form-submit">
          Đăng Nhập
        </button>
      </form>
    </div>
    </>
  );
}

export default Login;
