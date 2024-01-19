'use client'
import React from "react";
import Container from "../ui/Container";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Cookies from "js-cookie";



const Page = () => {
  const router = useRouter()

  const handleSignIn = async (values, { setErrors, setSubmit }) => {
    try {
      const response = await fetch('http://localhost:4010/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values),
      })
      if (!response.ok) {
        const errorData = await response.json();
        setErrors({ message: errorData.message || 'Server error' });
      } 
      else {
        const signedInUser = await response.json();
        const userToken = signedInUser.token; 
        const userId = signedInUser.id; 
        console.log('userToken:', userToken);
        console.log('userId:', userId);

        Cookies.set('token', userToken, { expires: 7 });
        Cookies.set('userId', userId, { expires: 7 });
        router.push('/');
      }

    } catch (error) {
      console.error('there is a', error);
    } finally {
      setSubmit(false)
    }
  }

  return (
    <div>
      <div className="p-4 pt-8 w-3/4 m-auto">
        <img
          style={{ height: "30px" }}
          src="https://i.postimg.cc/nLqmXLC3/Linkedin-logo-png.png"
          alt="Linkdin-logo"
        />
      </div>

      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values => {
          const errors = {}
          if (!values.email) {
            errors.email = 'required'
          }
          if (!values.password) {
            errors.password = 'required'
          }
          return errors
        })}
        onSubmit={(values, { setErrors, setSubmitting }) => handleSignIn(values, { setErrors, setSubmit: setSubmitting })}
      >
        <div className="bg-white rounded p-6 w-full  sm:w-1/2 xl:w-1/4 m-auto shadow-sm">
          <Form action="" className="flex flex-col gap-3">

            <h3 className="text-3xl font-semibold ">Sign in</h3>
            <div className="flex flex-col">

              <Field
                className="border border-gray-700  rounded p-1 px-3"
                id="email"
                type="email"
                name='email'
                placeholder="Email address"
              />
              <div className='text-red-500 text-xs mt-1'>
                <ErrorMessage name='email' />
              </div>
            </div>
            <div className="flex flex-col">

              <Field
                className="border border-gray-700  rounded p-1 px-3"
                id="password"
                type="password"
                name='password'
                placeholder="Password"
              />
              <div className='text-red-500 text-xs mt-1'>
                <ErrorMessage name="password" />
              </div>
            </div>
            <Link href='#' className="text-blue-700 hover:underline font-semibold">Forgot password?</Link>
            <button type="submit" className="bg-blue-600 text-white text-bold py-3 rounded-full hover:bg-blue-700">
              Sign in
            </button>
            <p className="p-2 px-5 text-sm text-gray-500 font-semibold text-center">
              New to Linkedin? {" "}
              <Link className="text-blue-700 hover:underline" href="#">
                Join now
              </Link>{" "}

            </p>
          </Form>
        </div>
      </Formik>

    </div>
  );
};

export default Page;
