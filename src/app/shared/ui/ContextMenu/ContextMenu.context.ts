import { createContext } from "react";

export interface ContextMenuItem {
    name: string;
    onClick: () => void;
}

interface ContextMenuModel {
    setContextMenu: (item: ContextMenuItem[], positions: number[]) => void;
}

export const ContextMenu = createContext<ContextMenuModel>({
    setContextMenu: () => {},
});
