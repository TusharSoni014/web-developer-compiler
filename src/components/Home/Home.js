import React from "react";
import "./home.scss";
import LabCard from "./LabCard/LabCard";
import { SiPython, SiCplusplus } from "react-icons/si";
import { BsCCircle, BsCodeSlash, BsFillPatchQuestionFill } from "react-icons/bs";
import { FaJava } from "react-icons/fa";

const labs = [
  {
    logo: <SiPython />,
    name: "Python v3 Lab",
    backgroundColor: "linear-gradient(to right bottom, #ffd045, #fcd050)",
    color: "black",
    url: "python-lab",
  },
  {
    logo: <BsCodeSlash />,
    name: "Web-Dev Lab",
    backgroundColor: "#73C1C3",
    color: "black",
    url: "web-dev-lab",
  },
  {
    logo: <SiCplusplus />,
    name: "C++ Lab",
    backgroundColor:
      "linear-gradient(to right bottom, #659BD3,#00599D, #004283)",
    color: "white",
    url: "cpp-lab",
  },
  {
    logo: <BsCCircle />,
    name: "C Lab",
    backgroundColor:
      "linear-gradient(to right bottom, #5D6CBF, #3949AA, #293693)",
    color: "white",
    url: "c-lab",
  },
  {
    logo: <FaJava />,
    name: "Java Lab",
    backgroundColor: "linear-gradient(to right bottom, #F89917, #F89917)",
    color: "black",
    url: "java-lab",
  },
  {
    logo: <BsFillPatchQuestionFill />,
    name: "More Coming Soon",
    backgroundColor: "#cbcbcb",
    color: "black",
    url: "",
  },
];

export default function Home() {
  return (
    <div className="home-main-container">
      {labs.map((item) => {
        return <LabCard data={item} />;
      })}
    </div>
  );
}
