interface Props {
    label: string;
    value: string;
    onChange: (e: any) => void;
    validation?: string;
    placeholder?: string;
}

export default function TextField(props: Props) {
    return (
        <div className="flex flex-col gap-2 group w-full" data-lpignore="true">
            <div className="text-xs uppercase tracking-widest text-gray px-2">
                {props.label}
            </div>
            <input
                autoComplete="false"
                type="text"
                placeholder={props.placeholder}
                onChange={(e) => props.onChange(e)}
                className="transition-all px-2 py-3 bg-gray-lightest dark:bg-gray-very-dark rounded-md"
            ></input>
        </div>
    );
}
