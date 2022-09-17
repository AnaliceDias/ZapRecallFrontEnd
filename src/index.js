import ReactDom from "react-dom";
import "./css/reset.css";
import "./css/style.css";
import Logo from "./Logo";
import Tela1 from "./Tela1";
import Tela2 from "./Tela2";

//import imagens aqui

function App (){

    return (
        <Tela1/>
           
    );

}

ReactDom.render(<App />, document.querySelector(".root"));