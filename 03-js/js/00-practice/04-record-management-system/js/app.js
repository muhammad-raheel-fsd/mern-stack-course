document.forms["student-details-form"].addEventListener(
  "submit",
  function (event) {
    event.preventDefault(); // Prevent form from submitting normally
    const name = event.target.name.value;
    const age = event.target.age.value;
    const dob = event.target.dob.value;
    const gender = event.target.gender.value;
    const student = { name, age, dob, gender };

    const previousRecordsArray =
      window.localStorage.getItem("records") ?? JSON.stringify([]);
    const previousRecordsArrayParsed = JSON.parse(previousRecordsArray);
    console.log("previousRecordsArray", previousRecordsArrayParsed);
    previousRecordsArrayParsed.push(student);
    window.localStorage.setItem(
      "records",
      JSON.stringify(previousRecordsArrayParsed)
    );
    // event.target.name.value = "";
    // event.target.age.value = "";
    // event.target.dob.value = "";
    // event.target.gender.value = "";

    event.target.reset();
  }
);

// Nullish coalescing operator

console.log(undefined || "Raheel");
console.log(null || "Raheel");
console.log(undefined && "Raheel");
console.log(null && "Raheel");
console.log(null ?? "Raheel");
console.log(undefined ?? "Raheel");
console.log("" ?? "Raheel");
console.log(NaN ?? "Raheel");
console.log(false ?? "Raheel");
console.log(true ?? "Raheel");

// console.log(null.length);
// console.log(undefined.length);

const data = null ?? [];
data.length;
