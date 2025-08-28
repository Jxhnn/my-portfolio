
import type { ReactNode } from "react";

export default interface TechnicalSkill {
    id: string;
    title: string;
    projects: string[];
    picture: string;
    level: string;
    description: ReactNode;
};