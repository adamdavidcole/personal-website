import PersonalWebsite from "./custom-project-personal-website";

const CUSTOM_DESCRIPTIONS = {
  "personal-website": PersonalWebsite,
};

function getCustomProjectDescription({ projectId }) {
  const customProjectDescription = CUSTOM_DESCRIPTIONS[projectId];
  if (!customProjectDescription) return null;

  return customProjectDescription;
}

export default getCustomProjectDescription;
