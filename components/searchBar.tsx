import { useContext, useEffect, useState } from "react";
import SearchContext from "../app/(common)/searchContext";
import SelectGroup from "./selectGroup";
import TextField from "./textField";

type Props = {
    data: any;
    setData: (value: any) => void;
};

export default function SearchPanel({ data, setData }: Props) {

    function handleDataChange(e: any, field: string) {
        if (e.length === 0) setData(delete data[field]);
        else setData({ [field]: e });
    }

    return (
        <>
            <div className="flex flex-col w-fit mx-auto justify-center items-center gap-2">
                <div className="text-xs uppercase tracking-widest text-gray">
                    Search for:
                </div>
                <select
                    name="select-table"
                    className="py-3 px-2 rounded-md cursor-pointer bg-gray-lightest dark:bg-gray-very-dark"
                    onChange={ (e) => handleDataChange(e.target.value, "table") }
                    defaultValue={ data?.table }
                >
                    <option value="default" disabled>Please select</option>
                    <option value="births">Births</option>
                    <option value="deaths">Deaths</option>
                    <option value="marriages">Marriages</option>
                </select>
                {/* <SelectGroup group="bdm-type" /> */ }
            </div>
            <div className="my-12 gap-8 space-y-8 block md:grid md:grid-cols-2 md:space-y-0 xl:flex xl:flex-row xl:h-full justify-between text-sm">
                <TextField
                    onChange={ (e) => handleDataChange(e.target.value, "first_names") }
                    value="first_names"
                    label="First name(s)"
                />
                <TextField
                    onChange={ (e) => handleDataChange(e.target.value, "surname") }
                    value="surname"
                    label="Last name"
                />
                <TextField
                    onChange={ (e) => handleDataChange(e.target.value, "place") }
                    value="place"
                    label={ `Place of event` }
                />
                <TextField
                    onChange={ (e) => handleDataChange(e.target.value, "from_year") }
                    value="from_year"
                    label="From year..."
                />
                <TextField
                    onChange={ (e) => handleDataChange(e.target.value, "to_year") }
                    value="to_year"
                    label="To year..."
                />
            </div>
        </>
    );
}
