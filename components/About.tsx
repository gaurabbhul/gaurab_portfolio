"use client";

const About = () => {
  return (
    <section id="about" className="py-20 w-full">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="heading">
          About <span className="text-purple">Me</span>
        </h1>

        <div className="mt-12 space-y-6 text-white-200 text-center">
          <p className="text-lg leading-relaxed">
            I&apos;m a{" "}
            <span className="text-purple font-semibold">
              MERN Stack Developer
            </span>{" "}
            focused on building responsive, scalable, and user-friendly web
            applications. I enjoy transforming ideas into complete digital
            products, from designing interfaces and building React applications
            to developing REST APIs, authentication systems, and MongoDB
            databases.
          </p>

          <p className="text-lg leading-relaxed">
            My passion lies in creating seamless experiences where frontend
            meets backend. I specialize in full-stack development, which means I
            can handle both the beautiful interfaces users interact with and the
            robust backend systems that power them.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="text-left p-6 rounded-lg border border-purple/30 bg-purple/10">
              <h3 className="text-xl font-bold text-purple mb-4">
                💡 What I Build
              </h3>
              <ul className="space-y-2 text-white-200">
                <li>✓ Responsive React & Next.js applications</li>
                <li>✓ Robust REST APIs with Node.js & Express</li>
                <li>✓ Full-stack MERN applications</li>
                <li>✓ Modern, scalable database designs</li>
                <li>✓ Authentication & authorization systems</li>
              </ul>
            </div>

            <div className="text-left p-6 rounded-lg border border-blue/30 bg-blue/10">
              <h3 className="text-xl font-bold text-blue-300 mb-4">
                🎯 My Strengths
              </h3>
              <ul className="space-y-2 text-white-200">
                <li>✓ React development & component design</li>
                <li>✓ Responsive & modern UI development</li>
                <li>✓ REST API & backend architecture</li>
                <li>✓ Database design & optimization</li>
                <li>✓ Git, GitHub & deployment (Vercel, Render)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
