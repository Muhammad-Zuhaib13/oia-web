"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import PolygonBg from "../common/PolygonBg";
import ScreenContainer from "../common/ScreenContainer";

const InvestorRelForm = ({ data, locale }: any) => {
  const { title } = data || {};

  const initialValues = {
    fullName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    typeOfRequest: "",
    message: "",
  };

  const validationSchema = Yup.object({
    // Add your validation rules here
    fullName: Yup.string().required(
      "Full name is required",
    ),
    lastName: Yup.string().required(
      "Last name is required",
    ),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string().required(
      "Phone number is required",
    ),
    company: Yup.string().required("Company is required"),
    typeOfRequest: Yup.string().required(
      "Type of request is required",
    ),
    message: Yup.string().required("Message is required"),
  });
  const options = [
    {
      id: 1,
      label: "Information Inquiries",
    },
    {
      id: 2,
      label: "Investment Inquiries",
    },
    {
      id: 3,
      label: "Request for Meeting",
    },
  ];
  return (
    <PolygonBg>
      <ScreenContainer>
        <div className="flex flex-col gap-[50px]">
          {title && (
            <h2
              className={`mainHeading rtl:font-TajawalBold`}
            >
              {title}
            </h2>
          )}
          <div className="investor-form">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                // Handle form submission here
                console.log(values);
                toast.success(
                  "Form submitted successfully!",
                );
                resetForm();
              }}
            >
              {({ handleChange, values }) => (
                <Form className="contactus-form-wrapper flex flex-col lg:gap-[30px] gap-[20px]">
                  <div className="grid lg:grid-cols-3 lg:gap-[30px] sm:grid-cols-2 gap-[20px] grid-cols-1">
                    <div className="flex w-full  flex-col gap-[10px]">
                      <label
                        htmlFor="fullName"
                        className="rlt:font-GESndBookMedium font-DINAMedium text-[16px] font-medium leading-[20px] text-[#646464]"
                      >
                        Full Name *
                      </label>
                      <Field
                        name="fullName"
                        placeholder="Enter first name"
                        className="rtl:placeholder:font-GESndBookRegular h-[46px] w-full rounded-[6px] border border-[#E1E1E1] px-[16px] placeholder:font-DINARegular  placeholder:text-[14px] placeholder:font-normal"
                      />
                      <ErrorMessage
                        name="fullName"
                        component="small"
                        className="text-[#dc3232]"
                      />
                    </div>
                    <div className="flex w-full  flex-col gap-[10px]">
                      <label
                        htmlFor="lastName"
                        className="rlt:font-GESndBookMedium font-DINAMedium text-[16px] font-medium leading-[20px] text-[#646464]"
                      >
                        Last Name *
                      </label>
                      <Field
                        name="lastName"
                        placeholder="Enter last name"
                        className="rtl:placeholder:font-GESndBookRegular h-[46px] w-full rounded-[6px] border border-[#E1E1E1] px-[16px] placeholder:font-DINARegular  placeholder:text-[14px] placeholder:font-normal"
                      />
                      <ErrorMessage
                        name="lastName"
                        component="small"
                        className="text-[#dc3232]"
                      />
                    </div>
                    <div className="flex w-full  flex-col gap-[10px]">
                      <label
                        htmlFor="email"
                        className="rlt:font-GESndBookMedium font-DINAMedium text-[16px] font-medium leading-[20px] text-[#646464]"
                      >
                        Email *
                      </label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Your email address here"
                        className="rtl:placeholder:font-GESndBookRegular h-[46px] w-full rounded-[6px] border border-[#E1E1E1] px-[16px] placeholder:font-DINARegular  placeholder:text-[14px] placeholder:font-normal"
                      />
                      <ErrorMessage
                        name="email"
                        component="small"
                        className="text-[#dc3232]"
                      />
                    </div>
                    <div className="flex w-full  flex-col gap-[10px]">
                      <label
                        htmlFor="email"
                        className="rlt:font-GESndBookMedium font-DINAMedium text-[16px] font-medium leading-[20px] text-[#646464]"
                      >
                        Phone Number *
                      </label>
                      <Field
                        name="phoneNumber"
                        placeholder="Your phone number"
                        className="rtl:placeholder:font-GESndBookRegular h-[46px] w-full rounded-[6px] border border-[#E1E1E1] px-[16px] placeholder:font-DINARegular  placeholder:text-[14px] placeholder:font-normal"
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        component="small"
                        className="text-[#dc3232]"
                      />
                    </div>
                    <div className="flex w-full  flex-col gap-[10px]">
                      <label
                        htmlFor="email"
                        className="rlt:font-GESndBookMedium font-DINAMedium text-[16px] font-medium leading-[20px] text-[#646464]"
                      >
                        Company *
                      </label>
                      <Field
                        name="company"
                        placeholder="Company"
                        className="rtl:placeholder:font-GESndBookRegular h-[46px] w-full rounded-[6px] border border-[#E1E1E1] px-[16px] placeholder:font-DINARegular  placeholder:text-[14px] placeholder:font-normal"
                      />
                      <ErrorMessage
                        name="company"
                        component="small"
                        className="text-[#dc3232]"
                      />
                    </div>
                    <div className="flex w-full  flex-col gap-[10px]">
                      <label
                        htmlFor="typeOfRequest"
                        className="rlt:font-GESndBookMedium font-DINAMedium text-[16px] font-medium leading-[20px] text-[#646464]"
                      >
                        Type of Request *
                      </label>
                      <Field
                        as="select"
                        name="typeOfRequest"
                        className={`rtl:placeholder:font-GESndBookRegular request-select h-[46px] w-full rounded-[6px] border border-[#E1E1E1] px-[16px] placeholder:font-DINARegular placeholder:text-[14px] placeholder:font-normal ${locale === "en" ? "request-select-en" : "request-select-ar"}`}
                      >
                        {options?.map((option) => (
                          <option
                            key={option.id}
                            value={option.label}
                          >
                            {option.label}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="typeOfRequest"
                        component="small"
                        className="text-[#dc3232]"
                      />
                    </div>
                  </div>
                  <div className=" flex w-full flex-col gap-[10px]">
                    <label
                      htmlFor="message"
                      className="rlt:font-GESndBookMedium font-DINAMedium text-[16px] font-medium leading-[20px] text-[#646464]"
                    >
                      Message *
                    </label>
                    <div className="flex flex-col">
                      <Field
                        name="message"
                        as="textarea"
                        placeholder="Your message here"
                        className="rtl:placeholder:font-GESndBookRegular h-[102px] resize-none rounded-[6px] p-[16px]  placeholder:font-DINARegular placeholder:text-[14px] placeholder:font-normal"
                      />
                      <ErrorMessage
                        name="message"
                        component="small"
                        className="text-[#dc3232]"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="paragraph w-auto rounded-[4px] bg-[#9E8557] px-[20px] py-[9px] !text-white rtl:font-TajawalRegular"
                    >
                      {locale === "en" ? "Submit" : "إرسال"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <ToastContainer />
      </ScreenContainer>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={locale === "ar"}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className={`${locale === "en" ? "!font-DINAMedium" : "!GESndBookMedium"}`}
      />
    </PolygonBg>
  );
};

export default InvestorRelForm;
