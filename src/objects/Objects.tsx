import React from 'react'

type StudentType = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  adress: AdresType;
  technologies: TechnologiesType[]
};

type AdresType = {
  street: string,
  city: CityType
  state: string
}

type CityType = {
  title: string
  country: string
};

type TechnologiesType = {
  id: number;
  title: string;
}

const Objects = () => {

  const student: StudentType = {
    id: 1,
    name: "Alex",
    age: 35,
    isActive: false,
    adress: {
      street: "123 Main St",
      city: {
        title: "Minsj",
        country: "Belarus",
      },
      state: "NY",
    },
    technologies: [
      { id: 1, title: "HTML" },
      { id: 2, title: "CSS" },
      { id: 3, title: "JS" },
      { id: 4, title: "React" },
      { id: 5, title: "Redux" },
    ],
  };

  const copyStudent = {...student, adress: {...student.adress, city: {...student.adress.city}}, technologies: student.technologies.map(el => ({...el, isStudied: false})) }

  const copyStudentSuper = structuredClone(student);
  copyStudentSuper.age = 55;
  copyStudentSuper.adress.street = 'Super';
  

  console.log("copyStudentSuper: ", copyStudentSuper);
  console.log("copyStudent: ", copyStudent);
  console.log('student: ', student);
  return (
    <div>
      <h1>{student.technologies[2].title}</h1>
    </div>
  );
}

export default Objects




