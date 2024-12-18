import {ReactNode} from "react";

interface Props {
    children: ReactNode;
    onClick?: () => void;
}

export function Button({children, onClick}: Props) {
    return <button className="bg-neutral-300 p-2" onClick={onClick}>{children}</button>;
}
