import { FaClipboardList } from "react-icons/fa";
import './Empty.css';

const Empty = () => {

    return (
        <div className="no-transactions-section">
            <div className="no-transaction-img">
                <FaClipboardList />
            </div>
            <div className="no-transactions-message">
                NO TRANSACTIONS FOUND...
            </div>
        </div>
      
    );
}

export default Empty;