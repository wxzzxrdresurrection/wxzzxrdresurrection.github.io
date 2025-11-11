interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Laravel",
    description: "Mi framework preferido para desarrollo backend con PHP",
    icon: "laravel"
  },
  {
    name: "VueJS",
    description: "El framework con el que mas experiencia tengo para construir interfaces de usuario",
    icon: "vue"
  },
  {
    name: "MySQL",
    description: "He usado MySQL en varios proyectos para gestionar bases de datos relacionales desde 2021",
    icon: "mysql"
  },
  {
    name: "Ruby on Rails",
    description: "Mi mas reciente experiencia ha sido con Ruby on Rails",
    icon: "rails"
  }
];

export default hardSkills;