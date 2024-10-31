"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { forms, setFontFamily } from "../../data/data";
import ScreenContainer from "../screencontainer/ScreenContainer";
type FieldType = {
  fullname?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
};

const ContactForm: React.FC<any> = ({ data, locale }) => {
  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    company: "",
    message: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    company: Yup.string().required("Company is required"),
    message: Yup.string().required("Message is required"),
  });

  const convertArabicNumerals = (input: any) => {
    return input.replace(
      /[\u0660-\u0669]/g,
      (c: any) => c.charCodeAt(0) - 0x0660,
    );
  };

  return (
    <ScreenContainer>
      <div className="flex flex-col justify-between gap-[60px] py-[40px] sm:gap-[85px] sm:py-[50px] lg:flex-row lg:gap-[182px] lg:py-[100px]">
        <div className="flex  w-full max-w-full flex-col gap-[30px] sm:gap-[48px] lg:max-w-[323px] lg:gap-[50px] ">
          {/* //1 */}
          <div className="flex flex-col gap-[16px] ">
            <h5
              className={`${setFontFamily(data?.locale || "en", "medium")} text-[18px] font-medium	leading-[23px] text-[#9E8557] sm:text-[24px] sm:leading-[31px]`}
            >
              {data.emailHeading}
            </h5>
            <hr className="w-[33px] border border-[#9E8557]" />
            <p className="font-DINAMedium text-[16px] font-medium leading-[24px] text-[#202020] sm:text-[24px] sm:leading-[36px] lg:text-[18px] lg:leading-[27px]">
              info@oia.gov.om 
            </p>
            <p className="font-DINAMedium text-[16px] font-medium leading-[24px] text-[#202020] sm:text-[24px] sm:leading-[36px] lg:text-[18px] lg:leading-[27px]">
              whistleblowing@oia.gov.om
            </p>
          </div>

          {/* //2 */}
          <div className="flex flex-col gap-[16px] ">
            <h5
              className={`${setFontFamily(data?.locale || "en", "medium")} text-[18px] font-medium	leading-[23px] text-[#9E8557] sm:text-[24px] sm:leading-[31px]`}
            >
              {data.phoneHeading}
            </h5>
            <hr className="w-[33px] border border-[#9E8557]" />
            {data.callDetails.map(
              (value: any, id: number) => (
                <p
                  key={value.id}
                  className={`${setFontFamily(data?.locale || "en", "medium")} text-[16px] font-medium leading-[24px] text-[#202020] sm:text-[24px] sm:leading-[36px] lg:text-[18px] lg:leading-[27px]`}
                >
                  {value.label}: {value.phoneNumber} 
                </p>
              ),
            )}
          </div>
          {/* //3 */}
          <div className="flex max-w-full flex-col gap-[16px] sm:max-w-[573px] lg:max-w-full">
            <h5
              className={`${setFontFamily(data?.locale || "en", "medium")} text-[18px] font-medium	leading-[23px]	text-[#9E8557] sm:text-[24px] sm:leading-[31px]`}
            >
              {data.addressHeading}
            </h5>
            <hr className="w-[33px] border border-[#9E8557]" />
            <p
              className={`${setFontFamily(data?.locale || "en", "medium")} text-[16px] font-medium leading-[24px] text-[#202020] sm:text-[24px] sm:leading-[36px] lg:text-[18px] lg:leading-[27px]`}
            >
              {data.addressDetails}
            </p>
          </div>
        </div>

        <div className="contact-form w-full flex-1">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              const errors = validationSchema.isValidSync(values);
              if (errors) {
                console.log("Form Submitted: ", values); 
                toast.success("Form submitted successfully!");
                resetForm();
              } else {
                toast.error("Please fill in all required fields correctly.");
              }
            }}
          >
            {({ handleChange, values, setFieldValue }) => (
              <Form className="h-full w-full">
                <div className="contact-form-container flex h-full w-full flex-col gap-[20px] lg:justify-between lg:gap-0">
                  {/* 1 */}
                  <div className="flex flex-col justify-between gap-[19px] sm:flex-row lg:gap-[20px]">
                    <div className="flex w-full flex-col gap-[10px] sm:max-w-[620px]">
                      <label
                        htmlFor="fullName"
                        className="font-DINAMedium text-[14px] font-medium leading-[20px] text-[#646464] sm:text-[16px] rtl:font-TajawalMedium"
                      >
                        {locale === "en"
                          ? forms.english.name
                          : forms.arabic.name}{" "}
                        *
                      </label>
                      <Field
                        name="fullName"
                        placeholder="Enter full name"
                        className="rtl:placeholder:font-GESndBookRegular h-[46px] w-full rounded-[6px] border border-[#E1E1E1] px-[16px] placeholder:font-DINARegular  placeholder:text-[14px] placeholder:font-normal"
                      />
                      <ErrorMessage
                        name="fullName"
                        component="small"
                        className="text-[#dc3232]"
                      />
                    </div>

                    <div className="flex w-full flex-col gap-[10px] sm:max-w-[620px]">
                      <label
                        htmlFor="email"
                        className="font-DINAMedium text-[14px] font-medium leading-[20px] text-[#646464] sm:text-[16px] rtl:font-TajawalMedium"
                      >
                        {locale === "en"
                          ? forms.english.email
                          : forms.arabic.email}{" "}
                        *
                      </label>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        className="rtl:placeholder:font-GESndBookRegular h-[46px] w-full rounded-[6px] border border-[#E1E1E1] px-[16px] placeholder:font-DINARegular  placeholder:text-[14px] placeholder:font-normal"
                      />
                      <ErrorMessage
                        name="email"
                        component="small"
                        className="text-[#dc3232]"
                      />
                    </div>
                  </div>

                  {/* 2 */}
                  <div className="flex flex-col justify-between gap-[19px] sm:flex-row lg:gap-[20px]">
                    <div className="flex w-full flex-col gap-[10px] sm:max-w-[620px]">
                      <label
                        htmlFor="email"
                        className="font-DINAMedium text-[14px] font-medium leading-[20px] text-[#646464] sm:text-[16px] rtl:font-TajawalMedium"
                      >
                        {locale === "en"
                          ? forms.english.company
                          : forms.arabic.company}{" "}
                        *
                      </label>
                      <Field
                        name="company"
                        placeholder="Company Name"
                        className="rtl:placeholder:font-GESndBookRegular h-[46px] w-full rounded-[6px] border border-[#E1E1E1] px-[16px] placeholder:font-DINARegular  placeholder:text-[14px] placeholder:font-normal"
                      />
                      <ErrorMessage
                        name="company"
                        component="small"
                        className="text-[#dc3232]"
                      />
                    </div>

                    <div
                      className={`flex w-full flex-col gap-[10px] sm:max-w-[620px] ${locale === "en" ? "react-tel-input-ar" : "react-tel-input-en"}`}
                    >
                      <label
                        htmlFor="email"
                        className="font-DINAMedium text-[14px] font-medium leading-[20px] text-[#646464] sm:text-[16px] rtl:font-TajawalMedium"
                      >
                        {locale === "en"
                          ? forms.english.phone
                          : forms.arabic.phone}{" "}
                        *
                      </label>
                      <PhoneInput
                         country={"om"}
                         placeholder="Your phone number"
                         enableSearch={true}
                         countryCodeEditable={false}
                         value={values.phoneNumber}
                        onChange={(phone) => {
                          const convertedPhone =
                            convertArabicNumerals(phone);
                          setFieldValue(
                            "phoneNumber",
                            convertedPhone,
                          );
                        }}
                        excludeCountries={["il"]}
                        inputStyle={{
                          textAlign:
                            locale === "ar"
                              ? "right"
                              : "left",
                          width: "100%",
                          paddingRight:
                            locale === "ar"
                              ? "50px"
                              : "10px",
                        }}
                      />

                      <ErrorMessage
                        name="phoneNumber"
                        component="small"
                        className="text-[#dc3232]"
                      />
                    </div>
                  </div>

                  <div className="flex w-full flex-col gap-[10px]">
                    <label
                      htmlFor="message"
                      className="font-DINAMedium text-[14px] font-medium leading-[20px] text-[#646464] sm:text-[16px] rtl:font-TajawalMedium"
                    >
                      {locale === "en"
                        ? forms.english.details
                        : forms.arabic.details}{" "}
                      *
                    </label>

                    <div className="flex flex-col gap-[10px]">
                      <Field
                        name="message"
                        as="textarea"
                        className="rtl:placeholder:font-GESndBookRegular h-[102px] rounded-[6px] border border-[#E1E1E1] p-[16px] placeholder:font-DINARegular placeholder:text-[14px] placeholder:font-normal"
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
                      className="formBtn sm:text[20px] lg:text[24px] sm:text[24px] lg:text[22px] w-full rounded-[4px] bg-[#9E8557] px-[20px] py-[9px] text-[14px] font-bold leading-[17px] text-[#FFFFFF] sm:w-auto rtl:font-TajawalBold"
                    >
                      {locale === "en"
                        ? forms.english.submit
                        : forms.arabic.submit}{" "}
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
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
        className={`${locale === "en" ? "!font-DINAMedium":"!font-TajawalMedium" }`}
      />
    </ScreenContainer>
  );
};

export default ContactForm;
