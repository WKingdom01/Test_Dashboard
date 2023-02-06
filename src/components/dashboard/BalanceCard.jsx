import React from "react";
import { ContentCard } from "../ContentCard";
import { Button } from "antd";
export const BalanceCard = ({ balance }) => {

    const content = (
        <div>
            <div className="text-start mb-8 font-semibold">
                <span className="text-2xl">$</span>
                <span className="text-4xl">{ balance }</span>
                <p className="text-gray-400 text-sm">Available</p>
            </div>
            <div className="text-start">
                <Button type="primary" ghost>Withdraw</Button>
            </div>
            
        </div>
        
    )

    return(
        <ContentCard
            title={"Your Balance"}
            content={content}
        />
    )
}