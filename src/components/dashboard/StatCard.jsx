import React from "react";
import { ContentCard } from "../ContentCard";
import { Dropdown, Space } from "antd";
import { AiOutlineDown as IconDown, AiFillCaretUp as IconUpFilled, AiFillCaretDown as IconDownFilled} from 'react-icons/ai';
const items= [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    }
];
export const StatCard = () => {

    const title = (
        <div className="relative ">
            <div>
                <p > Stats </p>
            </div>
            <div className="absolute top-0 right-0 ">
                <Dropdown menu={{ items }}> 
                    <Space>
                        <p className="hover:cursor-pointer">This month</p>
                        <IconDown/>
                    </Space>
                    
                </Dropdown>
            </div>
        </div>
    )

    const content = (
        <div className="flex space-x-6 ">
            <div>
                <p className="text-gray-400">Avg. in game players</p>
                <div className="flex items-center justify-center">
                    <IconUpFilled/>
                    <span className="text-lg ">20</span>
                </div>
            </div>
            <div>
                <p className="text-gray-400">New players</p>
                <div className="flex items-center justify-center">
                    <IconDownFilled/>
                    <span className="text-lg ">10</span>
                </div>
            </div>
            <div>
                <p className="text-gray-400 ">Avg. play time</p>
                <div className="flex items-center justify-center">
                    <IconUpFilled/>
                    <span className="text-lg ">6h</span>
                </div>
            </div>
            
        </div>
        
    )

    return(
        <ContentCard
            title={title}
            content={content}
        />
    )
}