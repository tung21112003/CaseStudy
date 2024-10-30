import { useEffect, useState } from "react"
import baseAxios, { METHOD_HTTP } from "../../baseAxios";
import { Link } from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";


export function Post(){
  const [newPost,setNewPost] = useState({
    title: "My First Blog Post",
    content: "This is the content of the post",
    status: "public", // (public/private)
    type: "technology" 
  })
  const handleChange = (e) => {
    const { name, value } = e.target; // Lấy tên và giá trị của input
    setNewPost(prevState => ({ ...prevState, [name]: value })); // Cập nhật state
  };
   const createPost = async ()=>{
    try{
      const token = localStorage.getItem("token");
        const data = await baseAxios(METHOD_HTTP.POST,"/posts",newPost,{  headers: { Authorization: `Bearer ${token}` },});
     alert('Bài đã được tạo',data);
    }
    catch(e){
     alert(e.message);
    }
   }

      
  return(
    <div>
     <div className="Text">Tạo Bài Đăng Mới</div>
      <div>
      <input
        type="text"
        name="title"
        placeholder="Tiêu đề"
        value={newPost.title}
        onChange={handleChange} // Gọi hàm handleChange khi thay đổi tiêu đề
        style={{ marginLeft:'10px'  ,marginRight:'10px',borderRadius:'10px' ,padding:'12px',backgroundColor:' #caced1',border:'none', }}
      />
      <input
        type="text"
        name="content"
        placeholder="Nội dung"
        value={newPost.content}
        onChange={handleChange} // Gọi hàm handleChange khi thay đổi nội dung
        style={{ marginLeft:'10px'  ,marginRight:'10px',width:'30%',borderRadius:'10px' ,padding:'12px',backgroundColor:' #caced1',border:'none'}}
      />
      <select
        name="status"
        value={newPost.status}
        onChange={handleChange}  // Gọi hàm handleChange khi thay đổi trạng thái
        style={{ marginLeft:'10px'  ,marginRight:'10px',borderRadius:'10px' ,padding:'12px',backgroundColor:' #caced1',border:'none'}}
      >
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>
      <select
        name="type"
        value={newPost.type}
        onChange={handleChange} // Gọi hàm handleChange khi thay đổi loại bài đăng
        style={{ marginLeft:'10px'  ,marginRight:'10px',borderRadius:'10px' ,padding:'12px',backgroundColor:' #caced1',border:'none'}}
      >
        <option value="technology">Technology</option> 
        <option value="lifestyle">LifeStyle</option>
        <option value="health">Heath</option>
      </select>
      <Link to="/main/allblog" style={{textDecorationLine:'none',}}> <button onClick={createPost} style={{borderRadius:'10px' ,padding:'12px' ,backgroundColor:' rgb(16, 134, 212)',border:'none',color:'white'}}>Tạo Bài Đăng</button></Link>
      </div>
    </div>
  
  )
}