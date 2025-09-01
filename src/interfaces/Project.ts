
import type { ReactNode } from "react";

export default interface Project {
    id: string;
    title: ReactNode;
    skills: string[];
    year: number;
    picture: string;
    description: ReactNode;
};