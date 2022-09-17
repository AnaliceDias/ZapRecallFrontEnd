import React from "react";

export default function Feedback ({setValorFeedback}) {


        return (

            <div className="feedback">
    
                <button className="aprendiAgora" onClick={()=> setValorFeedback("preto")}>Aprendi agora</button>
                <button className="naoLembrei" onClick={()=> setValorFeedback("vermelho")}>Não lembrei</button>
                <button className="lembreiComEsforco" onClick={()=> setValorFeedback("verde")}>Lembrei com esforço</button>
                <button className="zap" onClick={()=> setValorFeedback("amarelo")}>Zap!</button>
                
            </div>
    
        );

}