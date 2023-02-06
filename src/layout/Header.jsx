import React from "react";
import { AiOutlineNotification as IconNotification, AiOutlineQuestionCircle as IconQuestion} from 'react-icons/ai';
import { RxAvatar as IconUser } from 'react-icons/rx' 
export const Header = () => {
    return(
        <div>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 border-b border-gray-400">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between w-auto static block ">
                        <a
                            className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-sky-400"
                        >
                            logo
                        </a>
                    </div>
                    <div
                        className="flex  items-center"
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-row space-x-4 list-none ml-auto">
                            <li className="w-fit">
                                <div className="relative">
                                    <div className="absolute right-[0px] w-[5px] h-[5px] rounded-[50%] bg-red-600"></div>
                                    <IconNotification/>
                                </div>                                
                            </li>
                            <li className="w-fit">
                               <IconQuestion/>
                            </li>
                            <li className="w-fit">
                               <IconUser/>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}