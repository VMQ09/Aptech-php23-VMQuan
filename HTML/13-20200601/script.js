$(document).ready(function () {
    $('#btnAdd').click(function () {
        $.get('https://namcoi.com/du-an/aptech-php-laravel-crud-user/public//api/users', function (data, status) {
            var text,i,j;
            text = "<tr>";
            for (i = 0; i < data.users.length; i++) {
                for (j = 0; j < Object.keys(data.users[0]).length; j++) {
                    // console.log(Object.keys(data.users[0]).length);
                    text += "<td>" + Object.values(data.users[i])[j] + "</td>";
                }
                text += "</tr>";
            }
            // console.log(data.name);
            $('#demo').html(text);
        });
    });
});