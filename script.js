let data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    let developers = data.filter((person) => person.profession === "developer");
    console.log(developers);
  }
  
  // 2. Add Data
  function addData() {
    let name = prompt("Enter a name:");
    let age = parseInt(prompt("Enter an age:"));
    let profession = prompt("Enter a profession:");
    data.push({ name, age, profession });
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    data = data.filter((person) => person.profession != "admin");
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let dummyArray = [
      { name: "dummy1", age: 30, profession: "dummyProfession1" },
      { name: "dummy2", age: 35, profession: "dummyProfession2" },
    ];
    let resultArray = data.concat(dummyArray);
    console.log(resultArray);
  }
  
  // 5. Average Age
  function averageAge() {
    let totalAge = data.reduce((acc, person) => acc + person.age, 0);
    let avgAge = totalAge / data.length;
    console.log("Average Age:", avgAge);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let isAbove25 = data.some((person) => person.age > 25);
    console.log("At least one person is above 25:", isAbove25);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let professions = [...new Set(data.map((person) => person.profession))];
    console.log("Unique Professions:", professions);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
    console.log("Sorted by Age:", data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    let john = data.find((person) => person.name === "john");
    if (john) {
      john.profession = "manager";
    }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let developerCount = data.filter((person) => person.profession === "developer").length;
    let adminCount = data.filter((person) => person.profession === "admin").length;
    console.log("Developer Count:", developerCount);
    console.log("Admin Count:", adminCount);
  }
  