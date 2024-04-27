"use client";
import LoadingSpinner from "@components/loadingSpinner";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export interface Props {
    table: string;
    formData: any;
    clearFormData: () => void;
}

export default function ResultsPage() {
    return <div>Results page</div>;
}


