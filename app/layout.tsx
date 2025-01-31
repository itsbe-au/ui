"use client";

import React, { useState } from "react";
import { information as meta } from "./(common)/meta";
import "../styles/output.css";

import { motion } from "framer-motion";
import LoadingSpinner from "@components/loadingSpinner";
import Header from "@components/header";
import axios from "axios";
import HomePage from "./page";
import ResultsPage from "./results/page";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en-AU">
            <head>
                <meta charSet="utf-8" />
                <title>{meta.appName}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </head>

            <body className="bg-gray-lightest dark:bg-gray-very-dark font-sans p-2 sm:p-4 md:p-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-screen-2xl w-full mx-auto"
                    key={"bdm"}
                >
                    <div
                        className={`rounded-md bg-white dark:bg-black shadow-md w-full my-16`}
                    >
                        <div className="p-16 rounded-t-md bg-blue text-white">
                            <Header />
                        </div>

                        { children }
                        
                        <div className="rounded-b-md bg-gray-lightest dark:bg-gray dark:bg-opacity-30 dark:text-gray-lighter dark:text-opacity-25 text-gray text-opacity-50 p-4 text-xs flex flex-auto justify-between">
                            <div>Developed by Beau Nieuwveld</div>
                            <div>last updated 27 April 2024</div>
                            <a href="https://github.com/itsbe-au/vic-bdm-search-ui">GitHub repo</a>
                        </div>
                    </div>
                </motion.div>
            </body>
        </html>
    );
}
