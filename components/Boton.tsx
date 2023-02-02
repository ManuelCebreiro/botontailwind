import React,{useState} from "react";

type ButtonProps ={
    children: React.ReactNode;
    icon?: React.ReactNode;
    backgroundColor?: string;
    hoverBackgroundColor?: string;
    fontSize?: string;
    className?: string;
    color?: string;
    [x: string]: any

}

const Boton: React.FC<ButtonProps> = ({
  children,
  icon,
  className,
  backgroundColor,
  hoverBackgroundColor,
  fontSize = 'text-md',
  color ='text-black'}:ButtonProps)=> {
    
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
    <button className={`${backgroundColor} ${hoverBackgroundColor} ${color} font-medium mx-3 py-2 px-4 rounded min-w-fit w-32	h-12 space-x-4 items-center align-middle	 ${fontSize} ${className}`} onClick={loader} >
        {show && <span>{children}</span>}
        {show && <span>{icon}</span>}
        {loading && "cargando.." }


    </button>
  )
}

export default Boton
