"use client"

import {ThemeProvider} from "next-themes"
import {useState, useEffect, PropsWithChildren} from "react"


const Provider = ({ children }: PropsWithChildren)=>{

    const [mounted, setMounted ] = useState(false);

    useEffect(()=>{
       setMounted(true);
    },[]);

    if(!mounted)
      return <>{children}</>

    return <ThemeProvider>
        {children}
    </ThemeProvider>
}
export default Provider;