import Earth from '@/assets/earth.png';
import Image from 'next/image';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (values, { resetForm }) => {
    setIsLoading(true);
    emailjs
      .send('service_4uu6p5n', 'template_d0h39yh', values, 'MwuuGyU2QPzSfKX6d')
      .then((res: any) => {
        setIsLoading(false);
        toast.success('Email sent successfully!');
        resetForm();
      })
      .catch((err: any) => {
        setIsLoading(false);
        toast.error('Error sending email!');
      });
  };

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('*Full Name is required'),
      email: Yup.string()
        .email('*Invalid email address')
        .required('*Email is required'),
      message: Yup.string().required('*Message is required'),
    }),
    onSubmit: onSubmit,
  });

  return (
    <div className="w-full flex flex-col justify-center align-center">
      <h2 className="text-white text-[44px] mb-[24px] font-comfota text-center">
        Connect with us
      </h2>
      <div className="flex gap-[50px] w-full">
        <div className="flex justify-center align-center w-[50%]">
          <Image src={Earth} alt="earth" className="" />
        </div>
        <div className="flex flex-col w-[510px] gap-[20px]">
          <div className="w-full flex gap-[18px]">
            <input
              type="text"
              placeholder="First Name"
              className="w-[50%] p-[14px] rounded-[20px] bg-greyB text-black font-comfota"
            />
            <input
              type="text"
              placeholder="Second Name"
              className="w-[50%] p-[14px] rounded-[20px] bg-greyB text-black font-comfota"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="p-[14px] rounded-[20px] bg-greyB text-black font-comfota"
          />

          <select
            name="services"
            id="services"
            className="w-[100%] p-[14px] rounded-[20px] bg-greyB text-black font-comfota slect"
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
            id="message"
            placeholder="Message"
            className="p-[14px] rounded-[20px] bg-greyB text-black font-comfota"
          />
          <button
            className="border-[1px] border-contrast1 px-[32px] py-[12px] rounded-[22px] font-comfota text-white"
            onClick={() => onSubmit}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
