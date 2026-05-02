import { useEffect, useState } from "react";
import Home from "./Components/Home";
import PageHead from "./Components/PageHead";
import Start from "./Components/Start";

export default function App() {
  const [page,setPage] = useState(0)

  useEffect(()=>{
    if (page === 0) {
      const timer = setTimeout(()=>setPage(1),3000);
      return () => clearTimeout((timer))
    }
  },[page])
  if (page === 0) return <Home/>
  if (page === 1) return <Start onStart={()=> setPage(2)}/>
  if (page === 2) return <PageHead/>
 
}
