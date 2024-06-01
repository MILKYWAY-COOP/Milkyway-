import Earth from "@/assets/earth.png";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import FadeInWhenVisible from "@/utils/fadeInWhenVisible";
import {
  FadeInRightWhenVisible,
  FadeInLeftWhenVisible,
} from "@/utils/fadeInWhenVisible";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      from_name: "",
      email: "",
      service: "",
      message: "",
    },
    validationSchema: Yup.object({
      from_name: Yup.string().required("*Name is required"),
      email: Yup.string()
        .email("*Invalid email address")
        .required("*Email is required"),
      service: Yup.string().required("*Service selection is required"),
      message: Yup.string().required("*Message is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log(values);

      setIsLoading(true);
      emailjs
        .send(
          "service_4uu6p5n",
          "template_eqfpl7p",
          values,
          "MwuuGyU2QPzSfKX6d"
        )
        .then((res) => {
          setIsLoading(false);
          toast.success("Email sent successfully!");
          resetForm();
        })
        .catch((err) => {
          setIsLoading(false);
          toast.error("Error sending email!");
        });
    },
  });

  return (
    <motion.div
      className="w-full flex flex-col justify-center align-center"
      id="Contact Us"
      initial="hidden"
      animate="visible"
    >
      <FadeInWhenVisible>
        <h2 className="text-white text-[26px] lg:text-[44px] mb-[24px] font-comfota text-center">
          Connect with us
        </h2>
      </FadeInWhenVisible>
      <div className="flex justify-between items-center w-full lg:flex-row flex-col">
        <FadeInLeftWhenVisible className="flex justify-center align-center lg:w-[50%]">
          <Image src={Earth} alt="earth" className="hover:rotate-180" />
        </FadeInLeftWhenVisible>
        <FadeInRightWhenVisible className="h-full lg:w-[50%] w-[100%]">
          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col  gap-[20px] justify-center align-center"
          >
            <div className="w-full flex gap-[18px]">
              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                className="w-[100%] p-[14px] rounded-[5px] bg-greyB text-black font-comfota"
                onChange={formik.handleChange}
                value={formik.values.from_name}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-[14px] rounded-[5px] bg-greyB text-black font-comfota"
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            <select
              name="service"
              className="w-[100%] p-[14px] rounded-[5px] bg-greyB text-black font-comfota"
              onChange={formik.handleChange}
              value={formik.values.service}
            >
              <option value="">Choose Service</option>
              <option value="Front End">Front End</option>
              <option value="Back End">Back End</option>
              <option value="Servers & DevOps">Servers & DevOps</option>
              <option value="Databases">Databases</option>
              <option value="Other">Other</option>
            </select>
            <textarea
              name="message"
              placeholder="Message"
              className="p-[14px] rounded-[5px] bg-greyB text-black font-comfota"
              onChange={formik.handleChange}
              value={formik.values.message}
              rows={5}
            />
            <button
              type="submit"
              className="border-[1px] border-contrast1 px-[32px] py-[12px] rounded-[5px] font-comfota text-white "
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </form>
        </FadeInRightWhenVisible>
      </div>
      <Toaster />
    </motion.div>
  );
}
