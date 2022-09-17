
export default function Proxima ({setValorProximo}) {
    
    return (
        <>
        <ion-icon name="arrow-undo" onClick={()=> setValorProximo(1)} data-identifier="arrow"></ion-icon>
        
        </>
    );
}