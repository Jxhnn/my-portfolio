
import type { ReactNode } from "react";

export default interface TechnicalSkill {
    title: string;
    projects: string[];
    picture: string;
    level: string;
    description: ReactNode;
};