const Hero = () => {
  return (
    <section className="pt-28 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Sharmora Medical Systems
        </h1>

        {/* Tagline */}
        <p className="text-xl text-blue-600 font-medium mb-4">
          Advanced Medical Equipment Solutions
        </p>

        {/* Description */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Providing reliable ICU, OT, and diagnostic equipment for hospitals 
          and healthcare facilities with quality assurance and trusted support.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            View Products
          </button>

          <a
            href="https://wa.me/918800702856"
            target="_blank"
            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
          >
            WhatsApp Inquiry
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;