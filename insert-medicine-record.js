var p1 = {
    patient_image: "http://theawesomedaily.com/wp-content/uploads/2016/06/hipster-pensioner-fashion-model-philippe-dumas-25-5759892f85c52-png__700.jpg",
    name: "Tony, Tiger",
    gender: "Male",
    address: "12345 Hippie Lane New Village, CA 90909",
    phone_number: "8182324554",
    pharmacy: "Walgreens Drug Store 07912",
    doctor: "Caforio",
    insurance: "MED01",
    dob: "7-18-57",
    medication_name: ["LOSARTAN POTASSIUM", "ASPIRIN EC", "DOXAZOSIN MESYLATE", "METAPROLOL TARTRATE", "LANTUS SOLOSTAR", "ELIQUIS", "PRAVASTATIN SODIUM", "CYCLOBENZAPRINE", "AMOXCILLIN", "AUGMENTIN", "NAPROSYN", "KEFLEX"],
    number_size: ["1", "1", "1", "1", "Inject", "1", "1", "1", "1", "1", "1", "1"],
    type: ["Tablet", "Tablet", "Tablet", "Tablet", "Solution", "Tablet", "Tablet", "Capsule", "Suspension", "Tablet", "Tablet", "Capsule"],
    route: ["oral", "oral", "oral", "oral", "intravenous", "oral", "oral", "oral", "oral", "oral", "oral", "oral"],
    dose: ["50MG", "81MG", "2MG", "25MG", "100 Unit/ML", "5MG", "40MG", "1MG", "400MG/5ML", "500-125MG", "500MG", "250MG"],
    date_prescribed: ["3/31/2017", "10/18/2016", "3/20/2017", "2/18/2017", "2/10/2017", "8/25/2016", "10/18/2016", "1/25/2017", "10/3/2017", "10/3/2017", "10/1/2017", "10/6/2017"],
    frequency: ["BID", "PRN", "QD", "BID", "bed time", "daily", "QD", "daily", "7 days", "every 12 hours", "BID", "every 6 hours for 7 days"],
    refills: ["3", "3", "2", "0", "0", "3", "1", "0", "0", "0", "1", "0"],
    dispense_amt: ["90", "30", "90", "60", "15", "30", "30", "30", "70ML", "20", "60", "28"],
    indication: ["Hypertension", "Coronary Artery Disease", "Hypertension", "Myocardial Infarction", "Diabetes", "Pulmonary Vascular Disease", "Myocardial Infarction", "Pain", "Bronchitis", "Sinusitis", "Rheumatoid Arthritis", "Cellulitis"]
};
// Find a <table> element with id="myTable":
document.getElementById("patient_image").src = p1.patient_image;
document.getElementById("name").innerHTML = p1.name;
document.getElementById("gender").innerHTML = p1.gender;
document.getElementById("address").innerHTML = p1.address;
document.getElementById("phone_number").innerHTML = p1.phone_number;
document.getElementById("pharmacy").innerHTML = p1.pharmacy;
document.getElementById("doctor").innerHTML = p1.doctor;
document.getElementById("insurance").innerHTML = p1.insurance;
document.getElementById("dob").innerHTML = p1.dob;
var table = document.getElementById("p_med_record");

// Create an empty <tr> element and add it to the 1st position of the table:
function insert_medication() {
    var row;
    var cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9, cell10;
    var len = p1.dose.length;
    var i = 0;
    while (i < len) {
        row = table.insertRow(1);
        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        cell4 = row.insertCell(3);
        cell5 = row.insertCell(4);
        cell6 = row.insertCell(5);
        cell7 = row.insertCell(6);
        cell8 = row.insertCell(7);
        cell9 = row.insertCell(8);
        cell10 = row.insertCell(9);
        // Add some text to the new cells:
        cell1.innerHTML = p1.medication_name[i];
        cell2.innerHTML = p1.number_size[i];
        cell3.innerHTML = p1.type[i];
        cell4.innerHTML = p1.route[i];
        cell5.innerHTML = p1.dose[i];
        cell6.innerHTML = p1.date_prescribed[i];
        cell7.innerHTML = p1.refills[i];
        cell8.innerHTML = p1.dispense_amt[i];
        cell9.innerHTML = p1.frequency[i];
        cell10.innerHTML = p1.indication[i];

        cell1.className = "cell";
        cell2.className = "cell";
        cell3.className = "cell";
        cell4.className = "cell";
        cell5.className = "cell";
        cell6.className = "cell";
        cell7.className = "cell";
        cell8.className = "cell";
        cell9.className = "cell";
        cell10.className = "cell";
        i++;
    }

}
insert_medication();