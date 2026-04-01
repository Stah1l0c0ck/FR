import { Link, useLocation } from 'react-router-dom';
import './Menu.css';

import walletactive from '../../assets/walletactive.svg';
import walletinactive from '../../assets/walletinactive.svg';
import swapactive from '../../assets/swapactive.svg';
import swapinactive from '../../assets/swapinactive.svg';
import historyactive from '../../assets/historyactive.svg';
import historyinactive from '../../assets/historyinactive.svg';
import stakeactive from '../../assets/stakeactive.svg';
import stakeinactive from '../../assets/stakeinactive.svg';

function Menu() {
  const location = useLocation();

  const menuItems = [
    { path: '/', name: 'Wallet', activeIcon: walletactive, inactiveIcon: walletinactive },
    { path: '/swap', name: 'Swap', activeIcon: swapactive, inactiveIcon: swapinactive },
    { path: '/story', name: 'History', activeIcon: historyactive, inactiveIcon: historyinactive },
    { path: '/stake', name: 'Stake', activeIcon: stakeactive, inactiveIcon: stakeinactive }
  ];

  return (
    <div className="menu-display">
      {menuItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
        <Link to={item.path} key={item.path}>
            <div className="menu-item">
                <img
                src={isActive ? item.activeIcon : item.inactiveIcon}
                alt={item.name}
                className="menu-page-img"
                />
                <div className={`menu-page-name ${isActive ? 'active' : ''}`}>
                {item.name}
                </div>
            </div>
        </Link>
        );
      })}
    </div>
  );
}

export default Menu;