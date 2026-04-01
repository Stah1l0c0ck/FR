import { GoArrowDownLeft } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import Empty from "../mocks/Empty";
import './List.css';

const List = ({transactions = []}) => {

    const getTypeIcon = (type) => {
        return type === "SEND" ? <GoArrowDownLeft /> : <GoArrowUpRight />;
    };
    
    const formatAddress = (address) => {
        if (!address) return "";
        return address.slice(0, 8) + "..." + address.slice(-8);
    };
    
    return (

                <div className="transactions-block-section">
                    {transactions.length === 0 ? (
                        <Empty />
                    ) : (
                        transactions.map((tx, index) => (
                            <div className="transaction-block" key={index}>
                                <div className="transaction-block-left-section">
                                    <div className="transaction-icon">{getTypeIcon(tx.type)}</div>
                                </div>
                                <div className="transaction-block-middle-section">
                                    <div className="row">
                                        <div className="transaction-type">{tx.type}</div>
                                        <div className="transaction-status">{tx.status}</div>
                                    </div>
                                    <div>
                                        <span className="transaction-address">{formatAddress(tx.address)}</span>
                                    </div>
                                    <div className="row">
                                        <span className="transaction-date">{tx.date}</span>
                                        <div className="transaction-token-price">${tx.priceUsd}</div>
                                    </div>
                                </div>
                                <div className="transaction-block-right-section">
                                    <div className="transaction-token">{tx.tokenAmount} {tx.token}</div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
    );
}

export default List;