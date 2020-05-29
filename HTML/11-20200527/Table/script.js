var dienthoai = {
    iPhone: {
        gia: 200
    },
    Samsung: {
        gia: 150
    },
    Nokia: {
        gia: 50
    },
    // add: function(){
    //     document.getElementById('qq').innerHTML= Nokia.gia;
    // }
};
var keys = Object.keys(dienthoai);
var keysi = Object.keys(dienthoai.iPhone);
var keyss = Object.keys(dienthoai.Samsung);

function add() {
    document.getElementById('td-11').innerHTML = keys[0];
    document.getElementById('td-12').innerHTML = keysi[0];
    document.getElementById('td-21').innerHTML = keys[1];
    document.getElementById('td-22').innerHTML = keyss[0];
}

