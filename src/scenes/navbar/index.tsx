import { useState } from 'react';
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline"; 
import Logo from "@/assets/Logo.png"
import Link from './Link';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';

interface Props {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
    return (
        <nav>
            <div 
                className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
            >
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LEFT */}
                        <img alt="logo" src={Logo} />
                        

                        {/* RIGHT */}
                        {isAboveMediumScreens ? (
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link page="Главная" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Преимущества" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Группы" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Контакты" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <p>Войти</p>
                                <ActionButton setSelectedPage={setSelectedPage}>Стать участником</ActionButton>
                            </div>
                        </div>
                        ) : (
                               <button className = 'rounded-full bg-secondary-500 p-2'
                               onClick={() => setIsMenuToggled(!isMenuToggled)}>
                                <Bars2Icon className="h-6 w-6 text-white" />
                               </button>
                            )}
                    </div>
                </div>
            </div>

        {/* MOBILE MENU */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                <div className="flex justify-end p-12">
                    <button onClick={
                        () => setIsMenuToggled(!isMenuToggled)
                    }>
                        <XMarkIcon className="h-6 w-6 text-gray-400" />
                    </button>
                </div>

                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                                <Link page="Главная" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Преимущества" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Группы" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                <Link page="Контакты" selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                </div>
            </div>
        )}
        </nav>
    )
}

export default Navbar
