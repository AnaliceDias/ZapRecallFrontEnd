import React from "react";
import Feedback from "./Feedback";
import Logo from "./Logo";
import Proxima from "./Proxima";

let contador = 0;

const cartasPerguntas = [
    {indice: "1/8", pergunta: "O que é JSX?"},
    {indice: "2/8", pergunta: "O React é __ "},
    {indice: "3/8", pergunta: "Componentes devem iniciar com __ "},
    {indice: "4/8", pergunta: "Podemos colocar __ dentro do JSX"},
    {indice: "5/8", pergunta: "O ReactDOM nos ajuda __ "},
    {indice: "6/8", pergunta: "Usamos o npm para __"},
    {indice: "7/8", pergunta: "Usamos props para __"},
    {indice: "8/8", pergunta: "Usamos estado (state) para __"}
];

const cartasRespostas = [
    {indice: "1/8", enunciado: "O que é JSX?" ,resposta: "Uma extensão de linguagem do JavaScript."},
    {indice: "2/8", enunciado: "O React é __ " ,resposta: "uma biblioteca JavaScript para construção de interfaces."},
    {indice: "3/8", enunciado: "Componentes devem iniciar com __ " ,resposta: "letra maiúscula."},
    {indice: "4/8", enunciado: "Podemos colocar __ dentro do JSX" ,resposta: "expressões"},
    {indice: "5/8", enunciado: "O ReactDOM nos ajuda __" ,resposta: "interagindo com a DOM para colocar componentes React na mesma."},
    {indice: "6/8", enunciado: "Usamos o npm para __" ,resposta: "gerenciar os pacotes necessários e suas dependências."},
    {indice: "7/8", enunciado: "Usamos props para __" ,resposta: "passar diferentes informações para componentes."},
    {indice: "8/8", enunciado: "Usamos estado (state) para __" ,resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente."}
    
];

export default function Tela2 () {
    return (
    <main className="Tela_2">
        <Logo/>
        <CartaPergunta parametro ={cartasPerguntas[contador]}/> {/*adicionar atributos com valores do props */}
        
    </main>
    );
    
}

function CartaPergunta (props) {
    const [valor, setValor] = React.useState(0);
    const {parametro} = props;
    
    if (valor === 0){
        return (
            <div className="carta">
                <span>{parametro.indice}</span>
                <p className="pergunta">{parametro.pergunta}</p>
                <ion-icon name="arrow-undo" onClick={() => setValor(1)}></ion-icon>
            </div>
        );
    }else if(valor === 1){
        return (
            <CartaResposta parametro={cartasRespostas[contador]}/>
        );
    }
    
}

function CartaResposta(props) { //mudar layout da carta qnd o usuário der o feedback
    const [valor, setValor]= React.useState(0);
    const [valorFeedback, setValorFeedback]=React.useState("");
    const [valorProximo, setValorProximo]=React.useState(0);
    const {parametro} = props;

    if (valorProximo === 0){
        if (valorFeedback === ""){
            return (
                <div className={"carta " + valorFeedback} >
                    <h2 className="enunciado">{parametro.enunciado}</h2>
                    <span>{parametro.indice}</span>
                    <p className="resposta">{parametro.resposta}</p>
                    
                    <Feedback setValorFeedback={setValorFeedback}/>
                </div>
                
            );
        }else if (valorFeedback !== ""){
            return (
                <div className={"carta " + valorFeedback} >
                    <h2 className="enunciado">{parametro.enunciado}</h2>
                    <span>{parametro.indice}</span>
                    <p className="resposta">{parametro.resposta}</p>
                    
                    <Proxima setValorProximo={setValorProximo}/>
                </div>
            
            );
        }
    } else {
        contador++;
        return (
            <CartaPergunta parametro ={cartasPerguntas[contador]}/>
                );
        
    }

}