// import React from 'react';
// import "./login.css"

// const Login = () => {
//     const loginwithgoogle = ()=>{
//         window.open("http://localhost:5000/auth/google/callback","_self")
//     }
//   return (
//     <>
//         <div className="login-page">
//             <h1 style={{textAlign:"center"}} className='bg-gray-900 text-white'>Login</h1>
//             <div className="form">
//                 <form className='login-form'>
//                     <input type="text" name="" id="" placeholder='username' />
//                     <input type="password" name="" id="" placeholder='password'  />
//                     <button>Login</button>
//                     <p className='message'>Not Registerd? <a href="#">Create an account</a></p>
//                 </form>
//                 <button className='login-with-google-btn' onClick={loginwithgoogle}>
//                     Sign In With Google
//                 </button>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Login
import React from 'react';
import "./login.css"

const Login = () => {
    const loginwithgoogle = () => {
        window.open("http://localhost:5000/auth/google/callback", "_self");
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className='text-center text-2xl font-bold text-gray-900 mb-6'>Login</h1>
                <div className="form">
                    <form className='login-form'>
                        <input 
                            type="text" 
                            placeholder='Username' 
                            className='w-full p-2 mb-4 border border-gray-300 rounded' 
                        />
                        <input 
                            type="password" 
                            placeholder='Password' 
                            className='w-full p-2 mb-4 border border-gray-300 rounded' 
                        />
                        <button 
                            type="submit"
                            className='w-full py-2 bg-[#394855] text-white rounded hover:bg-[#2e3b43] transition duration-300'
                        >
                            Login
                        </button>
                        <p className='message text-center mt-4'>Not Registered? <a href="#" className='text-[#394855] hover:underline'>Create an account</a></p>
                    </form>
                    <button 
                        className='login-with-google-btn mt-4 w-full py-2 border border-gray-300 rounded bg-white text-[#394855] shadow-sm hover:bg-gray-900 transition duration-300'
                        onClick={loginwithgoogle}
                    >
                        Sign In With Google
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;
