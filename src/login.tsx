import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import PopUp from './designComponents.tsx/popUp';
export default function Login() {
  const [role, setRole] = useState('employee');
  const [id, setId] = useState('');
  const [name,setName]=useState('');
  const[key,setKey]=useState('');
  const[showConfimation,setShowConfimation]=useState(false);
  const [loader,setLoader]=useState(false)
  // const [adminId, setAdminId] = useState('');
  const router=useRouter();
  const handleRoleChange = (e:any) => {
    setRole(e.target.value);
    
  };
  const handleEmployeeIdChange = (e:any) => {
    // setEmployeeId(e.target.value);
    const value = e.target.value;
    if (value.length <= 4 && /^[0-9]*$/.test(value)) {
        setId(value);
      }
  };
  const handleAdminIdChange = (e:any) => {
    // setAdminId(e.target.value);
    const value = e.target.value;
    if (value.length <= 4 && /^[0-9]*$/.test(value)) {
      setId(value);
    }
  };
  const handleAdminKeyChange=(e:any)=>{
    const value=e.target.value;
    if(value.length<=4&&/^[0-9]*$/.test(value)){
      setKey(value)
    }
  }
  const handleLogin = async(e:any) => {
    console.log(id)
  await axios.get(`.netlify/functions/supabase?id=${id}`)
    .then(response=>{
      if(response.data.length>0){
        e.preventDefault()
        setLoader(true)
        if(role=='employee'){
          router.push('/home')
        }else{
          router.push('/admin')
        }
      setName(response.data[0].name)
      axios.post('.netlify/functions/auth',{id,role,name:response.data[0].name})
  }else{
    setShowConfimation(true)
  }
  })
    .catch(k=>{alert('Invalid Employee ID')})
       };
  const isLoginDisabled =
   (id === '' || id.length !== 4)
  return (
    <>
      <div className="h-screen flex justify-center items-center w-full bg-blue-200">
      {showConfimation&& <PopUp message='Invalid EmployeeID'  changeView={()=>setShowConfimation(!showConfimation)}/>}
        <div className="h-[550px] sm:h-[500px] w-full mx-7 sm:w-[800px]  rounded-2xl shadow-xl flex justify-center items-center overflow-hidden">
          <div className="hidden min-h-full sm:flex justify-center items-center w-[50%] bg-blue-400">
            <img src='/images/sdetLogo.png'/>
          </div>
          <div className="flex items-center justify-center w-full sm:w-[50%] h-full bg-slate-200">
            <div className="px-4">
              <div className="mb-2 font-bold">Login as:</div>
              <select
                value={role}
                onChange={handleRoleChange}
                className="block w-full p-2 border rounded mb-4"
              >
                <option value="employee">Employee</option>
                <option value="admin">Admin</option>
              </select>
              {role === 'employee' && (
                <>
                  <input
                    type="number"
                    placeholder="Enter your Employee ID"
                    className="block w-full p-2 border rounded mb-4"
                    value={id}
                    onChange={handleEmployeeIdChange}
                  />
                </>
              )}
              {role === 'admin' && (
                <>
                  <input
                    type="number"
                    placeholder="Enter your Admin ID"
                    className="block w-full p-2 border rounded mb-4"
                    value={id}
                    onChange={handleAdminIdChange}
                  />
                  <input
                    type='number'
                    placeholder='Enter key'
                    className="block w-full p-2 border rounded mb-4"
                    value={key}
                    onChange={handleAdminKeyChange}
                    />
                </>
              )}
              <div className='flex gap-3'>
              <button
                onClick={handleLogin}
                disabled={isLoginDisabled}
                className={`mt-4 px-4 py-2 bg-blue-600 text-white rounded ${
                    isLoginDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                  }`}
              >
                Login
              </button>
              {loader&&<div className='h-5 w-5 border-black border-t-1 border-solid rounded-full animate-spinn'></div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



function setShowConfimation(arg0: boolean): void {
  throw new Error('Function not implemented.');
}

