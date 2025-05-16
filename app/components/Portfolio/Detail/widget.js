const widget = ({ title, children }) => {
    return (
        <div className="md:pt-[17px] md:pb-6 py-4 border-t border-[#B3B3B3]">
            <h3 className="text-[16px]/[150%] text-left font-medium mb-2">{title}</h3>
            <div className="text-[14px]/[150%] text-left font-medium text-[#808080]">
                {children}
            </div>
        </div>
    );
}

export default widget;