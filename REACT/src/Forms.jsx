import { useState } from "react";
function Forms(){
    const [User, setUser]=useState(
        {
            name:"",
            email:"",
            password:"",
            phone:"",
            gender:"",
            skills:""
        }
    );
    const change=(e)=>{
        setUser(
            {
                ...User,[e.target.name]:e.target.value
            }
        );
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("Form Submitted.")
    };
    return (
        <div style={{ margin: "20px" }}>
            <h1>Forms</h1>
            <form onSubmit={handleSubmit}><br></br>
                <label><b>Name:</b></label>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={User.name}
                    onChange={change}
                /><br></br>
                <label><b>Email:</b></label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={User.email}
                    onChange={change}
                /><br></br>
                <label><b>Password:</b></label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={User.password}
                    onChange={change}
                /><br></br>
                <label><b>Phone:</b></label>
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={User.phone}
                    onChange={change}
                /><br></br>
                <label><b>Gender:</b></label>
                <input type="radio" name="gender" value="male" checked={User.gender === "male"} onChange={change} /> Male
                <input type="radio" name="gender" value="female" checked={User.gender === "female"} onChange={change} /> Female<br></br>
                <label><b>Skills:</b></label>
                <select name="skills" value={User.skills} onChange={change}>
                    <option value="">Select a skill</option>
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                </select><br></br>
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            <div>
                
            </div>
        </div>
    )
}
export default Forms