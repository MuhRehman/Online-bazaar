import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default  function  Contacting() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    for (let [name, value] of formData.entries()) { 
      
      console.log(name + ': ' + value);     
    }
    emailjs
      .sendForm('service_orn8qus', 'template_cvli2eu', form.current, {
        publicKey: 'RVexvYjiVu510ZPTx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("SUCCESS Sent!");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
   <div>
    
   </div>
  );
};