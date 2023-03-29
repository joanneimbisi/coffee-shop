// import { useState } from "react"

// function Auth({setCurrentUser}){
//     // const [ username, setUsername] = useState('')
//     // const [ password, setPasword ] = useState('')
//     // const [ login, setLogin ] = useState('')
//     const [ errors, setErrors ] = useState([])

//     function onSubmit(e){
//         e.preventDefault()

//         const user = {
//             username:"",
//             password:""
//         }
//         fetch('/users',{
//             method: "POST",
//             headers: { 'Content-Type':'application/json' },
//             body: JSON.stringify(user)
//         })
//         .then(res => {
//             if (res.ok){
//                 res.json().then(setCurrentUser)
//             } else {
//                 res.json().then( e => setErrors(Object.entries(e.error).flat()))
//             }
//         })
//     }

//     return null

// } 
// export default Auth