import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="mt-5 animate-spin w-[50px] h-[50px] rounded-full border-gray-500 border-4 border-t-white"></div>
    </div>
  );
};

export default Loading;
