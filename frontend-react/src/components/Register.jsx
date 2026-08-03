import React,{useState} from 'react'
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
const Register = () => {
    const[username,setUsername]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const [errors,setErrors]=useState('')
    const[success,setSuccess]=useState(false)
    const[loading,setLoading]=useState(false)

    const handleRegistration=async(e)=>{
        e.preventDefault();
        setLoading(true)
        console.log('test');
        const userData={
            username,email,password
        }
        try{
            const response=await axios.post('http://127.0.0.1:8000/api/v1/register/',userData)
            console.log('response.data==>',response.data)
            console.log("Registration successful");
            setErrors({})
            setSuccess(true)

        }
        catch(error){
            setErrors(error.response.data)
            console.error("Registration error: ",error.response.data)
        }
        finally{
            setLoading(false)
        }
    }

  return (
   <>
   <div className="container">
    <div className="row justify-content-center">
        <div className="col-md-6 bg-light-dark p-5 rounded">
            <h3 className="text-light text-center mb-4">create an account</h3>
            <form onSubmit={handleRegistration}>
                <div className="mb-3">
                <input type="text" className='form-control' placeholder='Username' value={username} onChange={(e)=>setUsername(event.target.value)}/>
                {/* <small>{errors.username}&&(<div className='text-danger>{errors}</div>)</small> */}
                {errors.username && (
                    <small className="text-danger">
                    {errors.username}
                    </small>
                )}
                </div>
                <div className="mb-3">
                <input type="email" className='form-control' placeholder="Email address" value={email} onChange={(e)=>setEmail(event.target.value)}/>
                {errors.email && (
                    <small className="text-danger">
                    {errors.email}
                    </small>
                )}
                </div>
                <div className="mb-3">
                    <input type="password" className='form-control' placeholder="Set password" value={password} onChange={(e)=>setPassword(event.target.value)}/>
                    {errors.password && (
                    <small className="text-danger">
                    {errors.password}
                    </small>
                )}
                </div>
                {success&&<div className='alert alert-success'>Registration successful</div>}
                {loading?( <button type="submit" className='btn btn-info d-block mx-auto' idsabled><FontAwesomeIcon icon={faSpinner} spin/> please wait...</button>):(<button type="submit" className='btn btn-info d-block mx-auto'>Register</button>)}
                
            </form>
        </div>

    </div>

   </div>
   </>
  )
}


export default Register