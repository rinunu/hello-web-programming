import {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

export function HorizontalList({children}: Props) {
    return <div className="flex gap-1">{children}</div>;
}
