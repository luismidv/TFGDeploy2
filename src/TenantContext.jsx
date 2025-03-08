import React, { createContext, useState, useContext } from "react";

const TenantContext = createContext();
export const TenantProvider = ({children}) =>{
  const [tenantData, setTenantData] = useState(null);

  return (
    <TenantContext.Provider value = {{tenantData, setTenantData}}>
      {children}
    </TenantContext.Provider>
  )
}
export const useTenant = () => useContext(TenantContext);
