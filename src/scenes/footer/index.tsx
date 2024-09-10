import { motion } from 'framer-motion'
import { SelectedPage} from "@/shared/types";
import Logo from '@/assets/Logo.png'

interface Props {
    setSelectedPage : (value: SelectedPage) => void;
}


const Footer = ({ setSelectedPage }: Props) => {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img alt="logo" src={Logo} />
                    <p className="my-5">
                    В нашем фитнес-центре мы предлагаем широкий выбор тренировок и программ, адаптированных под ваши индивидуальные цели. Наша команда экспертов всегда готова помочь вам достичь желаемых результатов и поддержать вас на каждом шаге.
                    </p>
                    <p>
                        © Made with M1gunoff.
                    </p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Ссылки</h4>
                    <motion.p 
                        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
                    className="my-5"><a href="./" target="_blank">Главная</a></motion.p>
                    <p className="my-5"><a href="https://m1gunoff.ru" target="_blank">m1gunoff.ru</a></p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Свяжитесь с нами</h4>
                    <p className="my-5">Мы всегда рады вашим вопросам и предложениям. Не стесняйтесь обращаться к нам!</p>
                    <p className="my-5">@m1gunoff</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
