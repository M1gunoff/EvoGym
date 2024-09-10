import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/outline"
import { motion } from 'framer-motion';
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "Современные удобства",
        description: 
         "Наш тренажерный зал оборудован по последнему слову техники, чтобы предоставить вам максимальный комфорт и эффективность тренировок. Мы заботимся о вашем удобстве и создаем идеальные условия для достижения ваших фитнес-целей."
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "Сотни разнообразных классов",
        description: 
         "Мы предлагаем широкий выбор групповых занятий, чтобы каждый мог найти что-то для себя. От йоги до кроссфита — у нас есть классы на любой вкус и уровень подготовки. Присоединяйтесь к нашему сообществу и откройте для себя новые возможности!"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Экспертные тренеры",
        description: 
         "Наши профессиональные тренеры обладают опытом и знаниями, чтобы помочь вам достичь ваших целей. Они разработают индивидуальную программу тренировок и будут поддерживать вас на каждом этапе вашего фитнес-путешествия. Доверьтесь нашим экспертам и добейтесь успеха!"
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2}
    }
}

interface Props {
    setSelectedPage: (value: SelectedPage) => void;

}

const Benefits = ({setSelectedPage}: Props) => {
    return (
        <section
        id="преимущества"
        className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/* HEADER */}
                <motion.div 
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>БОЛЬШЕ, ЧЕМ ПРОСТО ТРЕНАЖЕРНЫЙ ЗАЛ.</HText>
                    <p className="my-5 text-sm">
                    Мы предоставляем фитнес-оборудование мирового класса, тренеров и занятия, которые помогут вам с легкостью достичь ваших конечных целей в фитнесе. Мы обеспечиваем настоящую заботу о каждом члене.
                    </p>
                </motion.div>

                {/* BENEFITS */}
                <motion.div className="md:flex items justify-between gap-8 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5}}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

                {/* GRAPHICS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flexmotion.">
                    {/* GRAPHIC */}
                    <img 
                        className="mx-auto"
                        alt="benefits-page-graphic"
                        src={BenefitsPageGraphic}
                    />

                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content0-abstractwaves" >
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}

                                >
                                    <HText>
                                        МИЛЛИОНЫ СЧАСТЛИВЫХ УЧАСТНИКОВ ПОЛУЧАЮТ{" "}
                                        <span className="text-primary-500">
                                        ЗДОРОВОЕ ТЕЛО
                                        </span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>

                        {/* DESCRIPT */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0},
                            }}
                        >
                            <p className="my-5">Присоединяйся к нашему сообществу мотивированных людей, которые стремятся к здоровому образу жизни и идеальной физической форме. В нашем тренажерном зале ты найдешь все необходимое для достижения своих целей: современное оборудование, профессиональных тренеров и дружелюбную атмосферу.</p>
                            <p className="mb-5">Наши программы тренировок разработаны с учетом индивидуальных особенностей каждого клиента. Мы поможем тебе сбросить лишний вес, нарастить мышечную массу, улучшить выносливость и гибкость. Регулярные занятия в нашем зале не только преобразят твое тело, но и наполнят тебя энергией и уверенностью в себе.</p>
                        </motion.div>

                        {/* BUTTON */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Вступить сейчас
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits
