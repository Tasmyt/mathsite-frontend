import { Outlet } from "react-router-dom";
import AppBar from "./AppBar/AppBar";
import { Suspense } from 'react'; 

export default function Layout() { 
    return (
<>
<header>
    <AppBar />
</header> 
<main>         
    <Suspense fallback={null}>
        <Outlet />
    </Suspense>
</main>      
</>
    );
  }
