interface Language {
    name: string;
    level: string;
    description: string;
    show: boolean;
}

const languages: Language[] = [
    {
        name: "Español",
        level: "Nativo",
        description: "",
        show: true
    },
    {
        name: "Inglés",
        level: "B2",
        description: "",
        show: true
    },
    {
        name: "Francés",
        level: "B1",
        description: "",
        show: true
    }
];

export default languages;