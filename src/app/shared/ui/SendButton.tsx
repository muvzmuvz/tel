import {SendHorizontal} from "lucide-react";

function SendButton() {
    return (
        <button className={'bg-blue-400 rounded-xl px-5 py-3 text-white cursor-pointer hover:bg-blue-500'}><SendHorizontal /></button>
    );
}

export default SendButton;