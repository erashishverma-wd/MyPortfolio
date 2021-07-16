import React from 'react';
import { ReactComponent as WorkIcon } from '../src/images/work.svg';
import { ReactComponent as SchoolIcon } from '../src/images/school.svg';
import TimeLine from './TimeLine';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";



const Infographic = () => {


    let WorkIconStyles = { background: "#06D6A0" };
    let SchoolIconStyles = { background: "#3498db" };


    return (
        <div className="timeline" id="imageSet">
            <br />
            <br />
            <h1>Experience and Education</h1>
            <VerticalTimeline>
                {
                    TimeLine.map((elements) => {
                        let isWorkIcon = elements.icon === "work";
                        return (
                            <VerticalTimelineElement
                                key={elements.key}
                                date={elements.date}
                                dateClassName="date"
                                iconStyle={isWorkIcon ? WorkIconStyles : SchoolIconStyles}
                                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                            >
                                <h3 className="vertical-timeline-element-title">
                                    {
                                        elements.title
                                    }
                                </h3><br />
                                <h5 className="vertical-timeline-element-subtitle">
                                    {
                                        elements.company
                                    }
                                </h5>
                                <h5 className="vertical-timeline-element-subtitle">
                                    {
                                        elements.location
                                    }
                                </h5>
                                <h5 className="vertical-timeline-element-subtitle">
                                    {
                                        elements.department
                                    }
                                </h5>
                                
                                <h5 className="vertical-timeline-element-subtitle">
                                    {
                                        elements.course
                                    }
                                </h5>
                                <h5 className="vertical-timeline-element-subtitle">
                                    {
                                        elements.duration
                                    }
                                </h5>
                                <p id="description">
                                    {
                                        elements.description
                                    }
                                </p>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,64L480,224L960,160L1440,256L1440,320L960,320L480,320L0,320Z"></path>
</svg>
        </div>
    )
}

export default Infographic;