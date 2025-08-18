import {type FC, type PropsWithChildren, useCallback, useState} from "react";
import {ContextMenu, type ContextMenuItem} from "./ContextMenu.context.ts";
import styles from './ContextMenu.module.css';
export const ContextMenuProvider: FC<PropsWithChildren<{}>> = ({children}) => {
    const [contextMenuItems, setContextMenuItems] = useState<ContextMenuItem[]>([]);
    const [position, setPosition] =  useState<number[]>([])

    const setContextMenu = useCallback((items: ContextMenuItem[],
                                        position:number[]) =>{

        setContextMenuItems(items);
        setPosition(position)


    }, [])
    return (
       <ContextMenu.Provider value={{setContextMenu}}>
           {position.length > 0 && (
               <ul className={styles.contextMenu}
               style = {{left: position[0], top: position[1]}}
               >
                   {contextMenuItems.map((items) => (
                       <li className={styles.contextMenuItem} key={items.name}
                       onClick={items.onClick}
                       >
                           {items.name}
                       </li>
                   ))}
               </ul>
           )}
           {children}
       </ContextMenu.Provider>
    )
}