import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { T_MenuItem } from "./T_MenuItem";

export interface T_MenuProps {
    items: Array<T_MenuItem>;
    labelIco: IconDefinition;
    className?: string;
}