/**
 * Datagrunnlag
 * NB! Du skal ikke endre disse arrayene!
 */

const personRegister = [
  {
    employeeId: 1,
    name: "Sandra Holmen",
    address: "Industrigata 8",
    phone: "99123456",
  },
  {
    employeeId: 2,
    name: "Lucia Talaga",
    address: "Kraftverkveien 31B",
    phone: "41234567",
  },
  {
    employeeId: 3,
    name: "Kristian Sørneset",
    address: "Bryggeriveien 29",
    phone: "98979897",
  },
  {
    employeeId: 4,
    name: "John Walker-Smith",
    address: "Astrid Lindgrens gate 37",
    phone: "99919991",
  },
  {
    employeeId: 5,
    name: "Andreas Halvorsen",
    address: "Rørosgata 7",
    phone: "41424344",
  },
  {
    employeeId: 6,
    name: "Kristina Pavlovic",
    address: "Biblioteksgata 45",
    phone: "45464748",
  },
  {
    employeeId: 7,
    name: "Lucia Talaga",
    address: "Lindealléen 14",
    phone: "92929292",
  },
  {
    employeeId: 8,
    name: "Frederik Granlund",
    address: "Rosenkrantz gate 30",
    phone: "43211234",
  },
  {
    employeeId: 9,
    name: "Marialuisa Varallo",
    address: "Håndverkergata 2",
    phone: "90909090",
  },
  {
    employeeId: 10,
    name: "Sho Yasutake",
    address: "Handelsveien 19",
    phone: "45674567",
  },
];

const salaryRegister = [
  {
    employeeId: 1,
    salary: 1000000,
  },
  {
    employeeId: 2,
    salary: 800000,
  },
  {
    employeeId: 3,
    salary: 530000,
  },
  {
    employeeId: 4,
    salary: 500000,
  },
  {
    employeeId: 5,
    salary: 450000,
  },
  {
    employeeId: 6,
    salary: 800000,
  },
  {
    employeeId: 7,
    salary: 480000,
  },
  {
    employeeId: 8,
    salary: 520000,
  },
  {
    employeeId: 9,
    salary: 750000,
  },
  {
    employeeId: 10,
    salary: 550000,
  },
];

const roleRegister = [
  {
    employeeId: 1,
    role: "Grunnlegger og CEO",
    department: "Ledelsen",
  },
  {
    employeeId: 2,
    role: "Daglig leder",
    department: "Ledelsen",
  },
  {
    employeeId: 3,
    role: "Skiftleder",
    department: "Medarbeidere",
  },
  {
    employeeId: 4,
    role: "Regnskapsmedarbeider",
    department: "Administrasjonen",
  },
  {
    employeeId: 5,
    role: "Butikkmedarbeider",
    department: "Medarbeidere",
  },
  {
    employeeId: 6,
    role: "Markedssjef",
    department: "Ledelsen",
  },
  {
    employeeId: 7,
    role: "Butikkmedarbeider",
    department: "Medarbeidere",
  },
  {
    employeeId: 8,
    role: "Butikkmedarbeider",
    department: "Medarbeidere",
  },
  {
    employeeId: 9,
    role: "HR-leder",
    department: "Administrasjonen",
  },
  {
    employeeId: 10,
    role: "HR-medarbeider",
    department: "Administrasjonen",
  },
];

/**
 * Logikk
 * Her skal du opprette logikken din.
 * Du skal ikke skrive kode annet enn i de tre funksjonene!
 */

function createNewRegister() {}

function createEmployeeCard(employee) {
  const container = document.getElementById("department-list");

  if (Array.isArray(employee) && employee.length === 0) {
    console.error("employee did not return an array");
    return;
  }

  const fkgnjkdngJsdf = `<div class="card-title">
  <h2 class="category">#TitlePlaceholder#</h2>
  </div>`;

  //container.innerHTML += cartTitle;

  employee.forEach((card) => {
    const content = `
    <div class="employee-card">
    <div class="employee-image"><img src="assets/images/avatar.jpg" alt="Avatar image of employee" /></div>
    <div class="
    </div>`;

    container.innerHTML += content;
  });
}

function renderEmployees() {
  createEmployeeCard(personRegister);
}

/**
 * Når siden er ferdig med å laste, skal kun renderEmployees() kjøres.
 * Du skal ikke endre koden under denne kommentaren!
 */

renderEmployees();
