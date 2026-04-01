import  { useState } from 'react';
import Header from "../../views/Header/Header";
import Menu from "../../views/Menu/Menu";
import './Swap.css';

// Импорт иконок
import btc from '../../assets/btc.png';
import bnb from '../../assets/bnb.png';
import etc from '../../assets/etc.png';
import eth from '../../assets/eth.png';
import ltc from '../../assets/ltc.png';
import sol from '../../assets/sol.png';
import ton from '../../assets/ton.png';
import trx from '../../assets/trx.png';
import xrp from '../../assets/xrp.png';
import usdt from '../../assets/usdt.png';

const tokens = [
  { icon: usdt, name: 'USDT', shortName: 'USDT' },
  { icon: ton, name: 'Toncoin', shortName: 'TON' },
  { icon: eth, name: 'Ethereum', shortName: 'ETH' },
  { icon: sol, name: 'Solana', shortName: 'SOL' },
  { icon: btc, name: 'Bitcoin', shortName: 'BTC' },
  { icon: ltc, name: 'Litecoin', shortName: 'LTC' },
  { icon: bnb, name: 'Binance Coin', shortName: 'BNB' },
  { icon: etc, name: 'Ethereum Classic', shortName: 'ETC' },
  { icon: trx, name: 'Tron', shortName: 'TRX' },
  { icon: xrp, name: 'Ripple', shortName: 'XRP' }
];

function TokenSelector({ tokens, selectedToken, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="custom-select">
      <div className="select-selected" onClick={() => setIsOpen(!isOpen)}>
        <img src={selectedToken.icon} alt={selectedToken.shortName} className="token-icon" />
        <span>{selectedToken.shortName}</span>
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <ul className="select-options">
          {tokens.map((token) => (
            <li
              key={token.shortName}
              onClick={() => {
                onSelect(token);
                setIsOpen(false);
              }}
              className={token.shortName === selectedToken.shortName ? 'selected' : ''}
            >
              <img src={token.icon} alt={token.shortName} className="token-icon" />
              <span>{token.shortName}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Swap() {
  const [selectedPayToken, setSelectedPayToken] = useState(tokens[1]); // TON
  const [selectedGetToken, setSelectedGetToken] = useState(tokens[0]); // USDT

  return (
    <>
      <Header />
      <div className="swap-section">
        {/* You Pay */}
        <div className="pay-section">
          <div className="left-section">
            <div className="section-text">You Pay</div>
            <div className="amount">0</div>
            <div className="amount-price">$0.00</div>
          </div>
          <div className="right-section">
            <div className="token-balance">Balance: 0 <span className='name-token'>{selectedPayToken.shortName}</span></div>
            <div className="token-selector">
              <TokenSelector
                tokens={tokens}
                selectedToken={selectedPayToken}
                onSelect={setSelectedPayToken}
              />
            </div>
            <div className="amount-buttons">
              <button>50%</button>
              <button>MAX</button>
            </div>
          </div>
        </div>

        {/* You Get */}
        <div className="get-section">
          <div className="left-section">
            <div className="section-text">You Get</div>
            <div className="amount">0</div>
            <div className="amount-price">$0.00</div>
          </div>
          <div className="right-section">
            <div className="token-selector">
              <TokenSelector
                tokens={tokens}
                selectedToken={selectedGetToken}
                onSelect={setSelectedGetToken}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="button-swap-section">
        <button className="swap-button">Swap</button>
      </div>
      <Menu />
    </>
  );
}

export default Swap;