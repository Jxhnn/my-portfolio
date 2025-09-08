
import type { ReactNode } from "react";

export default interface Skill {
    id: string;
    title: string;
    picture: string;
    level: string;
    description: ReactNode;
};