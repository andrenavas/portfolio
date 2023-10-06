import './Contact.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useForm } from "react-hook-form"
import emailjs from '@emailjs/browser'
import { SubmitHandler } from "react-hook-form"

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {

  const refForm = useRef<HTMLFormElement | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  // const onSubmit: SubmitHandler<FormData> = () => {

  //   const serviceId = 'service_3r5h4pq';
  //   const templateId = 'template_8m0otub';
  //   const apiKey = 'zm6FfodrnHMmVyw9R';

  //   emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
  //     .then(result => console.log(result.text))
  //     .catch(error => console.error(error))

  // };

  const onSubmit: SubmitHandler<FormData> = () => {
    if (refForm.current) {
      const serviceId = 'service_3r5h4pq';
      const templateId = 'template_8m0otub';
      const apiKey = 'zm6FfodrnHMmVyw9R';

      emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
        .then(result => console.log(result.text))
        .catch(error => console.error(error));
    }
  };


  return (
    <section className='contact-view' >
      <div className='container-contact-view'>
        <header className='contact-header'>
          <Navbar />
          <div className='container-title-about'>
            <span className='title-about'>contact-me</span>
          </div>
        </header>

        <main>
          <section className='container-main-contact'>
            <form className='' ref={refForm} onSubmit={handleSubmit(onSubmit)}>
              <label>Name</label>
              <input type='text' placeholder='Your name' required {...register('name')} />
              <label>Email</label>
              <input type='email' placeholder='your@email.com' required {...register('email')} />
              <label>Message</label>
              <textarea placeholder='Your message' required {...register('message')} />
              {errors.email && <span>This field is required</span>}
              <button className='btn fill' type='submit'>Submit</button>

            </form>
          </section>
        </main>
        <Footer />
      </div>
    </section>
  )
}

export default Contact;