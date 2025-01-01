import React from 'react'
import { FaStar, FaSortDown } from "react-icons/fa";
import img1 from "../../../assets/collection-circle-9.jpg"; 
import img from "../../../assets/collection-circle-10.jpg";


const Review = () => {

    const comments = [
      {
        id: 1,
        name: "Jane Doe",
        commentTitle: "Superb quality apparel that exceeds expectations",
        img: img1,
        date: "1 days ago",
        comment:
          "Great theme – we were looking for a theme with lots of built-in features and flexibility, and this was perfect. We expected to need to employ a developer to add a few finishing touches. But we actually managed to do everything ourselves. We did have one small query, and the support given was swift and helpful.",
        reply: {
          name: "Reply from Modave",
          date: "1 days ago",
          img:img,
          text: "We love to hear it! Part of what we love most about Modave is how much it empowers store owners like yourself to build a beautiful website without having to hire a developer :) Thank you for this fantastic review!",
        },
      },
      // Duplicate for demonstration
      {
        id: 2,
        name: "Jane Doe",
        commentTitle: "Superb quality apparel that exceeds expectations",
        date: "1 days ago",
        img: img1,

        comment:
          "Great theme – we were looking for a theme with lots of built-in features and flexibility, and this was perfect. We expected to need to employ a developer to add a few finishing touches. But we actually managed to do everything ourselves. We did have one small query, and the support given was swift and helpful.",
      },
    ];
  return (
    <>
      <div className="mx-auto p-6 bg-white rounded-lg">
        {/* Rating Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className="text-4xl font-bold text-gray-800">4.8</h2>
            <div className="flex items-center text-yellow-500 space-x-1">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
            <p className="text-gray-600">(168 Ratings)</p>
          </div>
          <button className="mt-4 md:mt-0 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md">
            Write a review
          </button>
        </div>

        {/* Ratings Breakdown */}
        <div className="mb-6">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center mb-2">
              <span className="w-8">{star} ★</span>
              <div className="w-64 bg-gray-200 rounded-full h-2 mx-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${star * 20}%` }}
                ></div>
              </div>
              <span>{star === 5 ? 59 : star === 4 ? 46 : 0}</span>
            </div>
          ))}
        </div>

        {/* Comments Section */}
        <h3 className="text-2xl font-bold text-gray-800 mb-4">03 Comments</h3>
        <div className="mb-4 flex justify-end">
          <button className="flex items-center text-gray-600 hover:text-gray-800">
            Sort by: Most Popular <FaSortDown className="ml-1" />
          </button>
        </div>
        {comments.map((comment) => (
          <div key={comment.id} className="mb-6">
            {/* Comment */}
            <div className="flex space-x-4">
              <img
                src={comment.img}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="text-lg font-bold text-gray-800">
                  {comment.commentTitle}
                </h4>
                <p className="text-sm text-gray-500">{comment.date}</p>
                <p className="mt-2 text-sm text-gray-700">{comment.comment}</p>
              </div>
            </div>
            {/* Reply */}
            {comment.reply && (
              <div className="ml-14 mt-4 border-l-2 border-gray-200 pl-4">
                <div className="flex space-x-4">
                  <img
                    src={comment.reply.img}
                    alt="Reply Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">
                      {comment.reply.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {comment.reply.date}
                    </p>
                    <p className="mt-2 text-sm text-gray-700">
                      {comment.reply.text}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Review
