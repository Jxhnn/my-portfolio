
import type { ReactNode } from "react";

export default interface Project {
    title: ReactNode;
    skills: string[];
    year: number;
    picture: string;
    description: ReactNode;
};