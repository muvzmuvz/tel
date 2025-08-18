import {useContext} from "react";
import {ContextMenu} from "../../shared/ui/ContextMenu/ContextMenu.context.ts";

export const useContextMenu = () => useContext(ContextMenu)