import './Header.css';
import { IoSettingsOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

function Header (userData) {

    return (
        <div className="header-display">
            <div className="user-info-section">
                <div className="user-logo">
                    <div className="logo">
                        <FiUser className="user-icon" />
                    </div>
                </div>
                <div className="user-name">
                    <span className="name">
                        {userData?.username}
                    </span>
                </div>
            </div>
            <div className="selector-settings-section">
                <div className="selector-to-change-net">
                    <select className='selector'>
                        <option value="mainnet">MAINNET</option>
                        <option value="testnet">TESTNET</option>
                    </select>
                </div>
                <div className="settings">
                    <button className='settings-button'>
                        <IoSettingsOutline className="settings-icon" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;