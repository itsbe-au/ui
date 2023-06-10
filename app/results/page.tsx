"use client";
import LoadingSpinner from "@components/loadingSpinner";
import axios from "axios";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import ResultsTable from "./table";

interface Props {
    table: string;
    formData: any;
    clearFormData: () => void;
}

export default function ResultsPage(props: Props) {
    return (
        <motion.div
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            exit={ { opacity: 0 } }
            transition={ { duration: 1 } }
        >
            <div className="flex flex-col justify-center gap-8">
                <div className="flex flex-row p-2 bg-green text-white text-center justify-center">
                    <h3>{ props.formData.length } result(s) returned</h3>
                </div>
                <div
                    onClick={ () => props.clearFormData() }
                    className="transition-all mx-auto w-fit duration-300 text-center justify-center dark:text-blue-alternate text-blue hover:text-blue-lightest rounded-md p-4 hover:bg-blue-alternate hover:bg-opacity-20 cursor-pointer"
                >
                    &larr; Search again
                </div>
                <div className=" shadow-md mx-16 mb-32">
                    <ResultsTable
                        type={ props.table }
                        data={ props.formData }
                    />
                </div>
            </div>
        </motion.div>
    );
}
