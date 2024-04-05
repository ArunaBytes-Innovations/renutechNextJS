"use client";

import React, { useState } from "react";

import Link from "next/link";

// const Register = () => {
//   const [page, setPage] = useState(1);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [contact, setContact] = useState("");
//   const [college, setCollege] = useState("");
//   const [registrationNo, setRegistrationNo] = useState("");
//   const [branch, setBranch] = useState("");
//   const [year, setYear] = useState("");
//   const [event1, setEvent1] = useState("");
//   const [event2, setEvent2] = useState("");
//   const [event3, setEvent3] = useState("");
//   const [event4, setEvent4] = useState("");
//   const [additionalEvent, setAdditionalEvent] = useState("");
//   const [paymentDate, setPaymentDate] = useState("");
//   const [transactionId, setTransactionId] = useState("");

//   // List of events
//   const Events = [
//     "mr and Miss  renutech",
//     "paper presentation",
//     "codeking",
//     "circuit puzzle",
//     "roboginators",
//     "bot blockade",
//     "robo soccer",
//     "jet set go",
//     "Tech AD",
//     "commandCAD",
//     "bridge affix",
//     "inovatex",
//     "Design Quest",
//     "frame game",
//     "Rubix",
//     "Legend squad",
//     "Knight of square board",
//     "Furious finders",
//     "Off-Cuff Odessey",
//     "Path Finders",
//     "Quizzards",
//     "cinematography",
//     "voice of heart",
//     "NrityaKala",
//     "SGT",
//     "rap war",
//     "perfect shot",
//     "nazm E rekhta",
//     "art fusion",
//     "prastuti",
//     "The Model Marvels",
//     "comedy Z remedy",
//   ];

//   const [showMessage, setShowMessage] = useState(false); // State to show/hide message
//   // on submit message
//   const SubmitMessage = () => {
//     return (
//       <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/60 z-10 flex justify-center items-center">
//         <div className="bg-white min-w-64 min-h-52 rounded-3xl shadow-xl p-5">
//           <p className="font-semibold bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 inline-block text-transparent bg-clip-text">
//             Thankyou For Registering!
//           </p>
//           <p>You will recive a confirmation Email shortly..</p>
//           <p className="mt-4">
//             NOTE : Share Payment Recipt by replyling to the mail.
//           </p>
//           <Link
//             href={"/"}
//             className="btn btn-accent font-mono uppercase text-xl mt-2"
//           >
//             Okay!
//           </Link>
//         </div>
//       </div>
//     );
//   };

//   const [showSubmiting, setShowSubmiting] = useState(false); // State to show/hide submiting form
//   const SubmitingForm = () => {
//     return (
//       <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/60 z-10 flex justify-center items-center">
//         <div className="bg-white min-w-64 min-h-52 rounded-3xl shadow-xl p-5 flex justify-center items-center">
//           {/* loading */}
//           <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
//         </div>
//       </div>
//     );
//   };

//   // Function to handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     setShowSubmiting(true); // Show submiting form
//     let events = [event1, event2, event3, event4].filter((event) => event); // Filter out empty event values

//     // Add additional event to events array if it is not empty
//     if (additionalEvent) {
//       const additionalEventArray = additionalEvent
//         .split(",")
//         .map((event) => event.trim());
//       events = [...events, ...additionalEventArray];
//     }

//     const formData = {
//       name,
//       email,
//       contact,
//       college,
//       registrationNo,
//       branch,
//       year,
//       events,
//       paymentDate,
//       transactionId,
//     };

//     console.log(formData);

//     try {
//       // Make POST request to your server endpoint
//       const response = await fetch("/api/students", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json", // Set content type to JSON
//         },
//         body: JSON.stringify(formData), // Send form data as JSON
//       });

//       if (response.ok) {
//         // Handle successful response
//         console.log("Form data submitted successfully!");
//         console.log(response);
//         setShowSubmiting(false); // Hide submiting form
//         setShowMessage(true); // Show success message
//         // Optionally, reset form fields or show a success message
//       } else {
//         // Handle error response
//         console.error("Failed to submit form data");
//         alert(er);
//         window.location.reload();
//       }
//     } catch (error) {
//       // Handle fetch error
//       console.error("Error occurred while submitting form data:", error);
//     }
//   };

//   return (
//     <div
//       className="flex justify-center items-center bg-gradient-to-b from-[#197fbd] from-10% via-[#5abeea] via-30% to-[#ffffff]"
//       style={{
//         fontFamily: "Shantell Sans, cursive",
//       }}
//     >
//       <div className="bg-base-200 bg-opacity-25 rounded-lg p-10 my-10 md:w-full lg:w-1/2 shadow-lg">
//         {/* heading  */}
//         <h1 className=" text-4xl py-2 font-semibold bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 inline-block text-transparent bg-clip-text">
//           Event Registration
//         </h1>

//         {/* steper web  */}
//         <div className="hidden md:flex my-10 justify-center w-full">
//           <ul className="steps w-full">
//             <li
//               onClick={() => setPage(1)}
//               className={`step cursor-pointer ${page > 0 && "step-primary"}`}
//             >
//               Basic Info
//             </li>
//             <li
//               onClick={() => setPage(2)}
//               className={`step cursor-pointer ${page > 1 && "step-primary"}`}
//             >
//               College Details
//             </li>
//             <li
//               onClick={() => setPage(3)}
//               className={`step cursor-pointer ${page > 2 && "step-primary"}`}
//             >
//               Event
//             </li>
//             <li
//               onClick={() => setPage(4)}
//               className={`step cursor-pointer ${page > 3 && "step-primary"}`}
//             >
//               Payment
//             </li>
//           </ul>
//         </div>

//         {/* steper mobile  */}
//         <div className="flex md:hidden my-10 justify-center w-full">
//           <div role="tablist" className="tabs tabs-bordered">
//             <a
//               role="tab"
//               onClick={() => setPage(1)}
//               className={`tab ${page == 1 && "tab-active"}`}
//             >
//               Info
//             </a>
//             <a
//               role="tab"
//               onClick={() => setPage(2)}
//               className={`tab ${page == 2 && "tab-active"}`}
//             >
//               College
//             </a>
//             <a
//               role="tab"
//               onClick={() => setPage(3)}
//               className={`tab ${page == 3 && "tab-active"}`}
//             >
//               Event
//             </a>
//             <a
//               role="tab"
//               onClick={() => setPage(4)}
//               className={`tab ${page == 4 && "tab-active"}`}
//             >
//               Payment
//             </a>
//           </div>
//         </div>

//         {/* form  */}
//         <form className="flex flex-col" onSubmit={handleSubmit}>
//           {/* page 1  */}
//           {page == 1 && (
//             <div>
//               <div className="flex flex-col">
//                 {/* Input for Name */}
//                 <label htmlFor="name">
//                   <span className=" text-red-600">*</span>Name:{" "}
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   required
//                   onChange={(e) => setName(e.target.value)}
//                   value={name}
//                   placeholder="Enter your name"
//                   className=" w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
//                 />
//                 {/* Input for Email */}
//                 <label htmlFor="email">
//                   <span className=" text-red-600">*</span>Email:{" "}
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="jondue@gmail.com"
//                   name="email"
//                   id="email"
//                   onChange={(e) => setEmail(e.target.value)}
//                   value={email}
//                   required
//                   className=" w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
//                 />
//                 {/* Input for Contact No */}
//                 <label htmlFor="contact">
//                   <span className=" text-red-600">*</span>Mobile No:{" "}
//                 </label>
//                 <input
//                   type="number"
//                   placeholder="91xxxxxxxx"
//                   name="contact"
//                   onChange={(e) => setContact(e.target.value)}
//                   value={contact}
//                   id="contact"
//                   required
//                   className=" w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
//                 />
//               </div>
//               <div className="flex justify-between pt-10">
//                 {name !== "" && email !== "" && contact !== "" ? (
//                   <button
//                     onClick={() => setPage(page + 1)}
//                     type="button"
//                     className="btn btn-success hover:bg-[#18aac6] bg-[#0ab4d5e0] border-none text-white"
//                   >
//                     Next
//                   </button>
//                 ) : (
//                   <button
//                     onClick={() => setPage(page + 1)}
//                     type="button"
//                     disabled
//                     className="btn btn-success hover:bg-[#18aac6] bg-[#0ab4d5e0] border-none text-white"
//                   >
//                     Next
//                   </button>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* page 2  */}
//           {page == 2 && (
//             <div>
//               <div className="flex flex-col">
//                 {/* Input for College Name */}
//                 <label htmlFor="college">
//                   <span className=" text-red-600">*</span>College Name:{" "}
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter your Institute name"
//                   name="college"
//                   id="college"
//                   onChange={(e) => setCollege(e.target.value)}
//                   value={college}
//                   required
//                   className=" w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
//                 />
//                 {/* Input for Registration No */}
//                 <label htmlFor="registrationNo">
//                   <span className=" text-red-600">*</span>Registration No:{" "}
//                 </label>
//                 <input
//                   type="number"
//                   placeholder="2x1xxxxxxxx"
//                   name="registrationNo"
//                   id="registrationNo"
//                   value={registrationNo}
//                   onChange={(e) => setRegistrationNo(e.target.value)}
//                   required
//                   className=" w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
//                 />
//                 {/* Input for Branch */}
//                 <label htmlFor="branch">
//                   <span className=" text-red-600">*</span>Branch:
//                 </label>

//                 <input
//                   type="text"
//                   placeholder="xxxxxx Engineering"
//                   name="branch"
//                   id="branch"
//                   value={branch}
//                   onChange={(e) => setBranch(e.target.value)}
//                   required
//                   className=" w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
//                 />
//                 {/* Input for student Year */}
//                 <label htmlFor="year" className="">
//                   <span className=" text-red-600">*</span>Year:
//                 </label>
//                 <select
//                   id="year"
//                   name="year"
//                   onChange={(e) => setYear(e.target.value)}
//                   value={year}
//                   required
//                   className=" block  w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
//                 >
//                   <option disabled selected hidden value="">
//                     current Year
//                   </option>
//                   <option value="1st">1st Year</option>
//                   <option value="2nd">2nd Year</option>
//                   <option value="3rd">3rd Year</option>
//                   <option value="4th">4th Year</option>
//                 </select>
//               </div>
//               <div className="flex justify-between pt-10">
//                 <button
//                   onClick={() => setPage(page - 1)}
//                   type="button"
//                   className="btn btn-outline outline-none border-none bg-[#ff7f7f] text-white hover:bg-[#df6e6e]"
//                 >
//                   Back
//                 </button>

//                 {college !== "" &&
//                 registrationNo !== "" &&
//                 branch !== "" &&
//                 year !== "" ? (
//                   <button
//                     onClick={() => setPage(page + 1)}
//                     type="button"
//                     className="btn btn-success hover:bg-[#18aac6] bg-[#0ab4d5e0] border-none text-white"
//                   >
//                     Next
//                   </button>
//                 ) : (
//                   <button
//                     onClick={() => setPage(page + 1)}
//                     type="button"
//                     className="btn btn-success hover:bg-[#18aac6] bg-[#0ab4d5e0] border-none text-white"
//                     disabled
//                   >
//                     Next
//                   </button>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* page 3  */}
//           {page == 3 && (
//             <div>
//               <div>
//                 <h2 className="font-semibold text-center border-2 p-1 rounded-lg shadow-md bg-blue-300 my-2">
//                   Event Registraion Fee &#8377;300 for 4 events.. &#8377;100 per
//                   additional event.
//                 </h2>
//                 {/* Input for Event 1 */}
//                 <label htmlFor="event_first" className="">
//                   <span className=" text-red-600">*</span>Event 1:
//                 </label>
//                 {/* Select for Event 1 compulsory */}
//                 <select
//                   id="event_first"
//                   name="event_first"
//                   required
//                   value={event1}
//                   onChange={(e) => setEvent1(e.target.value)}
//                   className=" block  w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
//                 >
//                   <option disabled selected hidden value="">
//                     Choose event
//                   </option>
//                   {Events.map((event, index) => (
//                     <option className=" capitalize" key={index} value={event}>
//                       {event}
//                     </option>
//                   ))}
//                 </select>
//                 {/* Input for Event 2 */}
//                 <label htmlFor="event_secound" className="">
//                   Event 2:
//                 </label>
//                 <select
//                   id="event_secound"
//                   name="event_secound"
//                   className=" block  w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
//                   value={event2}
//                   onChange={(e) => setEvent2(e.target.value)}
//                 >
//                   <option disabled selected hidden value="">
//                     Choose event
//                   </option>
//                   {Events.map((event, index) => (
//                     <option className=" capitalize" key={index} value={event}>
//                       {event}
//                     </option>
//                   ))}
//                 </select>
//                 {/* Input for Event 3 */}
//                 <label htmlFor="event_third" className="">
//                   Event 3:
//                 </label>
//                 <select
//                   id="event_third"
//                   name="event_third"
//                   className=" block  w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
//                   value={event3}
//                   onChange={(e) => setEvent3(e.target.value)}
//                 >
//                   <option disabled selected hidden value="">
//                     Choose event
//                   </option>
//                   {Events.map((event, index) => (
//                     <option className=" capitalize" key={index} value={event}>
//                       {event}
//                     </option>
//                   ))}
//                 </select>
//                 {/* Input for Event 4 */}
//                 <label htmlFor="event_fourth" className="">
//                   Event 4:
//                 </label>
//                 <select
//                   id="event_fourth"
//                   name="event_fourth"
//                   className=" block  w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
//                   value={event4}
//                   onChange={(e) => setEvent4(e.target.value)}
//                 >
//                   <option disabled selected hidden value="">
//                     Choose event
//                   </option>
//                   {Events.map((event, index) => (
//                     <option className=" capitalize" key={index} value={event}>
//                       {event}
//                     </option>
//                   ))}
//                 </select>
//                 {/* Input for Additional Event */}
//                 <label htmlFor="additional">
//                   Additional event name :{" "}
//                   <span className=" text-blue-400 text-sm">
//                     (if any use {", "} to seprate)
//                   </span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="codeking, paper presentation, rubix"
//                   name="additional"
//                   id="additional"
//                   value={additionalEvent}
//                   onChange={(e) => setAdditionalEvent(e.target.value)}
//                   className=" block  w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
//                 />
//               </div>
//               <div className="flex justify-between pt-10">
//                 <button
//                   onClick={() => setPage(page - 1)}
//                   type="button"
//                   className="btn btn-outline outline-none border-none bg-[#ff7f7f] text-white hover:bg-[#df6e6e]"
//                 >
//                   Back
//                 </button>

//                 {event1 !== "" ? (
//                   <button
//                     onClick={() => setPage(page + 1)}
//                     type="button"
//                     className="btn btn-success hover:bg-[#18aac6] bg-[#0ab4d5e0] border-none text-white"
//                   >
//                     Next
//                   </button>
//                 ) : (
//                   <button
//                     onClick={() => setPage(page + 1)}
//                     type="button"
//                     className="btn btn-success hover:bg-[#18aac6] bg-[#0ab4d5e0] border-none text-white"
//                     disabled
//                   >
//                     Next
//                   </button>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* page 4  */}
//           {page == 4 && (
//             <div>
//               <div>
//                 <div className="flex flex-col justify-center items-center text-center md:text-left">
//                   <p className="pb-2">Scan the QR code</p>
//                   <img
//                     className="w-40 h-auto"
//                     src="/assets/payment_qr.png"
//                     alt="qr"
//                   />
//                   <span className="text-gray-500">or</span>
//                   <p className="pb-4">
//                     Pay to UPI ID:{" "}
//                     <span className="text-red-600">
//                       principalspnrec@ucobank
//                     </span>
//                   </p>
//                   <p className="p-2 font-semibold font-mono underline">
//                     Note<span className="text-red-600">*</span>: Please add
//                     remarks during payment &apos;
//                     <span className="text-red-500 font-bold">
//                       RenuTech Registration - Your Registation No.
//                     </span>
//                     &apos;
//                   </p>
//                 </div>
//                 <div className="cont-1">
//                   {/* Input for Payment Date */}
//                   <label htmlFor="date">
//                     <span className=" text-red-600">*</span>Payment Date:{" "}
//                   </label>
//                   <input
//                     type="date"
//                     name="date"
//                     id="date"
//                     required
//                     value={paymentDate}
//                     onChange={(e) => setPaymentDate(e.target.value)}
//                     className=" block  w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
//                   />
//                   {/* Input for Transaction ID */}
//                   <label htmlFor="transaction">
//                     <span className=" text-red-600">*</span>Transaction ID:{" "}
//                   </label>
//                   <input
//                     type="text"
//                     name="transaction"
//                     id="transaction"
//                     required
//                     placeholder="Enter your transaction ID"
//                     value={transactionId}
//                     onChange={(e) => setTransactionId(e.target.value)}
//                     className=" block  w-full bg-white text-base border border-base-300 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary-500"
//                   />
//                   {/* Input for Payment Proof */}
//                 </div>
//               </div>
//               <div className="flex justify-between pt-10">
//                 <button
//                   onClick={() => setPage(page - 1)}
//                   type="button"
//                   className="btn btn-outline outline-none border-none bg-[#ff7f7f] text-white hover:bg-[#df6e6e]"
//                 >
//                   Back
//                 </button>

//                 {paymentDate !== "" && transactionId !== "" ? (
//                   <button type="submit" className="btn btn-accent  text-white">
//                     Submit
//                   </button>
//                 ) : (
//                   <button
//                     onClick={() => setPage(page + 1)}
//                     className="btn btn-success"
//                     disabled
//                   >
//                     Submit
//                   </button>
//                 )}
//               </div>
//             </div>
//           )}
//         </form>
//       </div>

//       {showMessage && <SubmitMessage />}
//       {showSubmiting && <SubmitingForm />}
//     </div>
//   );
// };

const Register = () => {
  return <div>Not Found</div>;
};

export default Register;
