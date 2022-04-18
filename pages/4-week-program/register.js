import { useFormik } from "formik";
import * as Yup from "yup";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import Layout from "../../components/layout";

const Register = () => {
  const userCollectionRef = collection(db, "users");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Enter a valid Email Address")
        .required("Required"),
      phoneNumber: Yup.string()
        .matches(
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/gm,
          "Enter a valid Phone Number"
        )
        .required("Phone Number is required"),
    }),
    onSubmit: async (values) => {
      try {
        await addDoc(userCollectionRef, values);

        document.location.assign(
          "https://paystack.com/pay/4-week-starter-program"
        );
      } catch (error) {
        alert(error.message);
      }
    },
  });

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <h3 className="mt-8 p-2 font-bold text-fuchsia-600 text-center">
          Run2Win 4-week Starter Program Registration Form
        </h3>
        <span className="mt-1 text-fuchsia-600">Contact Information</span>
        <div className="block mt-1 mb-6 p-6 rounded-lg shadow-sm bg-white max-w-sm">
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-group mb-6">
                <input
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-600 focus:outline-none"
                  type="text"
                  name="firstName"
                  id="firstName"
                  aria-describedby="first name"
                  placeholder="First Name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <span className="text-sm text-red-500">
                    {formik.errors.firstName}
                  </span>
                ) : null}
              </div>
              <div className="form-group mb-6">
                <input
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-600 focus:outline-none"
                  type="text"
                  name="lastName"
                  id="lastName"
                  aria-describedby="last name"
                  placeholder="Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <span className="text-sm text-red-500">
                    {formik.errors.lastName}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="form-group mb-6">
              <input
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-600 focus:outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <span className="text-sm text-red-500">
                  {formik.errors.email}
                </span>
              ) : null}
            </div>
            <div className="form-group mb-6">
              <input
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-fuchsia-600 focus:outline-none"
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="WhatsApp Phone Number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <span className="text-sm text-red-500">
                  {formik.errors.phoneNumber}
                </span>
              ) : null}
            </div>

            <button
              type="submit"
              className="w-full px-6 py-2.5 bg-fuchsia-600 text-white text-sm font-medium leading-tight uppercase rounded shadow-md hover:bg-fuchsia-700 hover:shadow-lg focus:bg-fuchsia-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-fuchsia-800 active:shadow-lg transition duration-150 ease-in-out"
              disabled={formik.isSubmitting}
            >
              Proceed to checkout
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;