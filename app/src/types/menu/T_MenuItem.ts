import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface T_MenuItem {
    label: {
        text: string;
        ico: IconDefinition;
    }
    className?: string;
    checkBox?: boolean;
    fn: (e: any) => void;
}