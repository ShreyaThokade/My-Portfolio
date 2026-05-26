export default function App() 
{
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-slate-50 to-purple-100 text-slate-900 font-['Inter'] overflow-hidden">
      {/* Navbar */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-5 relative">
          <div className="absolute w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-30"></div>
          <h1 className="text-[24px] font-semibold text-pink-600 font-['Poppins'] relative z-10">
            Shreya S. Thokade
          </h1>
          <div className="flex gap-8 text-[15px] font-medium text-slate-600 relative z-10">
            <a
              href="#about"
              className="hover:text-pink-600 transition duration-300"
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-pink-600 transition duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-pink-600 transition duration-300"
            >
              Projects
            </a>
            <a
              href="#education"
              className="hover:text-pink-600 transition duration-300"
            >
              Education
            </a>
            <a
              href="#resume"
              className="hover:text-pink-600 transition duration-300"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="hover:text-pink-600 transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>


      {/* Sections */}
      <section className="min-h-[80vh] pt-16 flex flex-col justify-center items-center text-center px-6 relative overflow-hidden bg-gradient-to-b from-pink-50 via-slate-50 to-purple-50">
  {/* Background */}
  <div className="absolute top-10 left-0 w-80 h-80 bg-pink-300 rounded-full blur-3xl opacity-25"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300 rounded-full blur-3xl opacity-25"></div>
  <div className="absolute top-40 right-40 w-60 h-60 bg-sky-200 rounded-full blur-3xl opacity-20"></div>

  {/* Small Label */}
  <p className="text-[14px] tracking-[2px] uppercase text-pink-600 font-semibold mb-4 relative z-10">
    Frontend Developer
  </p>

  {/* Main Heading */}
  <h1 className="font-['Poppins'] text-[64px] md:text-[72px] font-bold leading-[1.1] bg-gradient-to-r from-slate-900 via-pink-700 to-slate-700 bg-clip-text text-transparent max-w-5xl relative z-10">
    Building Clean &
    Modern Web Experiences
  </h1>

  {/* Description */}
  <p className="mt-8 max-w-2xl text-[18px] font-normal leading-[1.9] text-slate-600 relative z-10">
    Enthusiastic frontend developer focused on creating
    clean, responsive and user-friendly web experiences
    with modern technologies like React.js and Tailwind CSS.
  </p>

</section>

      {/* About */}
      <section
        id="about"
        className="max-w-5xl mx-auto px-6 py-24"
      >

        <p className="text-[14px] tracking-[2px] uppercase text-pink-600 font-semibold mb-3">
          About Me
        </p>

        <h2 className="font-['Poppins'] text-[42px] font-semibold mb-8 leading-tight">
          Driven Computer Science
          Graduate & Frontend Developer
        </h2>

        <p className="text-[18px] font-normal leading-[1.9] text-slate-600 max-w-3xl">
          Passionate CSE graduate seeking
          opportunities to utilize analytical thinking,
          communication and problem-solving skills while creating
          modern user-friendly web applications and gaining
          practical professional experience.
        </p>

      </section>
 {/* Skills */}
<section
  id="skills"
  className="max-w-5xl mx-auto px-6 py-24"
>

  <p className="text-[14px] tracking-[2px] uppercase text-pink-600 font-semibold mb-3">
    Skills
  </p>

  <h2 className="font-['Poppins'] text-[42px] font-semibold mb-14">
    Skills & Technologies
  </h2>

  {/* Single White Box */}
  <div className="bg-white/70 backdrop-blur-md border border-white/40 rounded-[32px] p-10 shadow-sm">

    <div className="grid md:grid-cols-2 gap-14">

      {/* Technical Skills */}
      <div>

        <h3 className="font-['Poppins'] text-[26px] font-semibold mb-6 text-slate-800">
          Technical Skills
        </h3>

        <div className="flex flex-wrap gap-4">

          {[
            "HTML",
            "CSS",
            "Java",
            "JavaScript",
            "React.js",
            "Tailwind CSS",
            "GitHub",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-pink-50 border border-pink-100 px-5 py-3 rounded-2xl text-[15px] font-medium shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* Professional Skills */}
      <div>
        <h3 className="font-['Poppins'] text-[26px] font-semibold mb-6 text-slate-800">
          Professional Skills
        </h3>
        <div className="flex flex-wrap gap-4">
          {[
            "Communication",
            "Problem Solving",
            "Leadership",
            "Teamwork",
            "Adaptability",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-purple-50 border border-purple-100 px-5 py-3 rounded-2xl text-[15px] font-medium shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-5xl mx-auto px-6 py-24"
      >

        <p className="text-[14px] tracking-[2px] uppercase text-pink-600 font-semibold mb-3">
          Projects
        </p>

        <h2 className="font-['Poppins'] text-[42px] font-semibold mb-12">
          Featured Work
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="bg-white border border-slate-200 rounded-[28px] p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300">
            <h3 className="font-['Poppins'] text-[26px] font-semibold">
              IoT Weather Monitoring System
            </h3>

            <p className="text-pink-600 mt-4 text-[15px] font-medium">
              ESP Processor, Sensors, IoT
            </p>

            <p className="mt-5 text-[16px] leading-[1.8] text-slate-600">
              Built an IoT-based weather monitoring system using
              ESP processor and multiple sensors to monitor
              temperature, humidity and motion with real-time
              environmental data collection.
            </p>

          </div>

          {/* Project 2 */}
          <div className="bg-white border border-slate-200 rounded-[28px] p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300">

            <h3 className="font-['Poppins'] text-[26px] font-semibold">
              Personal Portfolio Website
            </h3>

            <p className="text-pink-600 mt-4 text-[15px] font-medium">
              React.js, Tailwind CSS
            </p>

            <p className="mt-5 text-[16px] leading-[1.8] text-slate-600">
              Designed and developed a modern responsive personal
              portfolio website with smooth UI, clean typography
              and mobile-friendly design.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="max-w-5xl mx-auto px-6 py-24"
      >
        <p className="text-[14px] tracking-[2px] uppercase text-pink-600 font-semibold mb-3">
          Education
        </p>

        <h2 className="font-['Poppins'] text-[42px] font-semibold mb-12 leading-tight">
          Academic Background
        </h2>
        <div className="space-y-8">

          {/* BE */}
          <div className="bg-white border border-slate-200 rounded-[28px] p-8 shadow-sm hover:shadow-xl transition duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h3 className="font-['Poppins'] text-[26px] font-semibold leading-tight">
                  Bachelor of Engineering
                </h3>

                <p className="text-[18px] text-pink-600 font-medium mt-2">
                  Computer Science Engineering
                </p>

                <p className="text-[16px] text-slate-600 mt-4 leading-7">
                  Sant Gadge Baba Amravati University
                </p>

              </div>
              <div className="text-left md:text-right">
                <p className="text-[15px] font-medium text-slate-700">
                  2019 – 2023
                </p>

                <p className="text-[15px] text-slate-500 mt-2">
                  CGPA: 7.26
                </p>
              </div>
            </div>
          </div>

          {/* HSC */}
          <div className="bg-white border border-slate-200 rounded-[28px] p-8 shadow-sm hover:shadow-xl transition duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h3 className="font-['Poppins'] text-[26px] font-semibold leading-tight">
                  Higher Secondary Certificate (HSC)
                </h3>

                <p className="text-[18px] text-pink-600 font-medium mt-2">
                  Science Stream
                </p>

                <p className="text-[16px] text-slate-600 mt-4 leading-7">
                  National Junior Science College, Akola
                </p>
              </div>

              <div className="text-left md:text-right">
                <p className="text-[15px] font-medium text-slate-700">
                  2018 – 2019
                </p>

                <p className="text-[15px] text-slate-500 mt-2">
                  Percentage: 76%
                </p>
              </div>
            </div>
          </div>

          {/* SSC */}
          <div className="bg-white border border-slate-200 rounded-[28px] p-8 shadow-sm hover:shadow-xl transition duration-300">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h3 className="font-['Poppins'] text-[26px] font-semibold leading-tight">
                  Secondary School Certificate (SSC)
                </h3>

                <p className="text-[18px] text-pink-600 font-medium mt-2">
                  Maharashtra State Board
                </p>

                <p className="text-[16px] text-slate-600 mt-4 leading-7">
                  Jijamata Girls High School, Darwha
                </p>

              </div>
              <div className="text-left md:text-right">
                <p className="text-[15px] font-medium text-slate-700">
                  2016 – 2017
                </p>

                <p className="text-[15px] text-slate-500 mt-2">
                  Percentage: 86%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section
        id="resume"
        className="max-w-5xl mx-auto px-6 py-24"
      >

        <p className="text-[14px] tracking-[2px] uppercase text-pink-600 font-semibold mb-3">
          Resume
        </p>

        <h2 className="font-['Poppins'] text-[42px] font-semibold mb-8 leading-tight">
          My Resume
        </h2>

        <div className="bg-white border border-slate-200 rounded-[28px] p-10 shadow-sm hover:shadow-xl transition duration-300 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>

            <h3 className="font-['Poppins'] text-[26px] font-semibold">
              Shreya S. Thokade
            </h3>

            <p className="text-[16px] text-slate-600 mt-3 leading-7 max-w-2xl">
              Motivated frontend developer focused on creating clean, responsive and user-friendly web experiences with modern technologies like React.js and Tailwind CSS.
            </p>
          </div>

          <a
            href="/resume.pdf"
            download
            className="bg-pink-600 text-white px-8 py-3 rounded-2xl shadow-lg shadow-pink-200 hover:bg-pink-700 hover:scale-105 transition duration-300 text-[15px] font-medium font-['Poppins'] whitespace-nowrap"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-24 text-center"
      >

        <p className="text-[14px] tracking-[2px] uppercase text-pink-600 font-semibold mb-3">
          Contact
        </p>

        <h2 className="font-['Poppins'] text-[42px] font-semibold mb-6">
          Let’s Connect
        </h2>

        <p className="text-[17px] font-normal text-slate-600 mb-4">
          shreyathokade8329@email.com
        </p>

        <p className="text-[17px] font-normal text-slate-600 mb-4">
          Pune, Maharashtra
        </p>

        <p className="text-[17px] font-normal text-slate-600 mb-8">
          English • Hindi • Marathi
        </p>

        <div className="flex justify-center gap-6 text-[15px] font-medium">
          <a
            href="https://www.linkedin.com/in/shreya-thokade-6bb173231"
            target="_blank"
            className="hover:text-pink-600 transition duration-300"
          >
            LinkedIn
          </a>
          <a href="https://github.com/ShreyaThokade"
            target="_blank"
            className="hover:text-pink-600 transition duration-300"
          >
            Github
          </a>
          <a
            href="mailto:shreyathokade8329@email.com"
            className="hover:text-pink-600 transition duration-300"
          >
            Email
          </a>
        </div>
      </section>
    </div>
  );
}