import './List.css';
import btc from '../../../../assets/btc.png';
import bnb from '../../../../assets/bnb.png';
import etc from '../../../../assets/etc.png';
import eth from '../../../../assets/eth.png';
import ltc from '../../../../assets/ltc.png';
import sol from '../../../../assets/sol.png';
import ton from '../../../../assets/ton.png';
import trx from '../../../../assets/trx.png';
import xrp from '../../../../assets/xrp.png';
import usdt from '../../../../assets/usdt.png';
import { useNavigate } from 'react-router-dom';

const List = (props) => {
    const navigate = useNavigate();

    const {} = props


    const handleNavigateToken = (token) => {
        navigate('/detail', {state: {token}})
    }


    const blocksInfo = [
        {icon: usdt, tokenName: 'Tether USDT', shortName: 'USDT', balance: 0, balancePrice: '$0.00', tokenPrice: '$0.00' ,badgeColor: '#26A17B'},
        {icon: ton, tokenName: 'Toncoin', shortName: 'TON', balance: 0, balancePrice: '$0.00', tokenPrice: '$0.00' ,badgeColor: '#0088CC'},
        {icon: eth, tokenName: 'Ethereum', shortName: 'ETH', balance: 0, balancePrice: '$0.00', tokenPrice: '$0.00' ,badgeColor: '#627EEA'},
        {icon: sol, tokenName: 'Solana', shortName: 'SOL', balance: 0, balancePrice: '$0.00', tokenPrice: '$0.00' ,badgeColor: '#9945FF'},
        {icon: btc, tokenName: 'Bitcoin', shortName: 'BTC', balance: 0, balancePrice: '$0.00', tokenPrice: '$0.00' ,badgeColor: '#F7931A'},
        {icon: ltc, tokenName: 'Litecoin', shortName: 'LTC', balance: 0, balancePrice: '$0.00', tokenPrice: '$0.00' ,badgeColor: '#345D9D'},
        {icon: bnb, tokenName: 'Binance Coin', shortName: 'BNB', balance: 0, balancePrice: '$0.00', tokenPrice: '$0.00' ,badgeColor: '#F3BA2F'},
        {icon: etc, tokenName: 'Ethereum Classic', shortName: 'ETC', balance: 0, balancePrice: '$0.00', tokenPrice: '$0.00' ,badgeColor: '#33FF99'},
        {icon: trx, tokenName: 'Tron', shortName: 'TRX', balance: 0, balancePrice: '$0.00', tokenPrice: '$0.00' ,badgeColor: '#FF0013'},
        {icon: xrp, tokenName: 'Ripple', shortName: 'XRP', balance: 0, balancePrice: '$0.00', tokenPrice: '$0.00' ,badgeColor: '#23292F'}
    ]

    return (
        <div className='list-section'>
            {blocksInfo.slice(0, 10).map((token, index) => (
                <div key={index} className='block' onClick={() => handleNavigateToken(token)}  style={{ backgroundColor: token.bgColor }}>
                    <div className='img-and-tokenname-section'>
                        <div className='img-section'>
                            <img src={token.icon} alt={token.tokenName} className='img' />
                        </div>
                        <div className='tokenname-and-shortname-section'>
                            <div className='tokenname'>{token.tokenName}</div>
                            <div className='shortname'>{token.shortName}</div>
                            <div className='tokenprice'>{token.tokenPrice}</div>
                        </div>
                    </div>
                    <div className='balance-and-balanceprice'>
                            <div className='tokenbalance'>{token.balance}</div>
                            <div className='balanceprice'>{token.balancePrice}</div>
                            <div className='badge' style={{ backgroundColor: token.badgeColor }}>{token.shortName}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default List;