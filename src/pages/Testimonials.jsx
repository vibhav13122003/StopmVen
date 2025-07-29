import React from "react";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote:
        "The instant GPS alert saved our staff critical seconds. We knew exactly where to go and what to do. It's an absolute game-changer for athlete safety.",
      name: "Coach Sarah Jenkins",
      title: "Head Soccer Coach",
      img: "https://placehold.co/100x100/64748B/FFFFFF/png?text=SJ",
    },
    {
      quote:
        "The ability to monitor fatigue and overexertion risks *before* they become emergencies allows us to make smarter training decisions. This is prevention, not just reaction.",
      name: "Dr. Miles Harrison",
      title: "Head of Sports Medicine",
      img: "https://placehold.co/100x100/64748B/FFFFFF/png?text=MH",
    },
  ];

  return (
    <section
      id='testimonials'
      className='bg-gray-900 text-white py-20 md:py-32'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl md:text-5xl font-extrabold tracking-tight text-center'>
          The New Standard of Care in Athletics.
        </h2>
        <div className='mt-16 max-w-4xl mx-auto grid md:grid-cols-2 gap-8'>
          {testimonials.map((testimonial, index) => (
            <figure
              key={index}
              className='bg-black p-8 rounded-2xl border border-gray-800 flex flex-col'
            >
              <blockquote className='text-gray-300 text-lg flex-grow'>
                "{testimonial.quote}"
              </blockquote>
              <figcaption className='mt-6 flex items-center'>
                <img
                  className='h-14 w-14 rounded-full object-cover'
                  src={testimonial.img}
                  alt={testimonial.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/100x100/64748B/FFFFFF?text=Err";
                  }}
                />
                <div className='ml-4'>
                  <div className='font-bold'>{testimonial.name}</div>
                  <div className='text-gray-400 text-sm'>
                    {testimonial.title}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
