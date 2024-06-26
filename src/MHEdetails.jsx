
import React from "react";

const expertData = {
  image: "https://via.placeholder.com/150",
  name: "John Doe",
  profession: "Web Developer",
  rating: 4, // Example rating with decimals
  numReviews: 10,
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod lorem ac quam tincidunt rutrum. Donec at leo leo. Vivamus at magna non sapien tincidunt consectetur a vel justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec vel magna non sapien tincidunt consectetur. Pellentesque eget ultrices odio.",
};

const reviews = [
  // ... your reviews data here
];

const ReviewCard = ({ review }) => {
  return (
    <div className="flex mb-4 border-b border-gray-200 pb-2">
      {review.avatar && (
        <img
          src={review.avatar}
          alt={review.name}
          className="rounded-full mr-4 w-10 h-10 object-cover"
        />
      )}
      <div>
        <h3 className="text-base font-bold text-gray-800">
          {review.name}
          <span className="text-yellow-500 text-sm ml-2">
            {review.rating} <i className="fas fa-star"></i>
          </span>
        </h3>
        <p className="text-gray-600">{review.review}</p>
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

      <div className="flex flex-col items-start justify-content: flex-start border border-gray-900 rounded-md px-4 py-4 shadow-sm mt-4 mx-8 w-1/3 h-auto">
      
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          Ratings & Reviews
        </h3>
    
        <h2 className="text-2xl font-bold mx-auto mb-2">
          {expertData.rating.toFixed(2)}
        </h2>
        <div className="flex justify-center items-center mx-auto">
          {" "}
       
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <span
                key={index}
                className="text-yellow-500 mr-1 text-2xl" // Increased font-size and margin
              >
                {index < starCount ? "★" : "☆"}
              </span>
            ))}
        </div>
      </div>
      <div className=" border border-gray-900 rounded-md px-4 py-4 shadow-sm mt-4 mx-8 w-1/3 h-auto">
        <h2 className="text-lg font-bold text-gray-800 mb-4">
          User Reviews ({expertData.numReviews})
        </h2>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </>
  );
};

export default ExpertProfile;