"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { forms } from "../../data/data";
import PolygonBg from "../common/PolygonBg";
import ScreenContainer from "../common/ScreenContainer";

const WhistleForm = ({ data, locale }: any) => {
  const { title } = data || {};

  const initialValues = {
    fullName: "",
    email: "",
    phoneNumber: "",
    organization: "",
    message: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required(
      "Full name is required",
    ),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string().required(
      "Phone number is required",
    ),
    organization: Yup.string().required("Oraganization is required"),
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

  const convertArabicNumerals = (input: any) => {
    return input.replace(
      /[\u0660-\u0669]/g,
      (c: any) => c.charCodeAt(0) - 0x0660,
    );
  };

  return (
    <PolygonBg>
      <ScreenContainer>
        <div className="flex flex-col gap-[30px] lg:gap-[50px]">
          {title && (
            <h2
              className={`section-heading rtl:font-TajawalBold font-DINABold text-[#9F8555]`}
            >
              {title}
            </h2>
          )}
          <div className="investor-form">
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
              {({
                handleChange,
                values,
                setFieldValue,
              }) => (
                <Form className="contactus-form-wrapper flex flex-col gap-[20px] lg:gap-[40px]">
                  <div className="flex flex-col justify-between gap-[19px] sm:flex-row lg:gap-[20px]">
                    <div className="flex w-full flex-col gap-[10px] sm:max-w-[620px]">
                      <label
                        htmlFor="fullName"
                        className="font-DINAMedium forms-label font-medium rtl:font-TajawalMedium"
                      >
                        {locale === "en"
                          ? "Name"
                          : "الاسم"}
                        *
                      </label>
                      <Field
                        name="fullName"
                        placeholder= {locale === "en"
                          ? "Name"
                          : "الاسم"}
                        className="h-[46px] w-full rounded-[6px] border border-[#E1E1E1] px-[16px] placeholder:font-DINARegular placeholder:text-[14px]  placeholder:font-normal rtl:placeholder:font-TajawalRegular"
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
                        className="font-DINAMedium forms-label font-medium rtl:font-TajawalMedium"
                      >
                        {locale === "en"
                          ? forms.english.email
                          : "البريد الإلكتروني"}{" "}
                        *
                      </label>
                      <Field
                        name="email"
                        type="email"
                        placeholder={locale === "en"
                          ? forms.english.email
                          : "البريد الإلكتروني"}
                        className="h-[46px] w-full rounded-[6px] border border-[#E1E1E1] px-[16px] placeholder:font-DINARegular placeholder:text-[14px]  placeholder:font-normal rtl:placeholder:font-TajawalRegular"
                      />
                      <ErrorMessage
                        name="email"
                        component="small"
                        className="text-[#dc3232]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-[19px] sm:flex-row lg:gap-[20px]">
                    <div
                      className={`flex w-full flex-col gap-[10px] sm:max-w-[620px] ${locale === "en" ? "react-tel-input-ar" : "react-tel-input-en"}`}
                    >
                      <label
                        htmlFor="phoneNumber"
                       className="font-DINAMedium forms-label font-medium rtl:font-TajawalMedium"
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
                        value={values.phoneNumber}
                        countryCodeEditable={false}
                        excludeCountries={["il"]}
                        onChange={(phone) => {
                          const convertedPhone =
                            convertArabicNumerals(phone);
                          setFieldValue(
                            "phoneNumber",
                            convertedPhone,
                          );
                        }}
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

                    <div className="flex w-full flex-col gap-[10px] sm:max-w-[620px]">
                      <label
                        htmlFor="organization"
                       className="font-DINAMedium forms-label font-medium rtl:font-TajawalMedium"
                      >
                        {locale === "en"
                          ? "Company Name"
                          :"اسم الشركة"}
                        *
                      </label>
                      <Field
                        name="organization"
                        placeholder={locale==="en"?"Company Name":"اسم الشركة"}
                        className="h-[46px] w-full rounded-[6px] border border-[#E1E1E1] px-[16px] placeholder:font-DINARegular placeholder:text-[14px]  placeholder:font-normal rtl:placeholder:font-TajawalRegular"
                      />
                      <ErrorMessage
                        name="organization"
                        component="small"
                        className="text-[#dc3232]"
                      />
                    </div>
                  </div>

                  <div className="flex w-full flex-col gap-[10px]">
                    <label
                      htmlFor="message"
                     className="font-DINAMedium forms-label font-medium rtl:font-TajawalMedium"
                    >
                      {locale === "en"
                        ? "Message"
                        : "الرسالة"}
                      *
                    </label>

                    <div className="flex flex-col gap-[10px]">
                      <Field
                        name="message"
                        placeholder={locale === "en"
                          ? "Message"
                          : "الرسالة"}
                        as="textarea"
                        className="h-[102px] resize-none rounded-[6px] border border-[#E1E1E1] p-[16px] placeholder:font-DINARegular placeholder:text-[14px] placeholder:font-normal rtl:placeholder:font-TajawalRegular"
                      />
                      <ErrorMessage
                        name="message"
                        component="small"
                        className="text-[#dc3232]"
                      />
                    </div>
                  </div>
                  {/* </div> */}
                  <div>
                    <button
                      type="submit"
                      className="formBtn sm:text[20px] lg:text[24px] sm:text[24px] lg:text[22px] w-full rounded-[4px] bg-[#9E8557] px-[20px] py-[9px] text-[14px] font-bold leading-[17px] text-[#FFFFFF] sm:w-auto rtl:font-TajawalBold"
                    >
                      {locale === "en"
                        ? forms.english.submit
                        : forms.arabic.submit}
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
        className={`${locale === "en" ? "!font-DINAMedium":"!font-TajawalMedium" }`}
      />
    </PolygonBg>
  );
};

export default WhistleForm;
