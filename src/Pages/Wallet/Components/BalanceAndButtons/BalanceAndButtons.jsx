import './BalanceAndButtons.css';
import { MdSecurity } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const BalanceAndButtons = () => {
    const navigate = useNavigate();

    const handleClickNavigateSeed = () => {
        navigate('/seed');
    }
    
    return (
        <>
            <div className="total-balance-section">
                <div className="balance-section">
                    <div className="balance-text">Total Balance</div>
                    <div className="balance">$42,231.10</div>
                </div>
            </div>

            <div className='security-section' onClick={handleClickNavigateSeed}>
                <div className='left-security-section'>
                    <MdSecurity className='security-icon'/>
                </div>
                <div className='middle-security-section'>
                    <div>Back Up Your Wallet</div>
                    <div>View your seed phrase to backup wallet</div>
                </div>
                <div className='right-security-section'>
                    <FaChevronRight />
                </div>
            </div>
        </>
    );
}

export default BalanceAndButtons;