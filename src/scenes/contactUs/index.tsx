import { useForm } from 'react-hook-form';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import HText from '@/shared/HText';

interface Props {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-5`

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();

    const handleSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }


    return (
        <section id="контакты" className="mx-auto w-5/6 pt-24 pb-32"> 
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
                {/* HEADER */}
                <motion.div 
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                 <HText>
                    <span className="text-primary-500">ПРИСОЕДИНЯЙТЕСЬ СЕЙЧАС, </span>
                    {" "}ЧТОБЫ СОЗДАТЬ ФОРМУ МЕЧТЫ
                 </HText>
                 <p className="my-5">
                 Мы приглашаем всех, кто стремится к здоровому образу жизни и идеальной физической форме, присоединиться к нашему дружному сообществу. В нашем тренажерном зале вы найдете все необходимое для достижения своих целей: современное оборудование, опытных тренеров и мотивирующую атмосферу.
                 </p>

                {/* FORM AND IMAGE */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        className="mt-10 basis-3/5 md:mt-0"
                    >
                        <form
                            target="_blank"
                            onSubmit={handleSubmit}
                            action="https://formsubmit.com/"
                            method="POST"
                        >
                            <input 
                                className={inputStyles}
                                type="text"
                                placeholder="ИМЯ"
                                {...register("name", {
                                    required: true,
                                    maxLength: 100,

                                })}
                            />
                            {errors.name && (
                                <p className="mt-1 text-primary-500">
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "Max length is 100 char."}
                                </p>
                            )}

                            <input 
                                className={inputStyles}
                                type="text"
                                placeholder="ПОЧТА"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,    
                                })}
                            />
                            {errors.email && (
                                <p className="mt-1 text-primary-500">
                                    {errors.email.type === "required" && "This field is required."}
                                    {errors.email.type === "pattern" && "Invalid email address."}
                                </p>
                            )}

                            <textarea
                                className={inputStyles}
                                placeholder="СООБЩЕНИЕ"
                                rows={4}
                                cols={50}
                                {...register("message", {
                                    required: true,
                                    maxLength: 2000,

                                })}
                            />
                            {errors.message && (
                                <p className="mt-1 text-primary-500">
                                    {errors.message.type === "required" && "This field is required."}
                                    {errors.message.type === "maxLength" && "Max length is 2000 char."}
                                </p>
                            )}

                            <button 
                                type="submit"
                                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                            >
                                ОТПРАВИТЬ
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        className="relative mt-16 basis-2/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                            <img 
                                className="w-full"
                                alt="contact-us-page-graphic"
                                src={ContactUsPageGraphic}
                            />
                        </div>
                    </motion.div>
                </div>
                </motion.div>
            </motion.div>   
        </section>
    )
}

export default ContactUs
