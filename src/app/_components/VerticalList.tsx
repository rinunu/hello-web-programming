import {ReactNode} from "react";

interface Props {
    children: ReactNode;
}

export function VerticalList({children}: Props) {
    return <div className="flex flex-col gap-1">{children}</div>;
}
