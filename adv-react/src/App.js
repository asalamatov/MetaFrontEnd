// // import logo from './logo.svg';
// // import './App.css';
// // import DessertsList from './DessertLists';
// // import {useState} from "react";

// // const desserts = [
// //   {
// //     name: "Chocolate Cake",
// //     calories: 400,
// //     createdAt: "2022-09-01",
// //   },
// //   {
// //     name: "Ice Cream",
// //     calories: 200,
// //     createdAt: "2022-01-02",
// //   },
// //   {
// //     name: "Tiramisu",
// //     calories: 300,
// //     createdAt: "2021-10-03",
// //   },
// //   {
// //     name: "Cheesecake",
// //     calories: 600,
// //     createdAt: "2022-01-04",
// //   },
// // ];

// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       <h2>List of low calorie desserts:</h2>
// // //       <DessertsList data={desserts} />
// // //     </div>
// // //   );
// // // }

// // // function App() {
// // //   const [name, setName] = useState("");

// // //   function handleSubmit(e) {
// // //     e.preventDefault();
// // //     setName("");
// // //     console.log("form submitted")
// // //   }

// // //   return (
// // //     <div className="App">
// // //       <form onSubmit={handleSubmit}>
// // //         <fieldset>
// // //           <div className="field">
// // //             <label htmlFor='name'>Name: </label>
// // //             <input id="name" type="text" placeholder="Name" name="name" value={name} onChange={e=> setName(e.target.value)} />
// // //           </div>
// // //           <button disabled={!name} type="submit">Submit</button>
// // //         </fieldset>
// // //       </form>



// // //     </div>
// // //   )
// // // }

// // function App() {
// //   const [score, setScore] = useState("");
// //   const [comment, setComment] = useState("")

// //   function handleSubmit(e) {
// //     e.preventDefault();
// //     if (Number(score) <5) {
// //       alert("please explain why u did not like the food")
// //       return
// //     }

// //     console.log("Form submitted");
// //   }

// //   return (
// //     <div className="App">
// //       <form onSubmit={handleSubmit}>
// //         <fieldset>
// //           <h2>Feedback Form</h2>
// //           <div className='Field'>
// //             <label>Score: {score}</label>
// //             <input type='range' min={0} max={10} value={score} onChange={e=>setScore(e.target.value)}/>
// //           </div>
// //           <div className='Field'>
// //             <textarea value={comment} onChange={e=> setComment(e.target.value)}></textarea>
// //           </div>
// //           <button type='submit'>Submit</button>
// //         </fieldset>
// //       </form>



// //     </div>
// //   )
// // }

// // export default App;


import './App.css'; 
import {useState} from "react"; 
import {validateEmail} from "../src/utils"; 
 
const PasswordErrorMessage = () => { 
 return ( 
   <p className="FieldError">Password should have at least 8 characters</p> 
 ); 
}; 
 
function App() { 
 const [firstName, setFirstName] = useState(""); 
 const [lastName, setLastName] = useState(""); 
 const [email, setEmail] = useState(""); 
 const [password, setPassword] = useState({ 
   value: "", 
   isTouched: false, 
 }); 
 const [role, setRole] = useState("role"); 

 const getIsFormValid = () => { 
   return ( 
     firstName && 
     validateEmail(email) && 
     password.value.length >= 8 && 
     role !== "role" 
   ); 
 }; 
 
 const clearForm = () => { 
   setFirstName(""); 
   setLastName(""); 
   setEmail(""); 
   setPassword({ 
     value: "", 
     isTouched: false, 
   }); 
   setRole("role"); 
 }; 
 
 const handleSubmit = (e) => { 
   e.preventDefault(); 
   alert("Account created!"); 
   clearForm(); 
 }; 
 
 return ( 
   <div className="App"> 
     <form onSubmit={handleSubmit}> 
       <fieldset> 
         <h2>Sign Up</h2> 
         <div className="Field"> 
           <label> 
             First name <sup>*</sup> 
           </label> 
           <input 
             value={firstName} 
             onChange={(e) => { 
               setFirstName(e.target.value); 
             }} 
             placeholder="First name" 
           /> 
         </div> 
         <div className="Field"> 
           <label>Last name</label> 
           <input 
             value={lastName} 
             onChange={(e) => { 
               setLastName(e.target.value); 
             }} 
             placeholder="Last name" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Email address <sup>*</sup> 
           </label> 
           <input 
             value={email} 
             onChange={(e) => { 
               setEmail(e.target.value); 
             }} 
             placeholder="Email address" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Password <sup>*</sup> 
           </label> 
           <input 
             value={password.value} 
             type="password" 
             onChange={(e) => { 
               setPassword({ ...password, value: e.target.value }); 
             }} 
             onBlur={() => { 
               setPassword({ ...password, isTouched: true }); 
             }} 
             placeholder="Password" 
           /> 
           {password.isTouched && password.value.length < 8 ? ( 
             <PasswordErrorMessage /> 
           ) : null} 
         </div> 
         <div className="Field"> 
           <label> 
             Role <sup>*</sup> 
           </label> 
           <select value={role} onChange={(e) => setRole(e.target.value)}> 
             <option value="role">Role</option> 
             <option value="individual">Individual</option> 
             <option value="business">Business</option> 
           </select> 
         </div> 
         <button type="submit" disabled={!getIsFormValid()}> 
           Create account 
         </button> 
       </fieldset> 
     </form> 
   </div> 
 ); 
} 

export default App; 


// import "./App.css";
// import { ThemeProvider, useTheme } from "./ThemeContext";
// import Switch from "./Switch";

// const Title = ({ children }) => {
//   const { theme } = useTheme();
//   return (
//     <h2
//       style={{
//         color: theme === "light" ? "black" : "white",
//       }}
//     >
//       {children}
//     </h2>
//   );
// };

// const Paragraph = ({ children }) => {
//   const { theme } = useTheme();
//   return (
//     <p
//       style={{
//         color: theme === "light" ? "black" : "white",
//       }}
//     >
//       {children}
//     </p>
//   );
// };

// const Content = () => {
//   return (
//     <div>
//       <Paragraph>
//         We are a pizza loving family. And for years, I searched and searched and
//         searched for the perfect pizza dough recipe. I tried dozens, or more.
//         And while some were good, none of them were that recipe that would
//         make me stop trying all of the others.
//       </Paragraph>
//     </div>
//   );
// };

// const Header = () => {
//   return (
//     <header>
//       <Title>Little Lemon 🍕</Title>
//       <Switch />
//     </header>
//   );
// };

// const Page = () => {
//   return (
//     <div className="Page">
//       <Title>When it comes to dough</Title>
//       <Content />
//     </div>
//   );
// };

// function App() {
//   const { theme } = useTheme();
//   return (
//     <div
//       className="App"
//       style={{
//         backgroundColor: theme === "light" ? "white" : "black",
//       }}
//     >
//       <Header />
//       <Page />
//     </div>
//   );
// }

// function Root() {
//   return (
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>
//   );
// }

// export default Root;
