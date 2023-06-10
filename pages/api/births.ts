// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import postgres from "postgres";

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    /**
     * Applicable query parameters:
     *
     *      - first_name: string
     *      - last_name: string
     *      - year: integer
     *      - registration_number: string
     *      - father: string
     *      - mother: string
     *      - place: string
     *
     *  Example syntax:
     *      SELECT * FROM births WHERE first_names LIKE '%William%' LIMIT 10
     */

    res.status(200).json('yes');
}
