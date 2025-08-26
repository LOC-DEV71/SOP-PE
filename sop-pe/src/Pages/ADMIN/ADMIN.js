import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import {Link} from 'react-router';
import './ADMIN.scss';
function Admin(){
     const { currentUser } = useContext(AuthContext);
        // console.log(currentUser);
        if (!currentUser) return <p>Đang tải thông tin...</p>;
    return (
        
        <>
        <div className="infor">
            <video loop muted autoPlay className='infor__background'>
                <source src="/6944326804742.mp4" type="video/mp4" />
            </video>
            <div className='infor__user'>
                <div className='infor__user-img'>
                    <img src={currentUser.image} alt='avata'/>
                </div>
                <div className="infor__user-name">
                    <p><span>UserName:</span> {currentUser.username}</p>
                </div>
                <div className="infor__user-detail">
                    <p><span>Full Name:</span> Lam Chi Loc</p>
                    <p><span>Email: </span> {currentUser.email}</p>
                    <p><span>Phone: </span> {currentUser.phone}</p>
                    <p><span>Role: </span> {currentUser.role}</p>
                </div>
            </div>

            <div className='infor__gohome'>
                <Link to={"/"}>Go Home</Link>
            </div>
        </div>
        </>
    )
}

export default Admin;