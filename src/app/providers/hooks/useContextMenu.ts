import {useContext} from "react";
import {ContextMenu} from "../ui/ContextMenu/ContextMenu.context.ts";

export const useContextMenu = () => useContext(ContextMenu)