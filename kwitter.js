function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name )
    window.location = "kwitter_room.html"

}

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");