"use client";
"use strict";
exports.__esModule = true;
var formik_1 = require("formik");
var react_phone_input_2_1 = require("react-phone-input-2");
require("react-phone-input-2/lib/style.css");
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
var Yup = require("yup");
var data_1 = require("../../data/data");
var PolygonBg_1 = require("../common/PolygonBg");
var ScreenContainer_1 = require("../common/ScreenContainer");
var MediaRelationForm = function (_a) {
    var data = _a.data, locale = _a.locale;
    var title = (data || {}).title;
    var initialValues = {
        fullName: "",
        email: "",
        phoneNumber: "",
        organization: "",
        message: ""
    };
    var validationSchema = Yup.object({
        fullName: Yup.string().required("Full name is required"),
        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),
        phoneNumber: Yup.string().required("Phone number is required"),
        organization: Yup.string().required("Oraganization is required"),
        message: Yup.string().required("Message is required")
    });
    var options = [
        {
            id: 1,
            label: "Information Inquiries"
        },
        {
            id: 2,
            label: "Investment Inquiries"
        },
        {
            id: 3,
            label: "Request for Meeting"
        },
    ];
    var convertArabicNumerals = function (input) {
        return input.replace(/[\u0660-\u0669]/g, function (c) { return c.charCodeAt(0) - 0x0660; });
    };
    return (React.createElement(PolygonBg_1["default"], null,
        React.createElement(ScreenContainer_1["default"], null,
            React.createElement("div", { className: "flex flex-col gap-[30px] lg:gap-[50px]" },
                title && (React.createElement("h2", { className: "section-heading rtl:font-TajawalBold font-DINABold text-[#9F8555]" }, title)),
                React.createElement("div", { className: "investor-form" },
                    React.createElement(formik_1.Formik, { initialValues: initialValues, validationSchema: validationSchema, onSubmit: function (values, _a) {
                            var resetForm = _a.resetForm;
                            var errors = validationSchema.isValidSync(values);
                            if (errors) {
                                console.log("Form Submitted: ", values);
                                react_toastify_1.toast.success("Form submitted successfully!");
                                resetForm();
                            }
                            else {
                                react_toastify_1.toast.error("Please fill in all required fields correctly.");
                            }
                        } }, function (_a) {
                        var handleChange = _a.handleChange, values = _a.values, setFieldValue = _a.setFieldValue;
                        return (React.createElement(formik_1.Form, { className: "contactus-form-wrapper flex flex-col gap-[20px] lg:gap-[40px]" },
                            React.createElement("div", { className: "flex flex-col justify-between gap-[19px] sm:flex-row lg:gap-[20px]" },
                                React.createElement("div", { className: "flex w-full flex-col gap-[10px] sm:max-w-[400px]" },
                                    React.createElement("label", { htmlFor: "fullName", className: "font-DINAMedium forms-label font-medium rtl:font-TajawalMedium" },
                                        locale === "en"
                                            ? "Name"
                                            : "الاسم",
                                        "*"),
                                    React.createElement(formik_1.Field, { name: "fullName", placeholder: locale === "en"
                                            ? "Name"
                                            : "الاسم", className: "h-[46px] w-full rounded-[6px] border border-[#E1E1E1] px-[16px] placeholder:font-DINARegular placeholder:text-[14px]  placeholder:font-normal rtl:placeholder:font-TajawalRegular" }),
                                    React.createElement(formik_1.ErrorMessage, { name: "fullName", component: "small", className: "text-[#dc3232]" })),
                                React.createElement("div", { className: "flex w-full flex-col gap-[10px] sm:max-w-[400px]" },
                                    React.createElement("label", { htmlFor: "email", className: "font-DINAMedium forms-label font-medium rtl:font-TajawalMedium" },
                                        locale === "en"
                                            ? data_1.forms.english.email
                                            : "البريد الإلكتروني",
                                        " ",
                                        "*"),
                                    React.createElement(formik_1.Field, { name: "email", type: "email", placeholder: locale === "en"
                                            ? data_1.forms.english.email
                                            : "البريد الإلكتروني", className: "h-[46px] w-full rounded-[6px] border border-[#E1E1E1] px-[16px] placeholder:font-DINARegular placeholder:text-[14px]  placeholder:font-normal rtl:placeholder:font-TajawalRegular" }),
                                    React.createElement(formik_1.ErrorMessage, { name: "email", component: "small", className: "text-[#dc3232]" })),
                                React.createElement("div", { className: "flex w-full flex-col gap-[10px] sm:max-w-[400px] " + (locale === "en" ? "react-tel-input-ar" : "react-tel-input-en") },
                                    React.createElement("label", { htmlFor: "phoneNumber", className: "font-DINAMedium forms-label font-medium rtl:font-TajawalMedium" },
                                        locale === "en"
                                            ? data_1.forms.english.phone
                                            : data_1.forms.arabic.phone,
                                        " ",
                                        "*"),
                                    React.createElement(react_phone_input_2_1["default"], { country: "om", placeholder: "Your phone number", enableSearch: true, value: values.phoneNumber, countryCodeEditable: false, excludeCountries: ["il"], onChange: function (phone) {
                                            var convertedPhone = convertArabicNumerals(phone);
                                            setFieldValue("phoneNumber", convertedPhone);
                                        }, inputStyle: {
                                            textAlign: locale === "ar"
                                                ? "right"
                                                : "left",
                                            width: "100%",
                                            paddingRight: locale === "ar"
                                                ? "50px"
                                                : "10px"
                                        } }),
                                    React.createElement(formik_1.ErrorMessage, { name: "phoneNumber", component: "small", className: "text-[#dc3232]" }))),
                            React.createElement("div", { className: "flex w-full flex-col gap-[10px]" },
                                React.createElement("label", { htmlFor: "message", className: "font-DINAMedium forms-label font-medium rtl:font-TajawalMedium" },
                                    locale === "en"
                                        ? "Message"
                                        : "الرسالة",
                                    "*"),
                                React.createElement("div", { className: "flex flex-col gap-[10px]" },
                                    React.createElement(formik_1.Field, { name: "message", placeholder: locale === "en"
                                            ? "Message"
                                            : "الرسالة", as: "textarea", className: "h-[102px] resize-none rounded-[6px] border border-[#E1E1E1] p-[16px] placeholder:font-DINARegular placeholder:text-[14px] placeholder:font-normal rtl:placeholder:font-TajawalRegular" }),
                                    React.createElement(formik_1.ErrorMessage, { name: "message", component: "small", className: "text-[#dc3232]" }))),
                            React.createElement("div", null,
                                React.createElement("button", { type: "submit", className: "formBtn sm:text[20px] lg:text[24px] sm:text[24px] lg:text[22px] w-full rounded-[4px] bg-[#9E8557] px-[20px] py-[9px] text-[14px] font-bold leading-[17px] text-[#FFFFFF] sm:w-auto rtl:font-TajawalBold" }, locale === "en"
                                    ? data_1.forms.english.submit
                                    : data_1.forms.arabic.submit))));
                    }))),
            React.createElement(react_toastify_1.ToastContainer, null)),
        React.createElement(react_toastify_1.ToastContainer, { position: "top-right", autoClose: 3000, hideProgressBar: false, newestOnTop: false, closeOnClick: true, rtl: locale === "ar", pauseOnFocusLoss: true, draggable: true, pauseOnHover: true, className: "" + (locale === "en" ? "!font-DINAMedium" : "!font-TajawalMedium") })));
};
exports["default"] = MediaRelationForm;
