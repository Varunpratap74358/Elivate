import { FormEvent, useState } from 'react'
import { BiCartDownload } from 'react-icons/bi'
import { FaRegUser } from 'react-icons/fa'
import { RiLockPasswordLine } from 'react-icons/ri'

const LoginForm = () => {
    const [username,setUsername] = useState<string>("")
    const [password,setPassword] = useState<string>("")

    const handelSubmit=(e:FormEvent)=>{
        e.preventDefault()
        console.log(username,password)
        alert(username+" " + password)

    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-700">
      <div className="relative w-full max-w-md p-6 bg-blue-700 rounded-lg border-blue-600 border shadow-md flex flex-col gap-7">
        <div className="text-white flex justify-center">
        <BiCartDownload size={75} />
        </div>
        <form onSubmit={handelSubmit} action="" className='flex flex-col gap-3'>
            <div>
                <div className="text-white bg-blue-700 border flex items-center rounded-md py-2 px-3">
                <FaRegUser size={25} />
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} className='bg-blue-700 w-full text-xl px-4 focus:outline-none ' placeholder='USERNAME' />
                </div>
            </div>
            <div>
                <div className="text-white bg-blue-700 border flex items-center rounded-md py-2 px-3">
                <RiLockPasswordLine size={25} />
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='bg-blue-700 w-full text-xl px-4 focus:outline-none ' placeholder='PASSWORD' />
                </div>
            </div>
            <div>
                <button type='submit' className='bg-white hover:bg-slate-100 transition-all duration-300 w-full py-2 rounded mt-10 font-semibold'>Login</button>
            </div>
            <div className='flex justify-end'>
                <a href="" className='text-white'>Forgot password?</a>
            </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
