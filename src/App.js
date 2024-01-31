import './reset.css';
import './App.scss';
import HappyTab from "./components/HappyTab";
import DaysTab from "./components/DaysTab";
import LogoTab from "./components/LogoTab";
import ValuesTab from "./components/ValuesTab";
import {useSelector} from "react-redux";

function App() {
    const {isLoading , error} = useSelector((state) => state.valuesReducer);



    if (error) {
        return <div>Ошибка: {error.message}</div>; // Сообщение об ошибке
    }
    // if (isLoading) {
    //     return <div>Загрузка...</div>; // Индикатор загрузки
    // }

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
