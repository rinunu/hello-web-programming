import {Message} from "@/app/_types/Message";

interface Props {
    message: Message
}

export function MessageView({message}: Props) {
    return <div className="whitespace-pre-wrap border p-2">{message.text}</div>;
}
