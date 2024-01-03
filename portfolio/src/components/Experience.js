import { useState } from "react";

const Experience = () => {

    const [currentTab, setCurrentTab] = useState();

    const tabs = [
        {
            id: 1,
            tabTitle: 'Adlytic AI',
            title: 'Worked @ Adlytic AI',
            Position: 'AI Intern',
            content: 'Duration: July 2022 - August 2022'
        },
        {
            id: 2,
            tabTitle: 'Linked Matrix',
            title: 'Worked @ Linked Matrix',
            Position: 'Backend Intern',
            content: 'Duration: October 2023 - Present'
        },
    ]

    const handleClick = (e) => {
        setCurrentTab(e.target.id)
    }

    return ( 
        <div className="experience">
            <h1>My Work Experience</h1>
            <div className="tabs">
                {tabs.map((tab, i) => 
                    <button
                        key={i}
                        id= {tab.id}
                        disabled= {currentTab === `${tab.id}`}
                        onClick={handleClick}
                    >
                        {tab.tabTitle}
                    </button>
                )}
            </div>
            <div className="content">
                {tabs.map((tab, i) =>
                    <div key={i}>
                        {currentTab === `${tab.id}` &&
                            <div>
                                <p>{tab.title}</p>
                                <p>{tab.Position}</p>
                                <p>{tab.content}</p>
                            </div>
                        }
                    </div>
                )}
            </div>
        </div>
     );
}
 
export default Experience;