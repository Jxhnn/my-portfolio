
import type { ReactNode } from "react";

export default interface Project {
    id: string;
    title: ReactNode;
    year: number;
    picture: string;
    description: ReactNode;
};