import { IoMdHelp } from "react-icons/io";
import { FaFilter } from "react-icons/fa6";
import { MdOutlineRefresh } from "react-icons/md";
import './Filters.css'

const Filters = () => {

    const handleClickOpenFAQ = () => {};
    const handleClickOpenFilters = () => {};
    const handleClickRefresh = () => {};
    
    const buttonInfo = [
        { name: "FAQ", icon: <IoMdHelp />, handleClick: handleClickOpenFAQ },
        { name: "Refresh", icon: <MdOutlineRefresh />, handleClick: handleClickRefresh },
        { name: "Filters", icon: <FaFilter />, handleClick: handleClickOpenFilters },
    ];

    return (
        <div className="filters-section">
            <div className="filters-title">Transactions</div>
                <div className="filters-buttons-section">
                    {buttonInfo.map((button, index) => (
                        <button className="filters-buttons" key={index} onClick={button.handleClick}>
                            <div className="button-icon">{button.icon}</div>
                        </button>
                    ))}
            </div>
        </div>
    );
}

export default Filters;