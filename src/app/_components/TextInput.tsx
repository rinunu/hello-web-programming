interface Props {
    value: string;
    onValueChange?: (value: string) => void;
}

export function TextInput({value, onValueChange}: Props) {
    return <input
        type="text"
        className="border border-gray-300 p-2"
        value={value}
        onChange={(e) => onValueChange?.(e.target.value)}/>;
}
