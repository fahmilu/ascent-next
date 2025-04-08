const LinkOutside  = ({ href, children }) => {
    return (
        <a href={href} className="text-[14px]/[150%] md:text-[16px]/[150%] font-medium text-[#1B2057] whitespace-nowrap">{children} →</a>
    );
}

export default LinkOutside;