import Header from "../../views/Header/Header";
import Menu from "../../views/Menu/Menu";
import BalanceAndButtons from "./Components/BalanceAndButtons/BalanceAndButtons";
import List from "./Components/List/List";


const Wallet = (userData) => {

    return (
        <>
            <Header userData={userData}/>
            <BalanceAndButtons />
            <List />
            <Menu />
        </>
    );
}

export default Wallet;