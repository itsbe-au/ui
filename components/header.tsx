import { information } from "../app/(common)/meta";
import SearchPanel from "./searchBar";

export default function Header() {
    return (
        <div className="text-center">
            <h1>{information.appName}</h1>
            <div>
                Use this to search for births, deaths and marriages in Victoria.
            </div>
            <div className="text-xs">
                Because we know how we all feel about the Vic Government&rsquo;s
                official site...
            </div>
        </div>
    );
}
