'use client'
import { AbilityContext } from '../lib/casl/ability'
import DashboardTopbar from './dashcomponent/DashboardTopbar';
import Sidebar from './dashcomponent/Sidebar';
import { defineAbilitiesFor } from '../lib/casl/ability'

import { useState,useEffect } from 'react';
const Layout= ({ children }) => {
    const [ability, setAbility] = useState(null);
      useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) return;
    
        const user = JSON.parse(storedUser);
        
        const abilityInstance = defineAbilitiesFor(user);
        setAbility(abilityInstance);  
      }, []);
    
    
      if (!ability) return null; 
    
  return(
  <>
    <AbilityContext.Provider value={ability}>
    <div className="bg-white min-h-screen fixed">
      <DashboardTopbar />
      <div className="flex text-black">
        <div className="sticky -mt-2">
          <Sidebar /> 
        </div>
        <div className="text-black w-full mt-20 p-2">{children}</div>
      </div>
    </div>
     </AbilityContext.Provider>
  </>
  )
}

export default Layout;

