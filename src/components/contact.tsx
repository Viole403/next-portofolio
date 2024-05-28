'use client';

import React, { FC, useRef } from 'react';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const send = async (data: any) => {
    // Send the form data
    try {
      const recaptchaValue = recaptchaRef.current?.getValue();
      const response = await fetch('https://example.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, recaptchaValue }),
      });
      const result = await response.json();
      if (result.status === 'success') {
        console.log('Message sent successfully');
      } else {
        console.log('Failed to send message');
      }
    } catch (error) {
      console.log('Error sending message:', error);
    }
  };

  return (
    <section className="section bg-light" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="card bg-white"
              style={{
                background: 'url(images/personal/testi-pet.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '15%',
                backgroundPosition: 'right bottom',
              }}
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-md-8">
                    <h2 className="fs-2 fw-normal lh-1 text-dark mb-3">
                      Get in touch !
                    </h2>
                    <p className="text-gray-700 fs-18 fs-lg mb-4 mb-md-5 ">
                      Always available for freelancing if the right project{' '}
                      <br /> comes along, Feel free to contact me.
                    </p>
                    <form onSubmit={handleSubmit(send)}>
                      <span id="error-msg" />
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label
                            className="fw-medium form-label fs-16"
                            htmlFor="name"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Your name"
                            id="name"
                            {...register('name', { required: true })}
                          />
                          {errors.name && <span>This field is required</span>}
                        </div>
                        {/* end col */}
                        <div className="col-md-6 mb-3">
                          <label
                            className="fw-medium form-label  fs-16"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Your email"
                            id="email"
                            {...register('email', { required: true })}
                          />
                          {errors.email && <span>This field is required</span>}
                        </div>
                        {/* end col */}
                        <div className="col-md-6 mb-3">
                          <label
                            className="fw-medium form-label  fs-16"
                            htmlFor="subject"
                          >
                            Subject
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="your subject"
                            id="subject"
                            {...register('subject', { required: true })}
                          />
                          {errors.subject && (
                            <span>This field is required</span>
                          )}
                        </div>
                        {/* end col */}
                        <div className="col-md-6 mb-3">
                          <label
                            className="fw-medium form-label  fs-16"
                            htmlFor="number"
                          >
                            Contact
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="+00 1234 5678 90"
                            id="contact"
                            {...register('contact', { required: true })}
                          />
                          {errors.contact && (
                            <span>This field is required</span>
                          )}
                        </div>
                        {/* end col */}
                        <div className="col-12 mb-3">
                          <label
                            className="fw-medium form-label  fs-16"
                            htmlFor="comments"
                          >
                            Message
                          </label>
                          <textarea
                            className="form-control"
                            id="comments"
                            placeholder="Enter your message..."
                            rows={5}
                            defaultValue={''}
                            {...register('comments', { required: true })}
                          />
                          {errors.comments && (
                            <span>This field is required</span>
                          )}
                        </div>
                        {/* end col */}
                        <div className="col-12 d-flex align-items-center flex-column flex-sm-row">
                          <input
                            type="submit"
                            id="submit"
                            name="send"
                            className="btn btn-primary btn-lg mt-2 ms-2 mb-2 col-sm-4 col-12 px-4"
                            defaultValue="Send message"
                          />
                          <ReCAPTCHA
                            ref={recaptchaRef}
                            className="px-4 mt-4 mt-sm-0 mb-4"
                            sitekey="6LcEKJIpAAAAACIdaZiKKP7SGO3uYcVS-T6__l1_"
                          />
                        </div>
                        {/* end col */}
                      </div>
                      {/*end row*/}
                    </form>
                    {/* end form */}
                  </div>
                  {/* end col */}
                  <div className="col-md-4">
                    <img
                      src="images/personal/contact.svg"
                      alt=""
                      height={200}
                      className=" mx-auto d-block mb-5"
                    />
                    <div className="d-flex">
                      <div className="bg-light d-flex justify-content-center align-items-center thumb-lg  rounded">
                        <i className="ti ti-phone fs-22" />
                      </div>
                      <div className="align-self-center ms-3">
                        <span className="d-block ">+1 234 567 89</span>
                        <span className="text-muted fs-14 mt-n2">
                          9:00am to 7:00pm
                        </span>
                      </div>
                    </div>
                    <hr className="hr-dashed my-3" />
                    <div className="d-flex">
                      <div className="bg-light d-flex justify-content-center align-items-center thumb-lg  rounded">
                        <i className="ti ti-mail fs-22" />
                      </div>
                      <div className="align-self-center ms-3">
                        <span className="d-block">example@example.com</span>
                        <span className="text-muted fs-14 mt-n2">
                          Monday to Saturday
                        </span>
                      </div>
                    </div>
                  </div>
                  {/*end col*/}
                </div>
                {/* end row */}
              </div>
              {/*end card-body*/}
            </div>
            {/*end card*/}
          </div>
          {/* end col */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </section>
  );
};

export default Contact;
