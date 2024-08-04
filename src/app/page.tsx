import Image from 'next/image';
import { FaEdit } from 'react-icons/fa'; // Importing the edit icon from react-icons

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-r from-purple-700 to-black-300 relative">

      <header className="w-full flex items-center justify-between p-4 bg-purple-800 bg-opacity-75 fixed top-0 left-0 z-20">
        <div className="flex items-center">
          <Image
            src="https://ik.imagekit.io/os33grffu/01b4GWdIDy2hlLfEmihhSbv-1..v1678307759.jpg?updatedAt=1722703867873"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold text-white ml-3">HassEditPro</h1>
        </div>
      </header>
      <div className="flex w-full h-full z-10 mt-16">
        {/* Left Side - Text */}
        <div className="w-1/2 flex flex-col items-center justify-center text-center p-6">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Revolutionize Your Video Editing Experience
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Explore a comprehensive suite of powerful tools and intuitive features meticulously designed to streamline your video editing workflow. Whether you're a novice just starting or an experienced professional, our platform offers a robust set of capabilities to help you create stunning videos with ease and efficiency. From advanced editing functions and seamless integration options to user-friendly interfaces and customizable templates, every aspect of our service is crafted to enhance your editing experience. Dive into a world of creativity where you can effortlessly transform your raw footage into polished, professional-quality videos. Discover the perfect blend of innovation and simplicity that makes video editing not just a task, but a delightful creative journey.
          </p>
          <div className="group max-w-md mx-auto">
            <a
              href="/editor"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-purple-400 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <FaEdit className="mr-2" /> {/* Adding the edit icon */}
              <h2 className="text-2xl font-semibold">Start Editing Now</h2>
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src="https://ik.imagekit.io/os33grffu/01b4GWdIDy2hlLfEmihhSbv-1..v1678307759.jpg?updatedAt=1722703867873" // Replace with your laptop mockup path
            alt="Laptop Mockup"
            layout="intrinsic"
            width={800}
            height={500}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </main>
  );
}
