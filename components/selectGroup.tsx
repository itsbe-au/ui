import { useState } from "react";

interface Props {
    group: string;
    onChange: (selected: string[]) => void;
    validation?: string;
    placeholder?: string;
}

export default function SelectGroup(props: Props) {
    const [selected, setSelected] = useState({
        births: false,
        deaths: false,
        marriages: false,
    });

    return (
        <div className="flex flex-row h-full items-stretch">
            <div
                onClick={ (e: any) => props.onChange(e.target.value!) }
                className={`transition-all h-full rounded-l-md px-4 py-4 dark:bg-gray-very-dark self-center cursor-pointer ${
                    selected.births
                        ? "bg-blue dark:bg-blue text-white hover:bg-blue-alternate"
                        : "bg-gray-lightest dark:bg-gray-very-dark hover:bg-gray-lighter dark:hover:bg-gray"
                }`}
            >
                Births
            </div>

            <div
                onClick={() =>
                    setSelected({ ...selected, deaths: !selected.deaths })
                }
                className={`transition-all h-full px-4 py-4 self-center cursor-pointer ${
                    selected.deaths
                        ? "bg-blue dark:bg-blue text-white hover:bg-blue-alternate"
                        : "bg-gray-lightest dark:bg-gray-very-dark hover:bg-gray-lighter dark:hover:bg-gray"
                }`}
            >
                Deaths
            </div>

            <div
                onClick={() =>
                    setSelected({ ...selected, marriages: !selected.marriages })
                }
                className={`transition-all h-full rounded-r-md px-4 py-4 dark:bg-gray-very-dark self-center cursor-pointer ${
                    selected.marriages
                        ? "bg-blue dark:bg-blue text-white hover:bg-blue-alternate"
                        : "bg-gray-lightest dark:bg-gray-very-dark hover:bg-gray-lighter dark:hover:bg-gray"
                }`}
            >
                Marriages
            </div>
        </div>
    );
}
