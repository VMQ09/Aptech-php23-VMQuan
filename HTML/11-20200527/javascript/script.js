var data = {
    "users": [{
            "id": 10,
            "name": "Ethyl Medhurst",
            "email": "noah.hand@example.org",
            "password": "$2y$10$GLfHbVK./jG2WD8QQ0.ZDOqqeJe7rz.hl827sKoHOhd9LLoXfyHHG",
            "created_at": "2019-03-26 04:55:04",
            "updated_at": "2019-03-26 04:55:04"
        },
        {
            "id": 9,
            "name": "Eula Lebsack PhD",
            "email": "schroeder.sylvan@example.org",
            "password": "$2y$10$.vzCIUVX34GibJ3.ObFqYu5Bd.Ig8PqF3adoLHza78eq510mfhy9G",
            "created_at": "2019-03-26 04:55:03",
            "updated_at": "2019-03-26 04:55:03"
        },
        {
            "id": 8,
            "name": "Mrs. Kathlyn Parisian DDS",
            "email": "ggrimes@example.net",
            "password": "$2y$10$N.DpYW9Sd0c8p3rSVjO0MeZ5e7idfPeKPZyOO77m8vNSEOnMws5O2",
            "created_at": "2019-03-26 04:55:03",
            "updated_at": "2019-03-26 04:55:03"
        }
    ]
}; 
// console.log(data["users"]);
// console.log(data[Object.keys(data)]);

// console.log((data[Object.keys(data)])[0]);
// console.log((data["user"])[0]);

// console.log(Object.keys(data)); //>users
// console.log(data[Object.keys(data)]); // 3 bien cua users
// console.log((data[Object.keys(data)]).length); // =3, do dai cua mang users
// console.log((data[Object.keys(data)])[0]);
// var c = (data[Object.keys(data)])[0].length;
// console.log((data[Object.keys(data)])[1]);
// console.log((data[Object.keys(data)])[2]);

// console.log(Object.keys(tt[0])); // id,name, ...
// console.log(Object.values(tt[0]));// 10, ethyl....

// console.log(Object.values(tt[0])[0]);
// console.log(tt["id"]);
console.log(data.users[0].id);
console.log(data[Object.keys(data)]);
var tt = data[Object.keys(data)];
var dodai_users = (data[Object.keys(data)]).length;// =3, do dai cua mang users
// 
function them() {
    var text;
    text = "<tr>";
    for (var i = 0; i < data.users.length; i++) {
        for (var j = 0; j < 6; j++){
            // console.log(data.user[i].[j]);
            // text += "<td>" + Object.values(data.user[i]).[j] + "</td>";
            text += "<td>" + Object.values(tt[i])[j] + "</td>";
            // console.log(Object.values(tt[i])[j]);
        }     
        text += "</tr>";
    }
    document.getElementById('table-body').innerHTML += text;
};

// function taoElement() {
//     var tableBodyElement = document.getElementById('table-body');
    
//     for (var i = 0; i < 3; i++) {
//         var tableRow = document.createElement('tr');
//         tableBodyElement.appendChild(tableRow);

//         var tableData1 = document.createElement('td');
//         tableData1.innerHTML = i;

//         var tableData2 = document.createElement('td');
//         tableData2.innerHTML = 2;

//         var tableData3 = document.createElement('td');
//         tableData3.innerHTML = 3;

//         tableRow.appendChild(tableData1);
//         tableRow.appendChild(tableData2);
//         tableRow.appendChild(tableData3);
//     }
// };
