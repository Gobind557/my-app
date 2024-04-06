import React from "react";

const expertData = {
  image: "https://via.placeholder.com/150", // Replace with actual image URL
  name: "John Doe",
  profession: "Web Developer",
  rating: 4.8,
  numReviews: 10,
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod lorem ac quam tincidunt rutrum. Donec at leo leo. Vivamus at magna non sapien tincidunt consectetur a vel justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vel magna non sapien tincidunt consectetur. Pellentesque eget ultrices odio.",
};



const ExpertProfile = () => {
  return (
    <div className="bg-gray-100 px-4 py-8 border border-black rounded-md my-8 ml-4 mr-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          {expertData.image && (
            <img
              src={expertData.image}
              alt={expertData.name}
              className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
            />
          )}
          <h2 className="text-xl font-bold text-gray-800">{expertData.name}</h2>
          <p className="text-gray-600">{expertData.profession}</p>
          <div className="flex justify-center mt-4">
            <button className="btn btn-sm bg-green-500 text-white rounded-full px-10 py-3">
              Chat
            </button>
          </div>
        </div>
        <div className="md:col-span-2 flex-grow">
          <h2 className="text-lg font-bold text-center text-gray-800">About Me</h2>
          <p className="text-gray-700 text-center my-10">{expertData.aboutMe}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertProfile;