import Image from "next/image";

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* --- Hero Section --- */}
      <section className="flex flex-col sm:flex-row items-start gap-6">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <Image
            src="/profile.jpg" // Replace with your image in public/
            alt="Ashish Sharma"
            width={100}
            height={100}
            className="rounded-full border border-gray-200"
          />
        </div>

        {/* Intro Text */}
        <div className="max-w-3xl">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug text-gray-900">
            Hi, I’m <span className="font-bold">Ashish Sharma</span> — a software
            designer with 2+ years of experience building MVPs, websites, and apps
            for entrepreneurs and startup founders.
          </h1>
        </div>
      </section>

      {/* --- Work Section --- */}
      <section id="work">

        <div className="grid sm:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="space-y-2">
            <h3 className="text-md font-medium text-gray-900">
              SaaS Project Management Tool for Remote Teams
            </h3>
            <div className="overflow-hidden rounded-xl shadow-sm border border-gray-200">
              <Image
                src="/project1.png"
                alt="SaaS Project Management Tool"
                width={800}
                height={500}
                className="w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Project 2 */}
          <div className="space-y-2">
            <h3 className="text-md font-medium text-gray-900">
              Shoeman — Buy Trending Footwears
            </h3>
            <div className="overflow-hidden rounded-xl shadow-sm border border-gray-200">
              <Image
                src="/project2.png"
                alt="Shoeman Project"
                width={800}
                height={500}
                className="w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
