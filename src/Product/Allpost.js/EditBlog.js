import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import baseAxios, { METHOD_HTTP } from "../../baseAxios";
import { Field, Form, Formik } from "formik";

export function EditBlog(){
    // const [OldBlog,setOldBlog] = useState({
    // });
    // const navigate = useNavigate();
    // const  { id  } =useParams();
    // const fetchPostById = async ()=>{
    //     try{
    //         const token = localStorage.getItem("token");
    //         const data = await baseAxios(METHOD_HTTP.GET,'/posts/'+id, {  headers: { Authorization: `Bearer ${token}` },})
    //         setOldBlog(data);
    //         console.log(data);
    //     }
    //     catch(e){
    //         alert(e.message);
    //     }
    // }
    // useEffect(()=>{
    //     fetchPostById();
    // })
    // const Edit = async (data
    // )=>{
    //     try{
    //         const token = localStorage.getItem("token");
    //        await baseAxios(METHOD_HTTP.PUT,'/posts/'+id ,data, {  headers: { Authorization: `Bearer ${token}` },} )
    //        navigate('/main/allblog');
    //     }
    //     catch(e){
    //         alert(e.message);
    //     }
    // }
    // return(
    //     <Formik
    //     initialValues={OldBlog}
    //     onSubmit={(data)=>Edit(data)}
    //     enableReinitialize={true}>
    //         <Form>
              
    //             <Field name = "id" type="text" placeholder="ID"></Field>
    //             <Field  name = "title" type="text" placeholder="title"></Field>
    //             <Field  name = "content" type="text" placeholder="conten"></Field>
    //             <Field  name = "status" type="text" placeholder="status"> </Field>
    //             <Field  name = "type" type="text" placeholder="type"> </Field>
    //             <button>Submit</button>
    //         </Form>
    //     </Formik>
//     )
// }
}