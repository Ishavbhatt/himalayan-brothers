import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export default function Example() {
  const accordiionData = [
    {
      title: "What harsh truths do you prefer to ignore?",
      text: " Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      title: "What harsh truths do you prefer to ignore?",
      text: " Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      title: "What harsh truths do you prefer to ignore?",
      text: " Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
    {
      title: "What harsh truths do you prefer to ignore?",
      text: " Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
    },
  ];
  return (
    <Accordion className="accordion_main">
      {accordiionData.map((accordion, index) => (
        <AccordionItem className="accordion_card" key={index}>
          <AccordionItemHeading>
            <AccordionItemButton>
              <h2 className="accordion_title">{accordion.title}</h2>
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>{accordion.text}</p>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

// import React, { useState } from "react";

// export default function Accordion(props) {
//   const [isShowing, setIsShowing] = useState(false);

//   const toggle = () => {
//     setIsShowing(!isShowing);
//   };

//   return (
//     <div className="accordion_main">
//         <h2>
//         <button onClick={toggle} type="button">{props.title}</button>
//         </h2>
//       <div className={isShowing ? "accordion_block": "accordion_none"}
//         dangerouslySetInnerHTML={{
//           __html: props.content
//         }}
//       />
//     </div>
//   );
// }
