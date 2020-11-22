import PersonalWebsite from "./custom-project-personal-website";
import customProjectPerdue from "./custom-project-perdue";
import customProjectVirtualGaga from "./custom-project-virtual-gaga";

const CUSTOM_DESCRIPTIONS = {
  "personal-website": PersonalWebsite,
  perdue: customProjectPerdue,
  virtual_gaga: customProjectVirtualGaga,
};

function getCustomProjectDescription({ projectId }) {
  const customProjectDescription = CUSTOM_DESCRIPTIONS[projectId];
  if (!customProjectDescription) return null;

  return customProjectDescription;
}

export default getCustomProjectDescription;
