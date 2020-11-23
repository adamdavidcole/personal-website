import CustomProjectPersonalWebsite from "./custom-project-personal-website";
import CustomProjectPerdue from "./custom-project-perdue";
import CustomProjectVirtualGaga from "./custom-project-virtual-gaga";
import CustomProjectSlackEngineering from "./custom-project-slack-engineering";

const CUSTOM_DESCRIPTIONS = {
  "personal-website": CustomProjectPersonalWebsite,
  perdue: CustomProjectPerdue,
  virtual_gaga: CustomProjectVirtualGaga,
  "slack-frontend-engineering": CustomProjectSlackEngineering,
};

function getCustomProjectDescription({ projectId }) {
  const customProjectDescription = CUSTOM_DESCRIPTIONS[projectId];
  if (!customProjectDescription) return null;

  return customProjectDescription;
}

export default getCustomProjectDescription;
