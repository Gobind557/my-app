// import React, { useState, useEffect } from "react";


// const MentalHealthExperts = () => {
//   const [experts, setExperts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch expert data from an API (replace with your actual API endpoint)
//   useEffect(() => {
//     const fetchExperts = async () => {
//       try {
//         const response = await fetch(
//           "https://api.example.com/mental-health-experts"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch expert data");
//         }
//         const data = await response.json();
//         setExperts(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchExperts();
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-16">
//       <h1 className="text-3xl font-bold text-center mb-8">
//         Mental Health Experts
//       </h1>
//       {isLoading && (
//         <p className="text-center text-gray-500">Loading experts...</p>
//       )}
//       {error && (
//         <p className="text-center text-red-500 font-bold">Error: {error}</p>
//       )}
//       {experts.length > 0 && (
//         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {experts.map((expert) => (
//             <li
//               key={expert.id}
//               className="expert-card bg-white rounded-lg shadow-md overflow-hidden"
//             >
//               <img
//                 src={expert.imageUrl}
//                 alt={expert.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-medium text-gray-900">
//                   {expert.name}
//                 </h3>
//                 <p className="text-gray-600">{expert.specialization}</p>
//                 <p className="text-gray-500 text-sm">
//                   {expert.experience} years of experience
//                 </p>
//                 <button className="btn btn-primary mt-4">
//                   Book Appointment
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//       {experts.length === 0 && !isLoading && (
//         <p className="text-center text-gray-500">No experts found.</p>
//       )}
//     </div>
//   );
// };


import React from 'react';


import { StarIcon, BriefcaseIcon, ClockIcon } from "@heroicons/react/24/solid";
const experts = [
  {
    id: 1,
    name: "Dr. Alice Williams",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    specialization: "Anxiety & Depression",
    experience: 10,
    ratings: 4.8,
    charges: 200,
  },
  {
    id: 2,
    name: "Dr. David Jones",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    specialization: "Relationship Counseling",
    experience: 8,
    ratings: 4.7,
    charges: 180,
  },
  {
    id: 3,
    name: "Dr. Sarah Miller",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    specialization: "Stress Management",
    experience: 5,
    ratings: 4.9,
    charges: 150,
  },
  {
    id: 4,
    name: "Dr. Emily Brown",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    specialization: "Child & Adolescent Psychology",
    experience: 7,
    ratings: 4.6,
    charges: 170,
  },
  {
    id: 5,
    name: "Dr. Michael Clark",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    specialization: "Addiction & Substance Abuse",
    experience: 12,
    ratings: 5.0,
    charges: 220,
  },
  {
    id: 6,
    name: "Dr. Olivia Peters",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    specialization: "Eating Disorders",
    experience: 6,
    ratings: 4.8,
    charges: 160,
  },
  {
    id: 6,
    name: "Dr. Olivia Peters",
    imageUrl: "https://via.placeholder.com/150", // Replace with actual image URL
    specialization: "Eating Disorders",
    experience: 6,
    ratings: 4.8,
    charges: 160,
  },
];

const MentalHealthExperts = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8 text-yellow-800">
        Mental Health Experts
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">  {/* Responsive grid columns */}
        {experts.map((expert) => (
          <li
            key={expert.id}
            className="expert-card bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row items-start p-4 w-full"  
          >
            <img
              src={expert.imageUrl}
              alt={expert.name}
              className="w-16 h-16 rounded-full mr-4 object-cover self-start"  
            />
            <div className="flex-grow ml-4">  {/* Flex-grow & margin for spacing */}
              <h3 className="text-lg font-medium text-gray-900">
                {expert.name}
              </h3>
              <div className="flex items-center mb-2">
                <StarIcon className="h-5 w-5 text-yellow-500 mr-2" />{" "}
                {/* Ratings icon */}
                <span className="text-gray-600">{expert.ratings}</span>
              </div>
              <p className="text-gray-600">{expert.specialization}</p>
              <div className="flex items-center text-gray-500 text-sm">
                <BriefcaseIcon className="h-4 w-4 mr-2" />{" "}
                {/* Experience icon */}
                <span>{expert.experience} years</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <ClockIcon className="h-4 w-4 mr-2" /> {/* Charges icon */}
                <span>₹{expert.charges}/hour</span>
              </div>
              <button className="btn btn-primary mt-4 text-green-500 border border-green-500 font-bold px-4 py-2 rounded-md hover:bg-green-100 self-end">  {/* Align button on smaller screens */}
                Book Appointment
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MentalHealthExperts;