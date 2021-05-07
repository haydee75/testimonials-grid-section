import TestimonialCard from './TestimonialCard';
import testimonialData from '../../testimonialData';
import './Testimonial.scss'

function TestimonialContainer() {
  const testimonialComponent = testimonialData.map((testimonial,index) => {
    return (
      <TestimonialCard key={testimonial.id} index={index} cardColor={testimonial.cardColor} img={testimonial.img} firstname={testimonial.firstname} name={testimonial.name} status={testimonial.status} resume={testimonial.resume} quote={testimonial.quote} />
    )
  })

  return (
    <section className="Container">
        <div className="Row">
            {testimonialComponent}
        </div>
    </section>
  );
}

export default TestimonialContainer;