import React from "react";
import "./Hours.scss";
const Hours = () => {
  return (
    <div className="second-view">
      <i class="far fa-clock" />

      <h2>Business Hours</h2>
      <div className="hours">
        <ul>
          <li>
            <div className="business-hours-day">Monday</div>
            <div className="hours-line" />
            <div className="business-hours-time">Closed</div>
          </li>
          <li>
            <div className="business-hours-day">Tuesday</div>
            <div className="hours-line" />
            <div className="business-hours-time">
              11:00am – 02:30pm, 05:00pm – 09:00pm
            </div>
          </li>
          <li>
            <div className="business-hours-day">Wednesday</div>
            <div className="hours-line" />
            <div className="business-hours-time">
              11:00am – 02:30pm, 05:00pm – 09:00pm
            </div>
          </li>
          <li>
            <div className="business-hours-day">Thursday</div>
            <div className="hours-line" />
            <div className="business-hours-time">
              11:00am – 02:30pm, 05:00pm – 09:00pm
            </div>
          </li>
          <li>
            <div className="business-hours-day">Friday</div>
            <div className="hours-line" />
            <div className="business-hours-time">
              11:00am – 02:30pm, 05:00pm – 09:00pm
            </div>
          </li>
          <li>
            <div className="business-hours-day">Saturday</div>
            <div className="hours-line" />
            <div className="business-hours-time">11:00am – 09:30pm</div>
          </li>
          <li>
            <div className="business-hours-day">Sunday</div>
            <div className="hours-line" />
            <div className="business-hours-time">11:00am – 09:00pm</div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Hours;
