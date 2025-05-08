"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./TeamMember.module.scss";
import { useState } from "react";
import TeamMemberPopup from "./TeamMemberPopup";

const TeamMember = ({ data }) => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <div 
                className={`${styles.teamMember} cursor-pointer h-[250px] md:h-[400px] overflow-hidden flex flex-col items-center transition-all duration-300 group relative`} 
                onClick={() => setShowPopup(true)} data-aos='fade-up'
            >
                <div className="absolute bottom-0 right-0 opacity-0 translate-x-[10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width={171} height={275} viewBox="0 0 171 275" fill="none">
                        <path d="M134.396 4.99966C136.677 4.50114 138.981 4.05418 141.296 3.64734L164.224 102.166L167.484 1.09168C168.659 1.06876 169.822 1 171.003 1C172.183 1 173.347 1.06303 174.521 1.09168L177.782 102.161L200.704 3.64161C203.02 4.04845 205.323 4.49541 207.604 4.99393L191.077 104.802L232.796 12.638C234.985 13.4918 237.151 14.38 239.294 15.3197L203.61 109.999L262.491 27.7542C264.468 29.0206 266.417 30.3213 268.336 31.6622L214.882 117.535L288.663 48.3714C290.353 49.993 292.009 51.6548 293.637 53.3452L224.469 127.127L310.347 73.6758C311.688 75.5954 312.995 77.5437 314.256 79.5206L232.005 138.398L326.691 102.716C327.631 104.859 328.519 107.025 329.373 109.214L237.191 150.924L337.006 134.398C337.504 136.679 337.951 138.983 338.358 141.298L239.833 164.224L340.908 167.485C340.931 168.659 341 169.822 341 171.003C341 172.183 340.937 173.346 340.908 174.521L239.833 177.782L338.358 200.708C337.951 203.023 337.504 205.321 337.006 207.607L237.191 191.081L329.373 232.797C328.519 234.986 327.631 237.152 326.691 239.295L232.005 203.613L314.256 262.491C312.989 264.468 311.688 266.416 310.347 268.336L224.469 214.885L293.637 288.666C292.015 290.357 290.359 292.013 288.663 293.64L214.882 224.477L268.336 310.349C266.417 311.69 264.468 312.997 262.491 314.257L203.61 232.012L239.294 326.692C237.151 327.631 234.985 328.52 232.796 329.373L191.077 237.198L207.604 337.006C205.323 337.505 203.02 337.952 200.704 338.358L177.776 239.839L174.516 340.908C173.341 340.931 172.178 341 170.997 341C169.817 341 168.653 340.937 167.479 340.908L164.218 239.839L141.29 338.358C138.975 337.952 136.677 337.505 134.39 337.006L150.917 237.198L109.204 329.373C107.015 328.52 104.849 327.631 102.706 326.692L138.39 232.012L79.5087 314.257C77.5317 312.991 75.5833 311.69 73.6635 310.349L127.118 224.477L53.3315 293.64C51.641 292.018 49.9849 290.357 48.3574 288.666L117.525 214.89L31.647 268.341C30.3061 266.422 28.9995 264.473 27.7388 262.497L109.99 203.619L15.3035 239.301C14.3637 237.158 13.4754 234.992 12.6216 232.803L104.803 191.087L4.98847 207.613C4.48991 205.332 4.04293 203.029 3.63606 200.714L102.162 177.787L1.09169 174.504C1.06877 173.329 1 172.166 1 170.986C1 169.805 1.06304 168.642 1.09169 167.467L102.167 164.207L3.64179 141.286C4.04866 138.971 4.49564 136.673 4.9942 134.387L104.809 150.913L12.633 109.203C13.4869 107.014 14.3751 104.848 15.3149 102.705L110.001 138.387L27.756 79.5091C29.0225 77.5322 30.3233 75.584 31.6642 73.6644L117.542 127.115L48.3688 53.3337C49.9906 51.6433 51.6524 49.9873 53.343 48.3599L127.124 117.523L73.6693 31.6564C75.589 30.3156 77.5374 29.0091 79.5145 27.7485L138.396 109.994L102.712 15.3197C104.855 14.38 107.021 13.4918 109.21 12.638L150.923 104.814L134.396 4.99966Z" stroke="url(#paint0_linear_24_174)" strokeWidth={2} strokeMiterlimit={10} />
                        <defs>
                            <linearGradient id="paint0_linear_24_174" x1="0.151877" y1="170.991" x2="341.848" y2="170.991" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#E93323" />
                                <stop offset={1} stopColor="#306DBD" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="flex-shrink p-4 sm:pt-6 sm:px-[30px] sm:pb-[10px] relative w-full">
                    <h3 className="text-[14px]/[141%] sm:text-[20px]/[141%] font-bold group-hover:text-white transition-all duration-300">{data.name}</h3>
                    <p className="text-[10px]/[155%] line-clamp-2 sm:text-base/[155%] group-hover:text-white transition-all duration-300">{data.position}</p>
                </div>
                <div className="relative flex-grow md:h-auto w-full sm:w-[80%] grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Image
                        src={data.image_url ? data.image_url : `http://212.85.24.190/storage/${data.image}`}
                        alt={data.name}
                        fill
                        className="object-cover object-top"
                    />
                </div>
                <div className="absolute bottom-[28px] left-[30px] opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width={64} height={31} viewBox="0 0 64 31" fill="none">
                        <path d="M47.34 0.800049L61.58 15.03L47.34 29.2701" stroke="#FF0000" strokeWidth="2.25" strokeMiterlimit={10} />
                        <path d="M0 15.03H61.58" stroke="#FF0000" strokeWidth="2.25" strokeMiterlimit={10} />
                    </svg>
                </div>
            </div>
            {showPopup && (
                <TeamMemberPopup 
                    member={data} 
                    onClose={() => setShowPopup(false)} 
                />
            )}
        </>
    );
};

export default TeamMember; 