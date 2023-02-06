import React from "react";

export const ContentCard = ({title, content}) => {
    return(
        <div className="border border-gray-400 rounded-xl min-w-[350px] font-semibold">
            <div className="border-b border-gray-400 p-2">
                {title}
            </div>
            <div className="p-4">
                {content}
            </div>
        </div>
    )
}