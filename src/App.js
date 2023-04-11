import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skils/Skills";
import {MyWorks} from "./myWorks/MyWorks";
import {Vacancie} from "./vacancies/Vacancie";
import {Contacts} from "./contacts/Contacts";
import {Footer} from "./footer/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Skills/>
        <MyWorks/>
        <Vacancie/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
