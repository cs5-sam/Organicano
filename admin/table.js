// FIREBASE
var firebaseConfig = {
    apiKey: "AIzaSyBr8B7f3YkMZM8t1PBLfT5aj_6k_oS4zlU",
    authDomain: "organicano.firebaseapp.com",
    databaseURL: "https://organicano.firebaseio.com",
    projectId: "organicano",
    storageBucket: "organicano.appspot.com",
    messagingSenderId: "805352444698",
    appId: "1:805352444698:web:fc83d3f1316ff67f1852a3",
    measurementId: "G-XSK4G7Y6DF"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function renderTable(){
    var order=firebase.database().ref("order/");
    order.on("child_added",function(data){
        var orderValue = data.val();
        document.getElementById("table").innerHTML+=`
            <tr>
                <td>${orderValue.id}</td>
                <td>${orderValue.order}</td>
                <td>${orderValue.total}</td>
            </tr>
        `;
    });
};