import { useMemo, useState } from "react"
import { config } from "../config";
import AboutMe from "./sections/AboutMe";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

export enum Pages {
    ABOUT_ME,
    EXPERIENCE,
    PROJECTS,
}

// Manual required for github.io pages
export const PageSetup = () => {
    const [currentPage, setCurrentPage] = useState<Pages>(Pages.ABOUT_ME);
    return {
        page: useMemo(() => {
            switch (currentPage) {
                case Pages.ABOUT_ME: return <AboutMe/>;
                case Pages.EXPERIENCE: return <Experience experiences={config.experiences} />;
                case Pages.PROJECTS: return <Projects projects={config.projects} />;
                default: return <AboutMe/>;
            }
        }, [currentPage]),
        navigateTo: (page: Pages) => setCurrentPage(page)
    };
}