export interface HistoryData {
    date: string;
    url:  string;
    data: Data;
}

export interface Data {
    Events: Birth[];
    Births: Birth[];
    Deaths: Birth[];
}

export interface Birth {
    year:         string;
    text:         string;
    html:         string;
    no_year_html: string;
    links:        Link[];
}

export interface Link {
    title: string;
    link:  string;
}
