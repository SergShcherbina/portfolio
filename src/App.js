import './App.css';
import {Main} from "./sections/main/Main";
import {MyWorks} from "./sections/myWorks/ui/MyWorks";
import {Contacts} from "./sections/contacts/Contacts";
import {Footer} from "./sections/footer/Footer";
import {Skills} from "./sections/skills";
import {Menu} from "./sections/nav/Menu/Menu";

function App() {
    return (
        <div className="App">
            <Menu/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
