import React from "react";

const expertData = {
  image: "https://via.placeholder.com/150",
  name: "John Doe",
  profession: "Web Developer",
  rating: 4,
  numReviews: 10,
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod lorem ac quam tincidunt rutrum. Donec at leo leo. Vivamus at magna non sapien tincidunt consectetur a vel justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vel magna non sapien tincidunt consectetur. Pellentesque eget ultrices odio.",
};

const ReviewProgress = ({ numReviews }) => {
  const progress = Math.min(numReviews, 5) * 20; // Calculate progress based on reviews (max 5)

  return (
    <div className="flex items-center mt-2">
      <span className="text-gray-600 mr-2">{numReviews} Reviews</span>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className={`bg-green-500 rounded-full h-2 w-${progress}%`} />
      </div>
    </div>
  );
};

const ExpertProfile = () => {
  const starCount = Math.round(expertData.rating); // Round rating for star count

  return (
    <>
      <div className="bg-gray-100 px-4 py-8 border border-black rounded-md my-8 mx-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            {expertData.image && (
              <img
                src={expertData.image}
                alt={expertData.name}
                className="rounded-full mx-0 mb-4 w-32 h-32 object-cover"
              />
            )}
            <h2 className="text-xl font-bold text-gray-800">
              {expertData.name}
            </h2>
            <p className="text-gray-600">{expertData.profession}</p>
            <div className="flex justify-center mt-4">
              <button className="btn btn-sm bg-green-500 text-white rounded-full px-10 py-3">
                Chat
              </button>
            </div>
          </div>
          <div className="md:col-span-1 flex-grow">
            <h2 className="text-lg font-bold text-gray-800 text-center">
              About Me
            </h2>
            <p className="text-gray-700 text-center my-10">
              {expertData.aboutMe}
            </p>
          </div>
        </div>
      </div>
      {/* Rating container outside with 1/4 width and desired height */}
      <div className="flex flex-col items-start border border-gray-900 rounded-md px-4 py-4 shadow-sm mt-4 mx-8 w-1/3 h-45">
        {" "}
        {/* Added height class */}
        <div className="flex items-center">
          {" "}
          {/* Limited width */}
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <span key={index} className="text-yellow-500 mr-1">
                {index < starCount ? "★" : "☆"}
              </span>
            ))}
          <span className="text-gray-600 ml-2">{expertData.rating}</span>
        </div>
        <ReviewProgress numReviews={expertData.numReviews} />
      </div>
    </>
  );
};

export default ExpertProfile;
