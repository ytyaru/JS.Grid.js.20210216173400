window.addEventListener('load', (event) => {
    new gridjs.Grid({
      columns: ["Name", "Email", "Age", "Birth"],
      sort: true,
      data: [
        ["John", "john@example.com", 30, Date.parse(`2000-01-01 00:00:00`)],
        ["Mark", "mark@gmail.com", 20, Date.parse(`2000-01-01 00:00:01`)],
        ["Eoin", "eoin@gmail.com", 120, Date.parse(`2000-01-01 00:00:02`)],
        ["Sarah", "sarahcdd@gmail.com", 55, Date.parse(`2000-01-01 00:00:03`)],
        ["Afshin", "afshin@mail.com", 99, Date.parse(`2000-01-01 00:00:04`)]
      ]
    }).render(document.getElementById("grid"));
});
