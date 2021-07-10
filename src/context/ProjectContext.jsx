import React from "react";

const ProjectContext = React.createContext();

const ProjectProvider = ProjectContext.Provider;
const ProjectConsumer = ProjectContext.Consumer;

export { ProjectContext };

export { ProjectProvider, ProjectConsumer };
