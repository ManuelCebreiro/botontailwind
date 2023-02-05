import React,{useState} from "react";

type ButtonProps ={
    children: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
    [x: string]: any

}

const Boton: React.FC<ButtonProps> = ({
  children,
  icon,
  className,
 }:ButtonProps)=> {
    
    const [loading, setLoading] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(true);

    function loader(){
      setLoading(true);
      setShow(false)
      setTimeout(() => {
        alert("El loader funciona despues de 2 segundos")
    console.log("boton dado")
        setLoading(false);
        setShow(true);
      }, 2000);
    
    }


  return (
    <button className={`font-medium mx-3 py-2 px-4 rounded min-w-fit	h-12 space-x-4 items-center ${className}`} onClick={loader} >
        {show && <span>{children}</span>}
        {show && <span>{icon}</span>}
        {loading && <span>cargando..</span> }


    </button>
  )
}

export default Boton
