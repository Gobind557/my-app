import React, { useState } from "react";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [licenseId, setLicenseId] = useState("");
  const [education, setEducation] = useState("");
  const [degree, setDegree] = useState("");
  const [institution, setInstitution] = useState("");
  const [year, setYear] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setLastName(value);
    } else if (name === "licenseId") {
      setLicenseId(value);
    } else if (name === "education") {
      setEducation(value);
    } else if (name === "degree") {
      setDegree(value);
    } else if (name === "institution") {
      setInstitution(value);
    } else if (name === "year") {
      setYear(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle registration logic here (e.g., send data to server)
    console.log("Registration details:", {
      firstName,
      lastName,
      licenseId,
      education,
      degree,
      institution,
      year,
    });
    setFirstName("");
    setLastName("");
    setLicenseId("");
    setEducation("");
    setDegree("");
    setInstitution("");
    setYear("");
  };

  return (
    <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-blue-600">Registration</h1>
          <p className="text-gray-500">Create your account</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={firstName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              required
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={lastName}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="licenseId"
              className="text-sm font-medium text-gray-700"
            >
              License ID
            </label>
            <input
              id="licenseId"
              name="licenseId"
              type="text"
              required
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={licenseId}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="education" className="textsm-text-gray-700">
              Education
            </label>
            <input
              id="education"
              name="education"
              type="text"
              required
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={education}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="degree"
              className="text-sm font-medium text-gray-700"
            >
              Degree
            </label>
            <input
              id="degree"
              name="degree"
              type="text"
              required
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={degree}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="institution"
              className="text-sm font-medium text-gray-700"
            >
              Institution
            </label>
            <input
              id="institution"
              name="institution"
              type="text"
              required
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={institution}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="year" className="text-sm font-medium text-gray-700">
              Year
            </label>
            <input
              id="year"
              name="year"
              type="text"
              required
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={year}
              onChange={handleChange}
            />
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white font-bold text-base rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;

// import React, { useState } from "react";

// const Registration = () => {
//   const [step, setStep] = useState(1);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [licenseId, setLicenseId] = useState("");
//   const [education, setEducation] = useState("");
//   const [degree, setDegree] = useState("");
//   const [institution, setInstitution] = useState("");
//   const [year, setYear] = useState("");

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     if (name === "firstName") {
//       setFirstName(value);
//     } else if (name === "lastName") {
//       setLastName(value);
//     } else if (name === "licenseId") {
//       setLicenseId(value);
//     } else if (name === "education") {
//       setEducation(value);
//     } else if (name === "degree") {
//       setDegree(value);
//     } else if (name === "institution") {
//       setInstitution(value);
//     } else if (name === "year") {
//       setYear(value);
//     }
//   };

//   const handleNext = () => {
//     // Perform validation (optional)
//     setStep(step + 1);
//   };

//   const handleBack = () => {
//     setStep(step - 1);
//   };

//   const renderStep = () => {
//     switch (step) {
//       case 1:
//         return (
//           <>
//             <h2>Basic Information</h2>
//             <div className="flex flex-col space-y-2">
//               <label
//                 htmlFor="firstName"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 First Name
//               </label>
//               <input
//                 id="firstName"
//                 name="firstName"
//                 type="text"
//                 autoComplete="given-name"
//                 required
//                 className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 value={firstName}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="flex flex-col space-y-2">
//               <label
//                 htmlFor="lastName"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Last Name
//               </label>
//               <input
//                 id="lastName"
//                 name="lastName"
//                 type="text"
//                 autoComplete="family-name"
//                 required
//                 className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 value={lastName}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="flex flex-col space-y-2">
//               <label
//                 htmlFor="licenseId"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 License ID
//               </label>
//               <input
//                 id="licenseId"
//                 name="licenseId"
//                 type="text"
//                 required
//                 className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 value={licenseId}
//                 onChange={handleChange}
//               />
//             </div>
//             <button
//               onClick={handleNext}
//               className="w-full px-4 py-2 bg-blue-600 text-white font-bold text-base rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Next
//             </button>
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <h2>Education Details</h2>
//             <div className="flex flex-col space-y-2">
//               <label
//                 htmlFor="education"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Education
//               </label>
//               <input
//                 id="education"
//                 name="education"
//                 type="text"
//                 required
//                 className="px-3 py-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 value={education}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="flex flex-col space-y-2">
//               <label
//                 htmlFor="degree"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Degree
//               </label>
//               <input
//                 id="degree"
//                 name="degree"
//                 type="text"
//                 required
//                 className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 value={degree}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="flex flex-col space-y-2">
//               <label
//                 htmlFor="institution"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Institution
//               </label>
//               <input
//                 id="institution"
//                 name="institution"
//                 type="text"
//                 required
//                 className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 value={institution}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="flex flex-col space-y-2">
//               <label
//                 htmlFor="year"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Year of Completion
//               </label>
//               <input
//                 id="year"
//                 name="year"
//                 type="number"
//                 required
//                 className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 value={year}
//                 onChange={handleChange}
//               />
//             </div>
//             <button
//               onClick={handleBack}
//               className="w-full px-4 py-2 bg-gray-300 text-white font-bold text-base rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
//             >
//               Back
//             </button>
//             <button
//               onClick={handleNext}
//               className="w-full px-4 py-2 bg-blue-600 text-white font-bold text-base rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Next
//             </button>
//           </>
//         );
//       default:
//         return (
//           <>
//             <h2>Registration Complete!</h2>
//             {/* Implement form submission logic here */}
//           </>
//         );
//     }
//   };

//   return <div className="container mx-auto p-4">{renderStep()}</div>;
// };

// export default Registration;
