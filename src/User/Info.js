import baseAxios, { METHOD_HTTP } from "../baseAxios";
import { useEffect, useState } from "react";

export function Info() {
  let [profile, setInfo] = useState({});
  const [dob, setDob] = useState("");
  const [image, setImage] = useState("");
  let getInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      let data = await baseAxios(METHOD_HTTP.GET, "/users/get-profile",{  headers: { Authorization: `Bearer ${token}` },});
      setInfo(data);
    } catch (e) {
      alert(e.message);
    }
  };
  let handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      await baseAxios(METHOD_HTTP.PUT, "/users/update-profile ", { dob,image,}, {  headers: { Authorization: `Bearer ${token}` },}
    );
      alert("Cap nhat thanh cong");
    } catch (e) {
      alert(e.message);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="Profile">
      <div className="Left">
     <br /> <img src={profile.image} width={250} height={250} />
       <p style={{ paddingTop:'15px',fontSize:'20px',textAlign:'center'}}>{profile.username}</p>
       <p className="name-1">Full Stack Developer</p>
    </div>
      <div className="Right" style={{paddingLeft:'15px'}}>
        <p style={{paddingTop:'30px',paddingLeft:'5px'}}>Account : {profile.username}</p>
        <hr/>
        <p style={{marginTop:'30px'}}>Password:  {profile.password}</p>
        <hr/>
        <p style={{marginTop:'30px'}} >Date Of Birth: {profile.dob }</p>
        <hr/>
        <p style={{marginTop:'30px'}} >Phone : 0123445678</p>
        <hr/>
        <br />
       <div className="update">
       <input
          className="input1"
          type="date"
          placeholder="Ngày sinh mới"
          value={dob}
          onChange={(data) => setDob(data.target.value)}
        />
        <br />
        <br />
        <input
           className="input2"
          type="text"
          placeholder="New Picture"
          value={image}
          onChange={(data) => setImage(data.target.value)}
        />
        <br />
        <button onClick={(data) => handleUpdate(data)} className="btn">Update</button>
       </div>
      </div>
    </div>
  );
}
