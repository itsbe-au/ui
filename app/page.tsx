"use client";

import SearchPanel from "@components/searchBar";
import LoadingSpinner from "@components/loadingSpinner";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import ResultsPage from "./results/page";
import NoResultsModal from "@components/noResults";
import { motion } from "framer-motion";

type Props = {
    formData: any;
    setFormData: (x: any) => void;
    search: () => void;
};

export default function Page(props: Props) {
    const [formData, setFormData] = useState({
        table: "births",
    });

    const [resultsData, setResultsData] = useState({});
    const [isSearching, setIsSearching] = useState(false);
    const [noResultsModalVisible, setNoResultsModalVisible] = useState(false);

    function handleDataChange(newData: any) {
        let theData = Object.assign(formData, newData);
        setFormData(theData);
    }

    async function getData() {
        setIsSearching(true);
        let table = formData.table;
        const { table: omitted, ...filters } = formData;
        let response = await axios.get(`https://vic-bdm-search-api.up.railway.app/${table}`, {
            params: filters,
        });
        setResultsData(await response.data);
        setIsSearching(false);

        if (Object.keys(resultsData).length === 0) {
            setNoResultsModalVisible(true);
            setTimeout(() => {
                setNoResultsModalVisible(false);
            }, 3000);
        }
    }

    if (Object.keys(resultsData).length !== 0)
        return <ResultsPage table={ formData.table } formData={ resultsData } clearFormData={ () => {
            setResultsData({});
            setFormData(formData);
        } } />;

    return (
        <>
            <motion.div
                initial={ { opacity: 0 } }
                animate={ { opacity: 1 } }
                exit={ { opacity: 0 } }
                transition={ { duration: 1 } }
            >
                <LoadingSpinner visible={ isSearching } />
                <NoResultsModal visible={ noResultsModalVisible } />
                <div className="flex flex-col p-32">
                    <SearchPanel data={ formData } setData={ (x) => handleDataChange(x) } />
                    <div
                        onClick={ () => getData() }
                        className={ `transition-all duration-300 rounded-md p-4 mt-8 w-2/12 mx-auto text-center text-white bg-blue cursor-pointer hover:bg-blue-alternate hover:scale-105` }
                    >
                        Search
                    </div>
                </div>
            </motion.div>

        </>
    );
}
