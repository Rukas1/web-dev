

const pieCanvasSem1 = document.getElementById("pieCanvasSem1");
const pieChart1 = new Chart(pieCanvasSem1, {
    type: "doughnut",
    data: {
        labels: [
            "Vert plus",
            "Vert clair",
            "Jaune",
            "Rouge",
            "Absent",
            "Non evalue"
        ],
        datasets: [{
            data: [89, 44, 3, 0, 1, 1],
            backgroundColor: ["#008000cc", "#45B851cc", "#FFDA01cc", "#F80A0Acc", "#009EE1cc", "#f1f1f1"]
        }],
        hoverOffset: 4
    },
    options: {
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 12,
                        family: "Arial",
                    }
                }
            }
        }
    }
})

const pieCanvasSem2 = document.getElementById("pieCanvasSem2");
const pieChart2 = new Chart(pieCanvasSem2, {
    type: "doughnut",
    data: {
        labels: [
            "Vert plus",
            "Vert clair",
            "Jaune",
            "Rouge",
            "Absent",
            "Non evalue"
        ],
        datasets: [{
            data: [110, 35, 5, 0, 5, 0],
            backgroundColor: ["#008000cc", "#45B851cc", "#FFDA01cc", "#F80A0Acc", "#009EE1cc", "#f1f1f1"]
        }],
        hoverOffset: 4
    },
    options: {
        elements: {
            arc: {
                borderWidth: 0
            }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 12,
                        family: "Arial",
                    }
                }
            }
        }
    }
})