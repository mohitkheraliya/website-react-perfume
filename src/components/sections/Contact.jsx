import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const phoneRegex = /^[0-9]{10}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullname ||
      !formData.mobile ||
      !formData.email ||
      !formData.message
    ) {
      setIsFormValid(false);
      toast.error("Please fill in all fields.");
      return;
    }

    if (!phoneRegex.test(formData.mobile)) {
      setIsPhoneValid(false);
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsLoading(true);

    emailjs
      .send(
        "service_oekg9db",
        "template_d5px8tz",
        formData,
        "ABmZUWaQvZDS4Sp6s"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully! ");
          setFormData({
            fullname: "",
            mobile: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="contact flex justify-center py-[5rem] px-[5rem] tab-md:flex-col tab-md:items-center mb:py-[3rem] mb:px-[5rem] mb-small:px-[2.5rem] xsmall:py-[1rem]"
    >
      <div className="contact__content w-full flex flex-col max-w-[50rem] mt-6 text-white tab:max-w-[40rem] tab-md:max-w-[60rem]">
        <h1 className="w-full text-white  justify-center text-[3.5rem] tab-sm:text-[3.3rem] mb-medium:hidden">
          Ready to get in touch with Angel Perfumery
        </h1>
        <h1 className="w-full text-white  justify-center text-[3.5rem] tab-sm:text-[3.3rem] hidden mb-medium:block">
          Get in touch with Angel Perfumery
        </h1>
        <p className="paragraph mt-8">
          Have a question, special request, or feedback? We’re passionate about
          helping you find a fragrance that’s uniquely yours. Drop us a message
          and our team will respond within 24 hours.
        </p>

        <ul className="flex flex-col mt-20 gap-10 tab-md:m-auto tab-md:mt-16 tab-sm:self-start tab-sm:ml-0">
          <li className="flex gap-8 items-center mb-small:flex-col">
            <div className="contact__icon p-[2rem] mb-small:p-[1rem]">
              <BsTelephoneFill size={34} />
            </div>

            <div className="contact__content">
              <p>Have any questions ?</p>
              <a href="tel:9512891212">
                <h4>+919512891212</h4>
              </a>
            </div>
          </li>

          <li className="flex gap-8 items-center mb-small:flex-col">
            <div className="contact__icon p-[2rem] mb-small:p-[1rem]">
              <HiOutlineMail size={35} />
            </div>

            <div className="contact__content">
              <p>Write email</p>
              <a href="mailto:angelperfumery1212@gmail.com">
                <h4>angelperfumery1212@gmail.com</h4>
              </a>
            </div>
          </li>

          <li className="flex gap-8 items-center mb-small:flex-col">
            <div className="contact__icon p-[2rem] mb-small:p-[1rem]">
              <FaMapMarkerAlt size={35} />
            </div>

            <div className="contact__content">
              <p>Visit anytime</p>
              <h4 className="inline-block">
                Shop No.24, Shivshakti Market, opp. Trilolnath Mahadev Mandir,
                Char Rasta, Bapunagar, Ahmedabad, Gujarat 380024
              </h4>
            </div>
          </li>
        </ul>

        <div className="mt-10 flex items-center gap-4"></div>
      </div>

      <div className="contact__form max-w-[60rem] p-[2rem] tab-sm:p-0 ">
        <form
          onSubmit={handleSubmit}
          className="w-full gap-[1.5rem] py-[3rem] px-[6rem] tab-sm:px-[3rem]"
        >
          <h1 className="heading-2 text-white mb-2">Let’s Connect.</h1>
          <p className="paragraph mb-10">
            Your email address will not be published. Required fields are
            marked*
          </p>
          <div className="mb-6">
            <input
              type="text"
              id="fullname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your name"
              value={formData.fullname}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  fullname: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-6">
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-6">
            <input
              type="text"
              id="mobile"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Phone number"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  mobile: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-8">
            <textarea
              type="text"
              id="message"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write a message"
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
            />
          </div>

          <button
            type="submit"
            className="btn-submit mt-4 cursor-pointer self-start px-6 py-2 rounded bg-blue-600 text-white disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send a message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
