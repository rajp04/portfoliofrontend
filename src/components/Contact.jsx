import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const contact = async (e) => {
    e.preventDefault();
    const res = await fetch('https://rajportfoilobackend.onrender.com/contact', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    })

      .then(res => res.json())
      .then(data => {
        if (data.alertMessage) {
          alert(data.alertMessage);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form method="post" className="flex flex-col flex-1 gap-5">
            <input type="text" name="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" name="email" placeholder="Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" />
            <textarea placeholder="Your Message" name="message" rows={10} value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
            <button className="btn-primary w-fit" onClick={contact}>Send Message</button>
          </form>
          <div className="flex flex-col gap-7 ">
            <div className="flex items-center">
              <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full pt-2">
                <span>
                  <ion-icon name="mail"></ion-icon>
                </span>
              </div>
              <div className="pl-3">rajpatelrajpatel0410@gmail.com</div>
            </div>
            <div className="flex items-center">
              <div className="min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full pt-2">
                <span>
                  <ion-icon name="location"></ion-icon>
                </span>
              </div>
              <div className="pl-3">Ahmedabad, India</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
