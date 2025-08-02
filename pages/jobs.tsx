import Navbar from "../componenets/Navbar";
import "../app/globals.css";
export default function JobsPage() {
  const jobs = [
    {
      title: 'HR Administrator',
      location: 'City of London',
      type: 'Full-Time',
      description: 'Coordinate employee records, support recruitment, and maintain compliance.',
    },
    {
      title: 'Warehouse Operative',
      location: 'East London',
      type: 'Part-Time',
      description: 'Assist with inventory management and logistics.',
    },
    {
      title: 'Barista',
      location: 'Central London',
      type: 'Flexible Hours',
      description: 'Serve high-quality drinks and ensure a friendly café atmosphere.',
    },
  ];
  function boldParttimeJob(data:string){
    if(data){
      if (data==="Part-Time"){
        return ""
      }
    }

  }

  return (
    <>
    <Navbar />
    <section className="mt-10 min-h-screen px-6 py-16 bg-gradient-to-br from-gray-50 to-white text-gray-900">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 tracking-tight mb-12">
        ✨ Browse Career Opportunities
      </h1>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold text-pink-600">{job.title}</h2>

              <p className="mt-2 text-sm text-gray-500">
                {job.location} · { " "}
                {job.type === "Part-Time" ? <span className="font-bold text-red-500">{job.type}</span> : job.type}
              </p>

              <p className="mt-4 text-gray-700 leading-relaxed">{job.description}</p>
            </div>

            <a
              href="/contact"
              className="mt-6 inline-block px-4 py-2 bg-pink-500 text-white font-medium rounded-full hover:bg-pink-600 transition text-center"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}
