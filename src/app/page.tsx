import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-r from-blue-500 to-teal-500">
      <section className="relative text-center mb-12 max-w-4xl px-6">
        <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
          Revolutionize Your Video Editing Experience
        </h1>
        <p className="text-lg text-gray-100 mb-8">
          Explore powerful tools and intuitive features designed to enhance your video editing workflow.
        </p>

        {/* Laptop Mockup */}
        <div className="relative max-w-lg mx-auto">
          <Image
            src="https://ik.imagekit.io/os33grffu/pngtree-laptop-mockup-images-with-transparent-background-png-image_7264467-removebg-preview.png?updatedAt=1722620562263g" // Replace with your laptop mockup path
            alt="Laptop Mockup"
            width={800}
            height={500}
            className="mx-auto"
          />

          {/* Infographic Inside Laptop Screen */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[65%] h-[90%]">
              <Image
                src="https://ik.imagekit.io/os33grffu/Vd%20ed.PNG?updatedAt=1722621089188" // Replace with your infographic path
                alt="Video Editor Infographic"
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      <a
        href="/editor"
        className="group max-w-md mx-auto rounded-lg border border-transparent bg-gradient-to-r from-purple-600 to-pink-500 px-6 py-4 text-white shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl"
        rel="noopener noreferrer"
      >
        <h2 className="text-2xl font-semibold mb-3">Start Editing Now</h2>
        <p className="text-sm opacity-90">
          Developed with care by Hasan Tariq
        </p>
      </a>
    </main>
  );
}
