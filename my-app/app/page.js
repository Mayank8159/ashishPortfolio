import Image from "next/image";

export default function Page() {
  // ---- Project Data ----
  const projects = [
    {
      title: "SaaS Project Management Tool for Remote Teams",
      image: "/project1.png",
      alt: "SaaS Project Management Tool",
    },
    {
      title: "Shoeman — Buy Trending Footwears",
      image: "/project2.png",
      alt: "Shoeman Project",
    },
    // Add more projects here ↓
    // {
    //   title: "AI Yoga Assistant",
    //   image: "/project3.png",
    //   alt: "AI Yoga Assistant",
    // },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* --- Hero Section --- */}
      <section className="flex flex-col sm:flex-row items-start gap-6">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <Image
            src="/profile.jpg"
            alt="Ashish Sharma"
            width={100}
            height={100}
            className="rounded-full border border-gray-200"
          />
        </div>

        {/* Intro Text */}
        <div className="max-w-3xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug text-gray-900">
            Hi, I’m <span className="font-bold">Ashish Sharma</span> — a
            software designer with 2+ years of experience building MVPs,
            websites, and apps for entrepreneurs and startup founders.
          </h1>
        </div>
      </section>

      {/* --- Work Section --- */}
      <section id="work" className="space-y-8">
        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-md font-medium text-gray-900">
                {project.title}
              </h3>
              <div className="overflow-hidden rounded-xl shadow-sm border border-gray-200">
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={800}
                  height={500}
                  className="w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- About Section --- */}
      <section
        id="about"
        className="flex flex-col sm:flex-row items-start gap-6 border-t border-gray-200 pt-8"
      >
        {/* Left Text */}
        <div className="sm:w-1/2">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">About</h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            Born in 94, originally from a small town, Kharagpur (where the
            world's first IIT campus & largest railway station were
            established). Started my design journey in 2020 as a graphic
            designer.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base mt-4">
            Today, I am grown into a mid-level product and web
            designer shipping 40+ projects. Apart from design, I also build
            end-to-end websites and landers on Framer, Webflow, and Figma Site.
          </p>
        </div>
      </section>
    </main>
  );
}
