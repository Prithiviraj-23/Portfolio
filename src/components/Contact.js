import React from "react";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { Globe } from "lucide-react";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import linkedin_icon from "../photo/linkedin_icon.png";
import github_icon from "../photo/github_icon.png";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_a93gp7w", // Replace with your EmailJS service ID
        "template_7s2dnsl", // Replace with your EmailJS template ID
        formData,
        "R87_k5R_M9lzFOP_f" // Replace with your EmailJS public key
      )
      .then(
        () => alert("Email sent successfully!"),
        (error) => alert("Failed to send email: " + error.text)
      );
    setFormData({ name: "", email: "", message: "", subject: "" });
  };

  return (
    <div className="col-span-4 dark:bg-gray-950 bg-gray-300 dark:text-white w-full py-10 flex flex-col gap-10 px-6 box-border overflow-y-scroll">
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <div className="flex flex-col gap-10 box-boxder">
        <div className="flex flex-col gap-1 items-center justify-center max-w-full  ">
          <h1 className="text-red-500 text-xl">Have Your Any Questins?</h1>
          <p className="font-bold text-sm">I'M AT YOUR SERVICE</p>
        </div>
        <div class="grid grid-cols-4 gap-8 max-sm:grid-cols-2">
          <div class="flex flex-row justify-center">
            <div class="flex w-32 flex-col items-center gap-2">
              <Phone size={30} strokeWidth={2} color="red" />
              <h2 class="font-bold">Call us on</h2>
              <p class="text-sm">9361354316</p>
            </div>
          </div>
          <div class="flex flex-row justify-center">
            <div class="flex w-32 flex-col items-center gap-2">
              <MapPin size={30} strokeWidth={2} color="red" />
              <h2 class="font-bold">Location</h2>
              <p class="text-sm">peravurani,Thanjavur</p>
            </div>
          </div>
          <div class="flex flex-row justify-center">
            <div class="flex w-32 flex-col items-center gap-2">
              <Mail size={30} strokeWidth={2} color="red" />
              <h2 class="font-bold">Email</h2>
              <p class="text-sm">prithiviraj.r2022cse.sece</p>
            </div>
          </div>
          <div class="flex flex-row justify-center">
            <div class="flex w-32 flex-col items-center gap-2">
              <Globe size={30} strokeWidth={2} color="red" />
              <h2 class="font-bold">Website</h2>
              <p class="text-sm">www.domain</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center justify-center max-w-full  ">
          <h1 className="text-red-500 text-xl">SEND ME AN EMAIL</h1>
          <p className="font-bold text-sm">I'M VERY RESPONSIVE TO MESSAGES</p>
        </div>

        <div class="flex flex-col gap-5 box-border text-black">
          <div class="yellow grid grid-cols-2 max-sm:grid-cols-1 gap-5">
            <input
              type="text "
              class="h-9 rounded-lg px-2"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
            <input
              type="text"
              class="h-9 rounded-lg px-2"
              placeholder="Email"
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          <input
            type="text"
            class="h-9 rounded-lg px-2"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            class="max-h-full w-full rounded-md px-2"
            placeholder="Message"
            onChange={handleChange}
            value={formData.message}
            name="message"
          ></textarea>
          <button
            className="flex flex-row rounded-lg bg-red-500 max-w-fit px-2"
            onClick={handleSubmit}
          >
            Send Mail{" "}
          </button>
        </div>
      </div>

      <div className="flex flex-row gap-3">
        <Link to="https://www.linkedin.com/in/prithivi-raj-r-3b9914243/">
          {" "}
          <img src={linkedin_icon} width={30} height={30} />{" "}
        </Link>
        <Link to="https://github.com/Prithiviraj-23">
          {" "}
          <img src={github_icon} width={30} height={30} />{" "}
        </Link>
      </div>
    </div>
  );
}
