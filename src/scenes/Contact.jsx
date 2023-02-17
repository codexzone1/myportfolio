import { motion } from "framer-motion"
import LineGradient from '../components/LineGradient'
import {useForm} from 'react-hook-form'

const Contact = ()=>{
    const { register, trigger, formState: { errors } } = useForm();

    const onSubmit = async (e) => {
        console.log("~ e", e);
        const isValid = await trigger();
        if (!isValid) {
          e.preventDefault();
        }
      };
      
    return(
        <section id="contact" className="contact py-48">
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
      className="flex justify-end w-full"
      >
        <div>
            <p className="uppercase font-playfair font-semibold text-4xl">
                <span className="text-red">contact me </span>to get started
            </p>
            <div className="flex justify-end my-5">
            <LineGradient width="w-1/2"/>
            </div>

        </div>

      </motion.div>
     <div className="md:flex md:justify-between gap-16 mt-5">
     <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      className="basis-1/2 flex justify-center"
      >
        <img src="../assets/contact-image.jpeg" alt="contact" />
      </motion.div>

      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
            <form
            target="_blank"
             onSubmit={onSubmit}
             action="https://formsubmit.co/c5eaf16f841a758f8256ece44541f0ea"
            method="POST"
          >
            <input
             type="text"
             placeholder="NAME"
             {...register("name",{
                required:true,
                maxLength:100,  
             })}
             className="w-full bg-blue p-3 placeholder-opaque-black font-semibold"
            />
           {errors.names && (
            <p className="text-red mt-1">
              {errors.name.type === 'required' && "This field is required."}
              {errors.name.type === 'required' && "This field is required."}
             </p> 
           )}
             <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}
            <button
            className="mt-5 p-3.5 text-white bg-gradient-to-br from-pink-500
             to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none
              focus:ring-pink-200 dark:focus:ring-pink-800 
            font-medium rounded-lg text-sm  text-center mr-2 mb-2"
            
            type="submit">
            SEND ME A MESSAGE
            </button>


          </form>
      </motion.div>
     </div>
      
      </section>
    )
}
export default Contact