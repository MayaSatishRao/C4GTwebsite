import React from "react";

// importing required icons
import { InfoIcon } from "@/component/components";
import { IoDocumentOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiMoleculer } from "react-icons/si";

export const InfoBar23 = () => {
    return (
        <div className="mt-5">
            <h3 className="w-5/6 mx-auto text-4xl lg:text-5xl text-center font-bold text-color-primary py-8">C4GT 2023 in Numbers</h3>
            <div className="w-5/6 lg:w-3/4 xl:w-3/5 mx-auto grid grid-cols-2 lg:grid-cols-5">
                <InfoIcon icon={HiOutlineUsers} count={"42,021"} desc="Registrations" />
                <InfoIcon icon={IoDocumentOutline} count={"1,444"} desc="Proposals Received" />
                <InfoIcon icon={AiOutlineFundProjectionScreen} count={"104"} desc="Total Projects" />
                <InfoIcon icon={FaChalkboardTeacher} count={"75"} desc="Total Mentors" />
                <InfoIcon icon={SiMoleculer} className="col-start-1 col-end-3 lg:col-start-auto lg:col-end-auto" count={"103"} desc="Selected Contributors" />
            </div>
        </div>
    );
};