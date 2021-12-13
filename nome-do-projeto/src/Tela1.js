import React from 'react';
import Tela2 from "./Tela2";

export default function Tela1 (){
    const [valor, setValor] = React.useState(0);

    if (valor ===0){
        return (
            <main className="Tela_1">
                
                <ion-icon name="flash-outline"></ion-icon>
                <h2>ZapRecall</h2>
               {/*<input placeholder="Sua meta de zaps"></input> */} 
                <button onClick={() => setValor(1)}>
                    <p>Praticar React</p> 
                <ion-icon name="play-forward"></ion-icon>
                </button>
    
            </main>
        );
    }
    else if (valor === 1){
        return (
            <Tela2/>
        );
    }
    else {
        return (
            <>opa, algo deu errado</>
        );
    }

    
}
