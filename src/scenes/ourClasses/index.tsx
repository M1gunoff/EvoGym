import { SelectedPage, ClassType } from '@/shared/types'
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion"
import HText from '@/shared/HText';
import Class from './Class'

const classes: Array<ClassType> = [
    {
        name: "Силовые тренировки",
        description: "Укрепите свои мышцы и улучшите физическую форму с нашими занятиями по силовым тренировкам. Эти классы помогут вам развить силу, выносливость и уверенность в себе, независимо от вашего уровня подготовки.",
        image: image1,
    },
    {
        name: "Занятия йогой",
        description: "Найдите гармонию между телом и разумом с помощью наших занятий йогой. Эти классы помогут вам улучшить гибкость, снизить уровень стресса и достичь внутреннего спокойствия.",
        image: image2,
    },
    {
        name: "Тренировки на мышцы кора",
        description: "Сосредоточьтесь на укреплении мышц кора и получайте видимые результаты с нашими специализированными занятиями. Эти классы помогут вам развить силу и стабильность, что является основой для всех видов физической активности.",
        image: image3,
    },
    {
        name: "Музыкальные тренировки",
        description: "Спортивные тренировки под музыку — это уникальное сочетание физической активности и музыкального ритма, которое поможет вам не только улучшить свою физическую форму, но и зарядиться позитивом! Занимайтесь с удовольствием, получая максимум от каждой тренировки!",
        image: image4,
    },
    {
        name: "Фитнес группы",
        description: "Участвуйте в наших фитнес-классах, которые предлагают разнообразные тренировки для всех уровней подготовки. Эти занятия помогут вам улучшить общую физическую форму и достичь ваших фитнес-целей.",
        image: image5,
    },
    {
        name: "Пилатес",
        description: "Укрепите свой кор, улучшите осанку и почувствуйте себя более гибким с нашими классами пилатеса. Эти занятия сочетают в себе плавные движения и изометрические упражнения, которые помогут вам развить силу, гибкость и осознанность. Подходит для всех уровней подготовки.",
        image: image6,
    }
]

interface Props {
    setSelectedPage: (value: SelectedPage ) => void; 
}  

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="группы" className="w-full bg-primary-100 py-40">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0},
                        }}
                >
                    <div className="md:w-3/5">
                        <HText>НАШИ ГРУППЫ</HText>
                        <p className="py-5">
                        В нашем тренажерном зале мы предлагаем разнообразные группы, которые помогут вам достичь ваших фитнес-целей и поддерживать здоровый образ жизни. Независимо от вашего уровня подготовки, наши занятия подходят для всех — от новичков до опытных спортсменов. Присоединяйтесь к нам и откройте для себя мир фитнеса, где каждый найдет что-то для себя!
                        </p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                        <ul className="w-[2800px] whitespace-nowrap">
                            {classes.map((item: ClassType, index) => (
                                <Class 
                                    key={`${item.name}-${index}}`}
                                    name={item.name}
                                    description={item.description}
                                    image={item.image}
                                />
                            ))}
                        </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClasses
