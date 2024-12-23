import Link from 'next/link';

const HomePage = () => {
  return (
    <section id="home" className="bg-accent text-center py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Hi, I&apos;m Taraka Sai Reddy Seelam
        </h1>
        <p className="text-lg text-gray-700">
          A Full Stack Developer specializing in scalable web applications and intuitive user interfaces.
        </p>
        <Link
          href="/#projects"
          className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-md shadow-md hover:bg-secondary transition duration-300"
        >
          View My Projects
        </Link>

      </div>
    </section>
  );
};

export default HomePage;
