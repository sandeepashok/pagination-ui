import React from "react";
import "./card.css";
import { CgProfile, CgWorkAlt } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

interface UserInfo {
  ID: string;
  JobTitle: string;
  EmailAddress: string;
  FirstNameLastName: string;
  Email: string;
  Phone: string;
  Company: string;
}

interface CardProps {
  userInfo: UserInfo[];
}

const Card: React.FC<CardProps> = ({ userInfo }) => {
  return (
    <div className="cards-container">
      {userInfo
        .slice(0, 10)
        .map(
          ({
            ID,
            JobTitle,
            FirstNameLastName,
            Email,
            EmailAddress,
            Phone,
            Company,
          }) => (
            <div className="card-container" key={ID}>
              <div className="gradient">
                <b style={Company.length > 17 ? { fontSize: "medium" } : {}}>
                  <CgWorkAlt />
                  {Company}
                </b>
              </div>
              <div className="dp">
                <CgProfile />
              </div>
              <div className="user-info">
                <b className="name">{FirstNameLastName}</b>
                <p className="title">{JobTitle}</p>
                <a className="phone" href={`tel:${Phone}`}>
                  <FaPhone />
                  {Phone}
                </a>
                <b className="heading">Mail me@</b>
                <a className="mail" href={`mailto:${Email}`}>
                  <IoIosMail />
                  {Email.split("@")[0]}
                </a>
                <b className="heading">Email Address</b>
                <a className="mail" href={`mailto:${EmailAddress}`}>
                  <IoIosMail />
                  {EmailAddress.split("@")[0]}
                </a>
              </div>
            </div>
          )
        )}
    </div>
  );
};

export default Card;
