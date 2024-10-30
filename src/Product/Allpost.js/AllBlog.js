import { useEffect, useState } from "react";
import baseAxios, { METHOD_HTTP } from "../../baseAxios";
import { Link } from "react-router-dom";

export function Allpost(){
    const [posts, setPosts] = useState([]);
    const fetchPost = async ()=>{
      try{
        const token = localStorage.getItem("token");
       const data = await baseAxios(METHOD_HTTP.GET,"/posts",{  headers: { Authorization: `Bearer ${token}` },});
       setPosts(data);
      } 
      catch(e){
        alert(e.message);
      }
    }    
    useEffect(()=>{
        fetchPost();
    },[])
    const DeletePost = async (id)=>{
          try{
        //  if(window.confirm("Ban chac chan co muon xoa bai viet nay khong ?")){
        //     const token = localStorage.getItem("token");
        //     await baseAxios(METHOD_HTTP.DELETE,'/posts/'+id,{  headers: { Authorization: `Bearer ${token}` },});
        //     fetchPost();
        //  }
        const token = localStorage.getItem("token");
        await baseAxios(METHOD_HTTP.DELETE,'/posts/'+id,{  headers: { Authorization: `Bearer ${token}` },});
        fetchPost();
          }
          catch(e){
            alert(e.message);
          }
    }
    return(
        <div>
      <div className="Text">Danh sách Bài Viết</div>
    {posts.length > 0 ? (
      <ul>
        {
        posts.slice(0).map((post) => ( 
          <div style={{display:'flex'}}> 
             <li key={post.id} style={{marginLeft:'15px'}}>
              
           <div style={{display:'flex'}}> 
           <div style={{paddingLeft:'1px',color:'grey'}}><h2>{post.id}</h2></div>  <div style={{marginLeft:'50px'}}> | </div>
           <div style={{paddingLeft:'20px',color:'grey'}}><h2>{post.title}</h2></div>  <div style={{marginLeft:'50px'}}>  | </div>
           <div style={{paddingLeft:'50px',color:'grey'}}><p>{post.content}</p> </div>  <div style={{marginLeft:'50px'}}> | </div>
           <div style={{paddingLeft:'50px',color:'grey'}}><p>{post.status}</p></div>     <div style={{marginLeft:'50px'}}> | </div>
           <div style={{paddingLeft:'50px',color:'grey'}}><p>{post.type}</p></div>
           </div>
          <div >  <button onClick={()=>DeletePost(post.id)} style={{width:'100px', borderRadius:'15px',backgroundColor:' rgb(16, 134, 212)',border:'none',color:'white',padding:'5px'}}>Xóa</button>
  <button  style={{width:'100px', borderRadius:'15px',backgroundColor:' rgb(16, 134, 212)',border:'none',color:'white',padding:'5px',marginLeft:'20px'}}>Sửa</button></div>
           
          </li>
          </div>
         
        ))}
      </ul>
    ) : (
      <p>Không có bài viết nào</p>
    )}
  </div>
    )
}