import './App.css';
import {Main} from "./main/Main";
import {MyWorks} from "./myWorks/MyWorks";
import {Contacts} from "./contacts/Contacts";
import {Idea} from "./idea/Idea";
import {Footer} from "./footer/Footer";
import {Skills} from "./skills/Skills";
import {Menu} from "./nav/Menu/Menu";

function App() {
    return (
        <div className="App">
            {/*<BurgerMenu/>*/}
            <Menu/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <Idea/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
