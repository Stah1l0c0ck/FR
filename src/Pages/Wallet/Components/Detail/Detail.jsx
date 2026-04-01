import './Detail.css';
import { useLocation } from 'react-router-dom';
import { GoArrowSwitch, GoArrowUpRight, GoArrowDown, GoArrowUp } from "react-icons/go";
import Header from '../../../../views/Header/Header';

function Detail() {
    const location = useLocation();
    const { token } = location.state || {};

    const buttonsData = [
        { icon: GoArrowUp, label: 'Send' },
        { icon: GoArrowDown, label: 'Receive' },
        { icon: GoArrowSwitch, label: 'Swap' },
        { icon: GoArrowUpRight, label: 'Stake' }
    ];

    // Если токен не передан
    if (!token) {
        return (
            <>
                <Header />
                <div className="error-message">Токен не найден</div>
            </>
        );
    }

    return (
        <>
            <Header />
            <div className='detail-section'>
                <div className='token-icon-section'>
                    <div className='token-png'>
                        <img src={token.icon} alt={token.tokenName} className='token-img'/>
                    </div>
                </div>
                <div className='token-info-section'>
                    <div className="balance-row">
                        <span className="balance-amount">{token.balance} {token.shortName}</span>
                        <div 
                            className='blockchain-badge' 
                            style={{ backgroundColor: token.badgeColor || '#98eb5d' }}
                        >
                            {token.shortName}
                        </div>
                    </div>
                    <div className="balance-price">{token.balancePrice}</div>
                </div>

                <div className="detail-buttons-section">
                    {buttonsData.map((button, index) => {
                        const IconComponent = button.icon;
                        return (
                            <button key={index} className="navigate-button">
                                <IconComponent className="navigate-button-icon" />
                                <span className="button-name">{button.label}</span>
                            </button>
                        );
                    })}
                </div>

                <div className='graph-section'></div>
            </div>
        </>
    );
}

export default Detail;