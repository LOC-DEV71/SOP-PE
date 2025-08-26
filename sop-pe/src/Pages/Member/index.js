import { useContext } from 'react';
import './MEMBER.scss';
import { AuthContext } from '../../Context/AuthContext';

function Member() {
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser);
    if (!currentUser) return <p>Đang tải thông tin...</p>;

    return (
        <div className="infor">
            <div className='ifor__img'>
                <img src={currentUser.image} alt='avata'/>
            </div>
            <div className="infor__name">
                <p>User Name: {currentUser.username}</p>
            </div>
            <div className="infor__detail">
                {currentUser.firstName && <p>First Name: {currentUser.firstName}</p>}
                {currentUser.lastName && <p>Last Name: {currentUser.lastName}</p>}
                {currentUser.email && <p>Email: {currentUser.email}</p>}
                {currentUser.phone && <p>phone: {currentUser.phone}</p>}
                {currentUser.role && <p>Role: {currentUser.role}</p>}
            </div>
        </div>
    );
}

export default Member;
