import Menu from "../../views/Menu/Menu";
import Header from "../../views/Header/Header";
import List from "./Components/List/List";
import Filters from "./Components/Filters/Filters";


function Story() {

    return (
        <>
            <Header />
            <Filters />
            <List />
            <Menu />
        </>
    );
}

export default Story;