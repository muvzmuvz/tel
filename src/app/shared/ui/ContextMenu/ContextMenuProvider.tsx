import {type FC, type PropsWithChildren, useCallback, useEffect, useRef, useState} from "react";
import {ContextMenu, type ContextMenuItem} from "./ContextMenu.context.ts";
import styles from './ContextMenu.module.css';

export const ContextMenuProvider: FC<PropsWithChildren<{}>> = ({children}) => {
    const [contextMenuItems, setContextMenuItems] = useState<ContextMenuItem[]>([]);
    const [position, setPosition] = useState<number[]>([]);

    const menuRef = useRef<HTMLUListElement | null>(null);

    const setContextMenu = useCallback((items: ContextMenuItem[], position: number[]) => {
        setContextMenuItems(items);
        setPosition(position);
    }, []);

    useEffect(() => {
        if (position.length === 0) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setContextMenuItems([]);
                setPosition([]);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [position]);

    return (
        <ContextMenu.Provider value={{setContextMenu}}>
            {position.length > 0 && (
                <ul
                    ref={menuRef}
                    className={styles.contextMenu}
                    style={{left: position[0], top: position[1]}}
                >
                    {contextMenuItems.map((items) => (
                        <li
                            className={styles.contextMenuItem}
                            key={items.name}
                            onClick={items.onClick}
                        >
                            {items.name}
                        </li>
                    ))}
                </ul>
            )}
            {children}
        </ContextMenu.Provider>
    );
};
