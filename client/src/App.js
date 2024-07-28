import React from 'react';
import RouterConfig from './pages/routerconfig/Routerconfig';
import { AuthContextProvider } from './context/AuthContext'; 

const App = () => {
  return (
    <AuthContextProvider>
      <RouterConfig />
    </AuthContextProvider>
  );
};

export default App;
