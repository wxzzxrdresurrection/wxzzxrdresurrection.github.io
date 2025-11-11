interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Ingeniería en Desarrollo y Gestión de Software",
        startDate: "2023-09-06",
        endDate: "2025-04-19",
        school: "Universidad Tecnológica de Torreón",
        location: "México",
        description: "Desarrollo, gestión y planeación de software de calidad.",
        currentUni: true,
    },
    {
        title: "TSU Desarrollo de Software Multiplataforma",
        startDate: "2021-09-13",
        endDate: "2023-08-17",
        school: "Universidad Tecnológica de Torreón",
        location: "México",
        description: "Desarrollo de aplicaciones multiplataforma para diferentes dispositivos.",
        currentUni: false,
    },
];

export default education;