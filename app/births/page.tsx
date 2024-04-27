import { getBirths } from "../(server)/search";
import ResultsTable from "../results/table";

async function BirthsPanel() {
    let births = await getBirths();

    return (
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Surname</th>
                    <th>First Names</th>
                    <th>Father</th>
                    <th>Mother</th>
                </tr>
            </thead>
            {births.map((birth) => {
                return (
                    <tr key={birth.uuid}>
                        <td className="font-bold">{birth.year}</td>
                        <td>{birth.surname?.toUpperCase()}</td>
                        <td>{birth.first_names}</td>
                        <td>{birth.father}</td>
                        <td>{birth.mother}</td>
                    </tr>
                );
            })}
        </table>
    );
}

export default async function BirthsPage() {
    return (
        <div className="p-8">
            <h1>Births</h1>
            <BirthsPanel />
        </div>
    );
}
