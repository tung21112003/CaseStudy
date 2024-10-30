import {  Link, useNavigate } from "react-router-dom"
import baseAxios, {METHOD_HTTP} from "../baseAxios";
import { Field, Formik, Form } from "formik";
import { useContext } from "react";
import { InfoContext } from "../Context/InfoContext";

export function Login(){
    let navigate = useNavigate();
    // let {setUser} =useContext(InfoContext);
    let submit = async (value)=>{
    try{
        const data = await baseAxios(METHOD_HTTP.POST, "/login", value);
        localStorage.setItem("token", data.token);
        // await getInfo();
        navigate("/main");
    }
    catch(e){
         alert(e.message);
    }
      }
    // const getInfo = async ()=>{
    //   let data = await baseAxios(METHOD_HTTP.GET,"/users/get-profile");
    //   setUser(data);
    // }
   
    return(
       <>
       <div className="Form1">
      <div className="Logo">
      <img src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png" width={100} height={100}/>
      </div>
     <div className="Form">Đăng Nhập</div>
     
       <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        onSubmit={submit}
      >
        <Form>
         <span style={{marginRight:'320px',fontSize:'17px',color:'rgb(37, 114, 230)'}}>Tài Khoản:</span>
          <br />
          <Field
            type="text"
            placeholder="Username"
            name="username"
            className="classname"
          ></Field>
          <br />
          <br />
          <span style={{marginRight:'320px',fontSize:'17px',color:'rgb(37, 114, 230)'}}>Mật Khẩu:</span>
          <br/>
          <Field
            type="text"
            placeholder="PassWord"
            name="password"
            className="classname"
          ></Field>
           <br/>
          <br />
          <Link to={"/register"} className="classname2">
           Đăng Ký Ngay ?
          </Link>
          <br />
          <br />
          <br/>
          <button className="onsubmit">Đăng Nhập</button>
        </Form>
      </Formik>
     </div>
       </>
    )
}