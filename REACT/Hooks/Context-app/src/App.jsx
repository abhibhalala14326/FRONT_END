import "./App.css";
import Con_1 from "./Contact/con_1.jsx";
import {  createContext } from "react";
import Layout from "./Contact/Layout.jsx";
export const data = createContext("");
// export const data1 = createContext("");
 const a = 10;
function App({children}) {
 
  return (
    <>
      <data.Provider value={a}>
        <Layout>{children}
        </Layout>
      </data.Provider>
    </>
  );
}

export default App;
