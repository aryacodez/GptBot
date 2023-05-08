import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate,Link } from 'react-router-dom'
const Form2 = () => {
    
    const [email,setEmail] = useState("")    
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")
    const navigate = useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await fetch('/api/v1/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({                
                email,
                password                
            })
        }).then(res => res.json())
        .then(data => {            
            if(data.success) {
                alert('Login Successful');
                console.log(data)
                navigate('/chat')
            }else{
                setError("Error")
            }
            
            setEmail("");            
            setPassword("");
        })
        .catch((err) => console.log(err))
    }
    return (
        <>
            <div className='container mt-5'>
                <h2 className='text-center  mb-4 fs-1'>Login</h2>
                <div className='row justify-content-center'>
                    <div class="col-4 ">
                        <div className='card'>
                            <div className='card-body'>
                                <form onSubmit={handleSubmit}>
                                    <div className='form-group'>                                       

                                        <label className="mb-2 mt-2">Email Id</label>
                                        <input type="email" id="email" className="form-control" placeholder="Enter Email Id"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}/>

                                        <label className="mb-2 mt-2">Password</label>
                                        <input type="password" id="password" className="form-control" placeholder="Enter Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <p className='mt-2'>Not Register, <Link to='/signup'>Click Here!</Link></p>
                                    <button type='submit' className='btn btn-primary'>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form2