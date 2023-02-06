import React from "react";
import { ContentCard } from "../ContentCard";
import { CircularProgressbarWithChildren , buildStyles } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";
export const EarningCard = () => {    
    const content = (
        <div className="flex gap-4 justify-between items-center p-[12px]">
            <div>                
                <div className="border-b-2 border-blue-400 text-2xl px-1 ">
                    <span className="text-sm">$</span>100.00
                </div>
                <p className="text-gray-400 text-sm">{"February"}</p>
            </div>
            <div style={{ width: 100, height: 100 }}>
                <VisibilitySensor>
                    {({ isVisible }) => {
                        const percentage = isVisible ? 75 : 0;
                        return (
                            <CircularProgressbarWithChildren 
                                value={percentage}                    
                                styles={buildStyles({
                                    strokeLinecap: "butt",
                                    pathColor: "rgb(13 113 236)"
                                })}
                            >
                                <div>
                                    <p>Expected</p>
                                    <p className="text-gray-400">$125</p>
                                </div>
                            </CircularProgressbarWithChildren>
                        );
                    }}
                </VisibilitySensor>
                
            </div>
            <div>
                <div className="border-b-2 border-blue-400 text-xl px-1 ">
                    <span className="text-sm">$</span>5.00
                </div>
                <p className="text-gray-400 text-sm">{"Today"}</p>
            </div>
        </div>
        
    )

    return(
        <ContentCard
            title={"Earnings"}
            content={content}
        />
    )
}