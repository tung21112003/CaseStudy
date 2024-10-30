import { Field, Formik, Form,ErrorMessage  } from "formik";
import { Link, useNavigate } from "react-router-dom";
import baseAxios, {METHOD_HTTP} from "../baseAxios";
import * as Yup from 'yup';
const UserSchema = Yup.object().shape({
  username: Yup.string()
      .min(2, 'Phai lon hon 2 ky tu!')
      .max(50, 'Too Long!')
      // .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "khong dung dinh dang")
      .required('Nhap khong dung dinh dang'),
  password: Yup.string().required('Nhap khong dung dinh dang')
});
export function Register(){
    const navigate = useNavigate();
    const submit = async (values) => {
      try{
        console.log("Data register", values);
        const data = await baseAxios(METHOD_HTTP.POST, "/register", values);
        console.log("Data", data);
        alert(data.message);
        navigate("/login");
      }
      catch(e){
         alert(e.message);
      }
    };
    return(
        <>
         
         <div className="Form1">
      <div className="Logo">
        <img src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png" width={100} height={100}/>
      </div>
      <div className="Form"> Đăng Ký</div>
      
     <Formik
        initialValues={{
          username: '',
          password: '',
          dob:'01/01/1999',
          image:''
        }}
        validationSchema={UserSchema}
        onSubmit={submit}
      >
        <Form>
           <span style={{marginRight:'320px',fontSize:'17px',color:'rgb(37, 114, 230)'}}>Tài Khoản:</span>
          <br />
          <Field
            type="text"
            placeholder="Tài Khoản"
            name="username"
            className="classname"
          ></Field>
          <br />
          <span style={{color:'red',marginRight:'190px'}}><ErrorMessage name={"username"}/></span><br/>
          <br />
          <span style={{marginRight:'320px',fontSize:'17px',color:'rgb(37, 114, 230)'}}>Mật Khẩu:</span>
          <Field
            type="text"
            placeholder="Mật Khẩu"
            name="password"
            className="classname"
          ></Field>
          <br />

          <span style={{color: "red",marginRight:'190px'}}><ErrorMessage name={"password"}/></span><br/>
          <br/>
          <span style={{marginRight:'320px',fontSize:'17px',color:'rgb(37, 114, 230)'}}>Ngày/Tháng/Năm:</span>
          <Field
            type="date"
            placeholder="Ngày Sinh"
            name="dob"
            className="classname"
          ></Field>
          <br />
          <br/>
          <Link to={"/login"} className="classname1">
            Bạn đã có tài khoản ?
          </Link>
          <br />
          <br />
          <button className="onsubmit">Đăng Ký</button>
        </Form>
      </Formik>
      </div>
        </>
    )
}