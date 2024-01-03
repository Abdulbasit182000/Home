import { useState } from "react";
import logo from '../github.png'

const Work = () => {
  const [currentTab, setCurrentTab] = useState();

  const tabs = [
      {
          id: 1,
          tabTitle: 'BlogPost App',
          title: 'A blog Post appilcation where you could post, view and delete your blogs',
          link: 'https://github.com/Abdulbasit182000/Forntend-2/tree/work'
      },
      {
          id: 2,
          tabTitle: 'Weather CLI',
          title: 'A pthon cli based project where you could put your database and run cli commands to get diffirent ouputs.',
          link: 'https://github.com/Abdulbasit182000/Python/tree/main/Pyprac'

      },
      {
        id: 3,
        tabTitle: 'CeleryDB Revamp Project',
        title: 'A celery project combined with django where data is transformed every 300 seconds.',
        link: 'https://github.com/Abdulbasit182000/CeleryTask/tree/work'

      },
      {
        id: 4,
        tabTitle: 'Project Management App',
        title: 'In this application we have 27 endpoints in which some of them include login, logout, uploading projects, uploading tasks of these projects, uploading documents and lastly making comments.',
        link: 'https://github.com/Abdulbasit182000/TicketTask'

      },
  ]

  const handleClick = (e) => {
      setCurrentTab(e.target.id)
  }
  return (
    <div className="work">
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
                                <a href={tab.link}>
                                <img src={logo} alt="github link"/>
                                </a>
                            </div>
                        }
                    </div>
                )}
            </div>
    </div>
  );
}

export default Work;
