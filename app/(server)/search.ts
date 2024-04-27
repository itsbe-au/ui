"use server";

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function getBDMData(table: string, filters: any) {
    switch (table) {
        case "births":
            return await getBirths(filters);
        case "deaths":
            return await getDeaths(filters);
        case "marriages":
            return await getMarriages(filters);
        default:
            return [];
    }
}

export async function getBirths(filters: FilterPayload) {
    console.log("Getting births with filters", filters);

    const births = await prisma.births.findMany({
        where: {
            surname: {
                contains: filters.surname || undefined,
                mode: "insensitive",
            },
            first_names: {
                contains: filters.first_names || undefined,
                mode: "insensitive",
            },
            year: {
                gte: filters.year ? filters.year - 10 : undefined,
                lte: filters.year ? filters.year + 10 : undefined,
            },
            birthplace: {
                contains: filters.place || undefined,
                mode: "insensitive",
            },
        },
    });
    return births;
}

export async function getDeaths(filters: FilterPayload) {
    console.log("Getting deaths with filters", filters);

    const deaths = await prisma.deaths.findMany({
        where: {
            surname: {
                contains: filters.surname || undefined,
                mode: "insensitive"
            },
            first_names: {
                contains: filters.first_names || undefined,
                mode: "insensitive"
            },
            year: {
                gte: filters.year ? filters.year - 10 : undefined,
                lte: filters.year ? filters.year + 10 : undefined
            },
            death_place: {
                contains: filters.place || undefined,
                mode: "insensitive"
            }
        }
    });
    return deaths;
    
}


interface FilterPayload {
    surname?: string;
    first_names?: string;
    year?: number;
    place?: string;

}


export async function getMarriages(filters: FilterPayload) {
    console.log("Getting marriages with filters", filters);

    const marriages = await prisma.marriages.findMany({
        where: {
            surname: {
                contains: filters.surname || undefined,
                mode: "insensitive",
            },
            first_names: {
                contains: filters.first_names || undefined,
                mode: "insensitive",
            },
            year: {
                gte: filters.year ? filters.year - 10 : undefined,
                lte: filters.year ? filters.year + 10 : undefined,
            },
            marriage_place: {
                contains: filters.place || undefined,
                mode: "insensitive",
            },
        },
    });
    return marriages;
}