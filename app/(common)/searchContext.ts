import { createContext } from "react";
import { IBDM } from "../../types/bdm";

export interface ISearchContext {
    searchContext: IBDM | null;
    setSearchContext: (x: any) => void;
}

const SearchContext = createContext<ISearchContext | null>({
    searchContext: null,
    setSearchContext: (x) => null
});

export default SearchContext;
