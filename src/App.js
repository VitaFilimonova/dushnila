import './reset.css';
import './App.scss';
import HappyTab from "./components/HappyTab";
import DaysTab from "./components/DaysTab";
import LogoTab from "./components/LogoTab";
import ValuesTab from "./components/ValuesTab";
import {useSelector} from "react-redux";
import {useGetValuesQuery} from "./services/ValuesServices";

function App() {
    useGetValuesQuery(undefined, {
        pollingInterval: 60000,
    });

    const {error} = useSelector((state) => state.valuesReducer);
    if (error) {
        return <div className="error">Ошибка: {error.status} {error.originalStatus}</div>;
    }

    return (
        <div className="App">
            <h1 className="App__header">Душнила</h1>
            <div className="App__tabs">
                <HappyTab/>
                <DaysTab/>
                <LogoTab/>
                <ValuesTab/>
            </div>

        </div>
    );
}

export default App;
