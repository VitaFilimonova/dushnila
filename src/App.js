import './reset.css';
import './App.scss';
import HappyTab from "./components/HappyTab";
import DaysTab from "./components/DaysTab";
import LogoTab from "./components/LogoTab";
import IndicatorsTab from "./components/IndicatorsTab";


function App() {
    return (
        <div className="App">
            <h1 className="App__header">Душнила</h1>
            <div className="App__tabs">
                <HappyTab/>
                <DaysTab/>
                <LogoTab/>
                <IndicatorsTab/>
            </div>

        </div>
    );
}

export default App;
