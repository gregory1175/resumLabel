// import emailjs from "@emailjs/browser";
// import { useState } from "react";

// const [error, SetError] = useState(null);
// export const sendEmail = (e: any) => {
//   e.preventDefault();

//   emailjs
//     .sendForm(
//       import.meta.env.VITE_EMAILJS_SERVICE_ID,
//       import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
//       formRef.current,
//       import.meta.env.VITE_EMAILJS_PUBLIC_KEY
//     )
//     .then(
//       (res) => {
//         SetError(false);
//         console.log(res.text);
//       },
//       (error) => {
//         SetError(true);
//         console.log(error);
//       }
//     );
// };
