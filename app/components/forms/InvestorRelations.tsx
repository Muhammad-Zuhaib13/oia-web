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
  const convertArabicNumerals = (input: any) => {
    return input.replace(
      /[\u0660-\u0669]/g,
      (c: any) => c.charCodeAt(0) - 0x0660,
    );
  };
  const validationSchema = Yup.object({
    // Add your validation rules here
    fullName: Yup.string().required(
      "Full name is required",
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
      label: locale==="en"?"Information Inquiries":"استفسار عن المعلومات",
    },
    {
      id: 2,
      label: locale==="en" ? "Investment Inquiries":"استفسار عن الاستثمارات",
    },
    {
      id: 3,
      label:locale==="en"?  "Request for Meeting":"طلب اجتماع",
    },
  ];
  return (
    <PolygonBg>
      <ScreenContainer>
        <div className="flex flex-col gap-[30px] lg:gap-[50px]">
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
                const errors =
                  validationSchema.isValidSync(values);
                if (errors) {
                  console.log("Form Submitted: ", values);
                  toast.success(
                    "Form submitted successfully!",
                  );
                  resetForm();
                } else {
                  toast.error(
                    "Please fill in all required fields correctly.",
                  );
                }
              }}
            >
              {({
                handleChange,
                values,
                setFieldValue,
              }) => (
                <Form className="contactus-form-wrapper flex flex-col gap-[20px] lg:gap-[30px]">
                  <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px]">
                    <div className="flex w-full  flex-col gap-[10px]">
                      <label
                        htmlFor="fullName"
                        className="font-DINAMedium forms-label font-medium rtl:font-TajawalMedium"
                      >
                        {locale === "en"
                          ? forms.english.name
                          : forms.arabic.name}
                        *
                      </label>
                      <Field
                        name="fullName"
                        placeholder={
                          locale === "en"
                            ? forms.english.name
                            : forms.arabic.name
                        }
                        
                        className="h-[46px] w-full rounded-[6px] border border-[#E1E1E1] px-[16px] placeholder:font-DINARegular placeholder:text-[14px]  placeholder:font-normal rtl:placeholder:font-TajawalRegular"
                      />
                      <ErrorMessage
                        name="fullName"
                        component="small"
                        className="text-[#dc3232]"
                      />
                    </div>
                    <div className="flex w-full  flex-col gap-[10px]">
                      <label
                        htmlFor="email"
                        className="font-DINAMedium forms-label font-medium rtl:font-TajawalMedium"
                      >
                        {locale === "en"
                          ? forms.english.email
                          : forms.arabic.email}
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
                    <div className="flex w-full  flex-col gap-[10px]">
                      <div
                        className={`flex w-full flex-col gap-[10px] ${locale === "en" ? "react-tel-input-ar" : "react-tel-input-en"}`}
                      >
                        <label
                          htmlFor="phone"
                          className="font-DINAMedium forms-label font-medium rtl:font-TajawalMedium"
                        >
                          {locale === "en"
                            ? forms.english.phone
                            : forms.arabic.phone}
                          *
                        </label>

                        <PhoneInput
                          country={"om"}
                          placeholder= {locale === "en"
                            ? forms.english.phone
                            : forms.arabic.phone}
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
                    </div>
                   
                    <div className="flex w-full  flex-col gap-[10px]">
                      <label
                        htmlFor="company"
                        className="font-DINAMedium forms-label font-medium rtl:font-TajawalMedium"
                      >
                        {locale === "en"
                          ? forms.english.company
                          : forms.arabic.company}
                        *
                      </label>
                      <Field
                        name="company"
                        placeholder= {locale === "en"
                          ? forms.english.company
                          : forms.arabic.company}
                        className="h-[46px] w-full rounded-[6px] border border-[#E1E1E1] px-[16px] placeholder:font-DINARegular placeholder:text-[14px]  placeholder:font-normal rtl:placeholder:font-TajawalRegular"
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
                        className="font-DINAMedium forms-label font-medium rtl:font-TajawalMedium"
                      >
                       {locale==="en" ? "Type of Request":"نوع الرسالة"} *
                      </label>
                      <Field
                        as="select"
                        name="typeOfRequest"
                        className={`request-select h-[46px] w-full rounded-[6px] border border-[#E1E1E1] px-[16px] placeholder:font-DINARegular placeholder:text-[14px] placeholder:font-normal rtl:placeholder:font-TajawalRegular ${locale === "en" ? "request-select-en" : "request-select-ar"}`}
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
                      className="font-DINAMedium forms-label font-medium rtl:font-TajawalMedium"
                    >
                      {locale === "en"
                        ? "Message"
                        : "الرسالة"}
                      *
                    </label>
                    <div className="flex flex-col">
                      <Field
                        name="message"
                        as="textarea"
                        placeholder={locale ==="en" ? "Message":"الرسالة"}
                        className="h-[102px] resize-none rounded-[6px] border border-[#E1E1E1] p-[16px] placeholder:font-DINARegular placeholder:text-[14px] placeholder:font-normal rtl:placeholder:font-TajawalRegular"
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
                      className="paragraph w-full rounded-[4px] bg-[#9E8557] px-[20px] py-[9px] !text-white sm:w-full md:w-full lg:w-auto rtl:font-TajawalRegular"
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
        className={`${locale === "en" ? "!font-DINAMedium" : "!font-TajawalMedium"}`}
      />
    </PolygonBg>
  );
};

export default InvestorRelForm;
