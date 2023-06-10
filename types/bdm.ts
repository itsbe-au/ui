export interface IBDM {
    year: number;
    registration_number?: string;
    gender?: string;
    surname?: string;
    first_names?: string;
    person_id?: number;
    other_information?: string;
}

export interface Birth extends IBDM {
    father?: string;
    mother?: string;
    birth_place?: string;
}

export interface Death extends IBDM {
    father?: string;
    mother?: string;
    death_place?: string;
    age?: string;
}

export interface Marriage extends IBDM {
    spouse_surname?: string;
    spouse_first_names?: string;
    marriage_place?: string;
}
