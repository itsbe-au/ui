// @ts-nocheck

import DataTable, {
    TableColumn,
    TableStyles,
} from "react-data-table-component";
import { Birth } from "../../types/bdm";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

interface Props {
    type: string;
    data?: Array<any>;
}

export default function ResultsTable(props: Props) {
    let isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;


    const normalStyles: TableStyles = {
        table: {
            width: "100%",
        },
        headCells: {
            style: {
                backgroundColor: fullConfig.theme?.colors?.blue,
                color: fullConfig.theme?.colors?.white,
                fontWeight: "bold",
                wordWrap: "break-word",
            },
        },
        pagination: {
            style: {
                wordWrap: "break-word",
            },
        },
        cells: {
            style: {
                // backgroundColor: fullConfig.theme.colors["gray-lightest"]
            }
        }
    };

    const darkModeStyles: TableStyles = {
        ...normalStyles,
        pagination: {
            pageButtonsStyle: {
                color: fullConfig.theme?.colors?.white,
            },
            style: {
                backgroundColor: fullConfig.theme?.colors["gray-very-dark"],
                color: fullConfig.theme?.colors?.white,
                wordWrap: "break-word",
            },
        },
        rows: {
            style: {
                backgroundColor: fullConfig.theme?.colors["gray-very-dark"],
                color: "white",
            }
        },
        cells: {
            style: {
                // backgroundColor: fullConfig.theme.colors["gray-lightest"]
            }
        }
    };

    console.log("Is dark mode? " + isDarkMode)

    const customStyles: TableStyles = isDarkMode ? darkModeStyles : normalStyles;
    
    var columns;

    switch (props.type) {
        case "births":
            columns = [
                {
                    name: "ID",
                    selector: (row: Birth) => row.person_id,
                    style: {
                        fontWeight: "bold",
                        color: fullConfig.theme?.colors.blue,
                    },
                    sortable: true,
                },
                {
                    name: "Year",
                    selector: (row: Birth) => row.year,
                    sortable: true,
                },
                {
                    name: "Reg #",
                    selector: (row: Birth) => row.registration_number,
                    wrap: true,
                    sortable: true,
                },
                {
                    name: "First Name(s)",
                    selector: (row: Birth) => row.first_names,
                    grow: 5,
                    sortable: true,
                },
                {
                    name: "Surname",
                    selector: (row: Birth) => row.surname?.toUpperCase(),
                    grow: 5,
                    sortable: true,
                },
                {
                    name: "Father's Name",
                    selector: (row: Birth) => row.father,
                    grow: 5,
                    sortable: true,
                },
                {
                    name: "Mother's Name",
                    selector: (row: Birth) => row.mother,
                    grow: 5,
                    sortable: true,
                },
                {
                    name: "Birthplace",
                    selector: (row: Birth) => row.place,
                    grow: 5,
                    sortable: true,
                },
                {
                    name: "Other Info",
                    selector: (row: Birth) => row.other_information,
                    grow: 5,
                    wrap: true,
                },
            ];

            break;
        case "deaths":
            columns = [
                {
                    name: "ID",
                    selector: (row: Death) => row.person_id,
                    style: {
                        fontWeight: "bold",
                        color: fullConfig.theme?.colors.blue,
                    },
                    sortable: true,
                },
                {
                    name: "Year",
                    selector: (row: Death) => row.year,
                    sortable: true,
                },
                {
                    name: "Reg #",
                    selector: (row: Death) => row.registration_number,
                    wrap: true,
                    sortable: true,
                },
                {
                    name: "First Name(s)",
                    selector: (row: Death) => row.first_names,
                    grow: 5,
                    sortable: true,
                },
                {
                    name: "Surname",
                    selector: (row: Death) => row.surname?.toUpperCase(),
                    grow: 5,
                    sortable: true,
                },
                {
                    name: "Father's Name",
                    selector: (row: Death) => row.father,
                    grow: 5,
                    sortable: true,
                },
                {
                    name: "Mother's Name",
                    selector: (row: Death) => row.mother,
                    grow: 5,
                    sortable: true,
                },
                {
                    name: "Place",
                    selector: (row: Death) => row.place,
                    grow: 5,
                    sortable: true,
                },
                {
                    name: "Age",
                    selector: (row: Death) => row.age,
                    width: "80px",
                    sortable: true,
                },
                {
                    name: "Other Information",
                    selector: (row: Death) => row.other_information,
                    grow: 5,
                    wrap: true,
                },
            ];

            break;
        case "marriages":
            columns = [
                {
                    name: "ID",
                    selector: (row: Marriage) => row.person_id,
                    style: {
                        fontWeight: "bold",
                        color: fullConfig.theme?.colors.blue,
                    },
                    sortable: true,
                },
                {
                    name: "Year",
                    selector: (row: Marriage) => row.year,
                    sortable: true,
                },
                {
                    name: "Reg #",
                    selector: (row: Marriage) => row.registration_number,
                    wrap: true,
                    sortable: true,
                },
                {
                    name: "First Name(s)",
                    selector: (row: Marriage) => row.first_names,
                    grow: 5,
                    sortable: true,
                },
                {
                    name: "Surname",
                    selector: (row: Marriage) => row.surname?.toUpperCase(),
                    grow: 5,
                    sortable: true,
                },
                {
                    name: "Spouse Surname",
                    selector: (row: Marriage) => row.spouse_surname,
                    grow: 5,
                    sortable: true,
                },
                {
                    name: "Spouse First Name(s)",
                    selector: (row: Marriage) => row.spouse_first_names,
                    grow: 5,
                    sortable: true,
                },
                {
                    name: "Marriage Place",
                    selector: (row: Marriage) => row.place,
                    grow: 5,
                    sortable: true,
                },
                {
                    name: "Other Information",
                    selector: (row: Marriage) => row.other_information,
                    grow: 5,
                    wrap: true,
                },
            ];
            break;
    }

    return (
        <>
            <DataTable
                fixedHeader
                customStyles={ customStyles }
                columns={ columns }
                data={ props.data }
                pagination
                highlightOnHover={ !isDarkMode }
            />

        </>
    );
}