import React from 'react'
import { useNavigate } from 'react-router-dom';
import { isAuth, signout } from '../../../auth/Login/helpers'
import blankProfile from '../../../assets/images/blank-profile.png'
import { AiOutlineLogout } from 'react-icons/ai'

function SidebarContent({ items }) {
    let navigate = useNavigate()
    return (
        <>
            {items.map(item => (
                <li key={item.id}>
                    <a href={item.route}>
                        <i className={item.icon}></i>
                        <span className="link_name">
                            {item.name}
                        </span>
                    </a>
                    <ul className="sub-menu blank">
                        <li>
                            <a className="link_name" href={item.route}>
                                {item.name}
                            </a>
                        </li>
                    </ul>
                </li>
            ))}
            <div className="profile-details">
                <div className="profile-content">
                    <img src={blankProfile} alt="profileImg" />
                </div>
                <div className="name-job">
                    <div className="profile_name h6">
                        log out
                    </div>
                    <div className="job text-capitalize">
                        {isAuth().user_type}
                    </div>
                </div>
                <AiOutlineLogout className="text-white h2 me-4" onClick={() => {
                    signout(() => {
                        navigate('/');
                    });
                }} />
            </div>
        </>
    )
}

export default SidebarContent
