import logo from './logo.svg';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skils/Skills";
import {MyWorks} from "./myWorks/MyWorks";
import {Vacancie} from "./vacancies/Vacancie";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <MyWorks/>
        <Vacancie/>
    </div>
  );
}

export default App;
