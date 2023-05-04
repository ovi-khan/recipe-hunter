import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  // createUserWithEmailAndPassword,
  getAuth,
  // sendEmailVerification,
  signInWithPopup,
  // updateCurrentUser,
} from "firebase/auth";
import app from "../../../firebase/firebase.config";
import { AuthContext } from "../../../provider/AuthProvider";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider()


const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // const [email, setEmail] = useState('')
  const handleSignUp = (event) => {
    const { signUpUser } = useContext(AuthContext)
    event.preventDefault();
    setSuccess("");
    setError("");
    const form = event.target
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    console.log(name, email, password);
    // if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
    //   setError("Ensure string has two uppercase letters.");
    //   return;
    // }

    // createUserWithEmailAndPassword(auth, email, password)
    if(name, email, password) {
      signUpUser(name, email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        event.target.reset();
        setSuccess("user has been created successfully");
        // sendEmailVerification(result.user);
        //  updateCurrentUser(result.user, name)
        // updataUserData(result.user, name);
      })
      .catch((error) => {
        setError(error.message);
        // console.error(error);
      });
    }      
  };


  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const user = result.user
      console.log(user)
    })
    .catch(error => {
      console.log(error.message)
    })
  }

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
    .then(result => {
      const user = result.user
      console.log(user)
    })
    .then(error => {
      console.log(error.message)
    })
  }

  const handleEmailChange = (event) => {
    console.log(event.target.value);
    // setEmail(event.target.value);
  };
  const handlePasswordBlower = (event) => {
    console.log(event.target.value);
  };

  
//   const sendVerificationEmail = (user) => {
//     sendEmailVerification(user).then((result) => {
//       console.log(result);
//       alert("please verify your email address");
//     });
//   };


//   const updataUserData = (user, name) => {
//     updateProfile(user, {
//       displayName: name,
//     })
//       .then(() => {
//         console.log("user name updated");
//       })
//       .catch((error) => {
//         setError(error.message);
//         console.error(error.message);
//       });
//   };

  return (
    <div className="w-[30%] mx-auto p-10 mt-10 bg-red-200 rounded-lg shadow-lg shadow-red-400">
      <h1 className="text-3xl font-bold text-center mb-5">Register Here</h1>
      <form onSubmit={handleSignUp}>
        <input
          className="bg-orange-800  mt-3 mb-3 px-14 py-2 rounded-lg"
          onChange={handleEmailChange}
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          required
        />
        <br />
        <input
          className="bg-orange-800   mb-3 px-14 py-2 rounded-lg"
          onChange={handleEmailChange}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your @exam.com"
          required
        />
        <br />
        <input
          className="bg-orange-800  mb-3 px-14 py-2 rounded-lg"
          onBlur={handlePasswordBlower}
          type="password"
          name="password"
          id="password"
          placeholder="password here"
          required
        />
        <br />
        <p className="text-red-800 pb-3 font-semibold">{ error }</p>
        <p className="text-green-600 pb-3 font-semibold">{success}</p>
        <input
          className="bg-orange-400 hover:bg-orange-700 px-8 py-2 rounded-lg font-bold"
          type="submit"
          value="Register Now"
        />
        <p className="">
          <small>
            If you already registred, please{" "}
            <Link className="link" to="/login">
              Log in{" "}
            </Link>
          </small>
        </p>

        <button onClick={handleGoogleSignIn} className="bg-emerald-700 px-20 py-2 rounded-lg font-bold mt-5">Google Sign In</button>
        <button onClick={handleGitHubSignIn} className="bg-emerald-700 px-20 py-2 rounded-lg font-bold mt-5">Github Sign In</button>


      </form>
    </div>
  );
};

export default SignUp;

// import React, { useState } from 'react';
// import {createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateCurrentUser} from 'firebase/auth'
// import app from '../Firebase/firebase.config';
// import { Link } from 'react-router-dom';

// const auth = getAuth(app)

// const signUp = () => {
//     const [error, setError] = useState('')
//     const [success, setSuccess] = useState('')
//     // const [email, setEmail] = useState('')
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setSuccess('')
//         setError('')
//         const email = event.target.email.value
//         const password = event.target.password.value
//         const name = event.target.name.value
//         console.log(name,  email, password)
//         if(!/(?=.*[A-Z].*[A-Z])/.test(password)) {
//             setError('Ensure string has two uppercase letters.')
//             return
//         }
//         createUserWithEmailAndPassword(auth, email, password)
//         .then(result => {
//              const loggedUser = result.user
//              console.log(loggedUser)
//              setError('')
//              event.target.reset()
//              setSuccess('user has created successfully')
//              sendEmailVerification(result.user);
//             //  updateCurrentUser(result.user, name)
//             updataUserData(result.user, name)
//         })
//         .catch(error => {
//             setError(error.message)
//             console.error(error)
//         })
//     }
//     const handleEmailChange = (event) => {
//         console.log(event.target.value)
//         // setEmail(event.target.value);
//     }
//     const handlePawwdordBlower = (event) => {
//         console.log(event.target.value)
//     }
//     const sendVerificationEmail = user => {
//         sendEmailVerification(user)
//         .then(result => {
//             console.log(result)
//             alert('please verify your email address')
//         })
//     }
//     const updataUserData = (user, name) => {
//         updateProfile( user, {
//             displayName: name
//         })
//         .then ( () => {
//             console.log("user name updated")
//         })
//         .catch (error => {
//             setError(error.message)
//             console.error(error.message)
//         })
//     }

//     return (
//         <div className='w-50 mx-auto'>
//             <h1>Register Here</h1>
//             <form onSubmit={handleSubmit}>
//                 <input onChange={handleEmailChange} type="text" name="text" id="text" placeholder='Enter your name' required />
//                 <br />
//                 <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Enter your @exam.com' required />
//                 <br />
//                 <input onBlur={handlePawwdordBlower} type="password" name="password" id="password" placeholder='password here' required
//                  />
//                 <br />
//                 <input type="submit" value="Register Now" />
//                 <p className='text-danger'>{error}</p>
//                 <p className='text-success'>{success}</p>
//                 <p><small>If you registed, please <Link to='/login'>Log in </Link></small></p>
//             </form>
//         </div>
//     );
// };

// export default signUp;
