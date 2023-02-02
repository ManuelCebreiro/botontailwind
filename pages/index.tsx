import Boton from "../components/Boton";
import { MdDone } from 'react-icons/md';


export default function Home() {
  return (
    <div className="flex items-center h-screen justify-center bg-gray-300">
      <div>
      <Boton
        backgroundColor="bg-emerald-700"
        hoverBackgroundColor="hover:bg-emerald-900"
        color="text-white"
        >
        Button label
      </Boton>
      </div>

      <div>
      <Boton 
      backgroundColor="bg-white"
      hoverBackgroundColor="hover:bg-gray-200"
      
      >Button label</Boton>
      </div>
      
      <div>
      <Boton
        backgroundColor="bg-transparent"
        hoverBackgroundColor="hover:bg-neutral-400"
        
        
        >
        Button label
      </Boton>
      </div>
      <div>
      <Boton
        className="flex"
        backgroundColor="bg-purple-300"
        hoverBackgroundColor="hover:bg-purple-500"
        color="text-white"
        icon={<MdDone size="1.5rem" />}
        onclick={() =>  console.log("click")}
        >
        Button label
      </Boton>
      </div>
    </div>
  );
}
