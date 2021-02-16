window.addEventListener('load', (event) => {
    new gridjs.Grid({
      columns: [
        "Name", "Email", "Age", 
        {
            name:"Birth",
//            formatter: (cell) => `${cell.toISOString()}`
            formatter: (cell) => `${cell.toLocaleString()}`
        }
      ],
      sort: true,
      data: [
        ["John", "john@example.com", 30, new Date(Date.parse(`2000-01-01 00:00:00`))], 
        ["Mark", "mark@gmail.com", 20, new Date(Date.parse(`2000-01-01 00:00:01`))],
        ["Eoin", "eoin@gmail.com", 120, new Date(Date.parse(`2000-01-01 00:00:02`))],
        ["Sarah", "sarahcdd@gmail.com", 55, new Date(Date.parse(`2000-01-01 00:00:03`))],
        ["Afshin", "afshin@mail.com", 99, new Date(Date.parse(`2000-01-01 00:00:04`))]
      ]
    }).render(document.getElementById("grid"));
});
