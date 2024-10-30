import { Navigate, Route, Routes } from "react-router-dom";
import { Main } from "./Product/Partial/Main";
import { Login } from "./User/Login";
import { Register } from "./User/Register";
import { InfoContext, InfoContextProvider } from "./Context/InfoContext";
import { useContext } from "react";
import { Info } from "./User/Info";
import { Post } from "./Product/Allpost.js/Post";
import "bootstrap/dist/css/bootstrap.min.css";
import { Allpost } from "./Product/Allpost.js/AllBlog";
import { EditBlog } from "./Product/Allpost.js/EditBlog";


function App() {

  //  const {user} = useContext(InfoContext);
  return (
    <>
   
   <Routes>
    {/* {
      user ? <> */}
    <Route path="main" element={<Main/>}>
        <Route path="info" element ={<Info/>}/>
        <Route path="post" element={<Post/>}/>
        <Route path="allblog" element={<Allpost/>}/>
        {/* <Route path= "editblog/:id" element ={<EditBlog/>}/> */}
        <Route path="*" element={<Navigate to="/main" replace/> } />
    </Route>
    {/* </> : */}
    <>
    <Route path="login" element={<Login/>} />
    <Route path="register" element={<Register/>} />
    <Route path="*" element={<Navigate to="/login" replace/> } />
    </>
  {/* } */}
   </Routes>
  
   </>
  );
}

export default App;
