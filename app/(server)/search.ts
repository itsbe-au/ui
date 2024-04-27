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

export async function getBirths(filters: object) {
    console.log("Getting births with filters", filters);

    const births = await prisma.births.findMany({
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
                gte: filters.year - 10 || 1837,
                lte: filters.year + 10 || 2000
            },
            birthplace: {
                contains: filters.place || undefined,
                mode: "insensitive"
            }
        }
    });
    return births;
}

export async function getDeaths(filters: object) {
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
                gte: filters.year - 10 || 1837,
                lte: filters.year + 10 || 2000
            },
            death_place: {
                contains: filters.place || undefined,
                mode: "insensitive"
            }
        }
    });
    return deaths;
    
}


export async function getMarriages(filters: object) {
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
                gte: filters.year - 10 || 1837,
                lte: filters.year + 10 || 2000,
            },
            marriage_place: {
                contains: filters.place || undefined,
                mode: "insensitive",
            },
        },
    });
    return marriages;
}