// importing files
import {
  cssNotes,
  introductionToCSS,
  cssSelector,
  cssAdvanceSelector,
  visualRules,
  boxModel,
} from "./notes";

const notesRender = () => {
  let _notesMapping = [
    {
      id: "c0",
      name: "CSS Notes",
      fname: cssNotes,
    },
    {
      id: "c1",
      name: "Introduction To CSS",
      fname: introductionToCSS,
    },
    {
      id: "c2",
      name: "CSS Selectors",
      fname: cssSelector,
    },
    {
      id: "c3",
      name: "CSS Advance Selectors",
      fname: cssAdvanceSelector,
    },
    {
      id: "c4",
      name: "CSS visual Rules",
      fname: visualRules,
    },
    {
      id: "c5",
      name: "Box Model",
      fname: boxModel,
    },
  ];
  return _notesMapping;
};

export default notesRender;
