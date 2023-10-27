import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail, AiOutlineGlobal } from "react-icons/ai";
import Style from '../styles/top-nav.module.scss'
const TopHeader = () => {
    const items = [
        { icon: <BsFillTelephoneFill />, description: "+212 000 xx xx xx" },
        { icon: <AiOutlineMail />, description: "example@gmail.com" },
        { icon: <AiOutlineGlobal />, description: "your address here" },
    ];

    return (
        <div className={`${Style["topNav"]} "mx-3 py-5 text-center"`}>
            <div className="flex gap-3 flex-wrap justify-end">
                <ul className="flex justify-end">
                    {items.map(({ icon, description }, index) => (
                        <li key={index} className="flex items-center gap-2 mr-5">
                            <span>{icon}</span>
                            <span>{description}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default TopHeader;