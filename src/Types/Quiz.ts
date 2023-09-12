export interface Question {
    _id:        string;
    text:       string;
    options:    Option[];
    language:   string;
    diffeculty: string;
    __v:        number;
}

export interface Option {
    text:      string;
    isCorrect: boolean;
    _id:       string;
}
