var settingsMenu =  document.querySelector(".setting_menu");
var darkBtn =  document.getElementById("dark_btn");

function settingsMenuToggle(){
    settingsMenu.classList.toggle("setting_menu_height");
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark_btn_on");
}
function passvalue() {
        var message =   document.getElementById("")
}

let btnGet = document.querySelector('#button_value');
let inputGet = document.querySelector('#input_vlaue');
let post = document.querySelector('#post');

btnGet.addEventListener('click',() =>{
    post.innerText = inputGet.value;
});

// Function to toggle settings menu
function settingsMenuToggle() {
    var settingMenu = document.querySelector('.setting_menu');
    settingMenu.classList.toggle('active');
}

// Function to handle post button click
document.getElementById('button_value').addEventListener('click', function() {
    var inputValue = document.getElementById('input_vlaue').value;
    var postContainer = document.createElement('div');
    postContainer.classList.add('post_container');

    var userProfile = document.createElement('div');
    userProfile.classList.add('user_profile');
    userProfile.innerHTML = `
        <img src="images/profile-pic.png" alt="Pro We Are Pro You Now">
        <div>
            <p>Kashan Adnan</p>
            <span>Sep 9 2022 , 12:50 Am</span>
        </div>
    `;
    postContainer.appendChild(userProfile);

    var postText = document.createElement('p');
    postText.classList.add('post_text');
    postText.textContent = inputValue;
    postContainer.appendChild(postText);

    var postRow = document.createElement('div');
    postRow.classList.add('post_row');
    postRow.innerHTML = `
        <div class="activity_icon">
            <div><img src="images/like-blue.png" alt="Like Kardo">0</div>
            <div><img src="images/comments.png" alt="Like Kardo">0</div>
            <div><img src="images/share.png" alt="Like Kardo">0</div>
        </div>
        <div class="post_profile_icon">
            <img src="images/profile-pic.png" alt="Profile Pic"> <i class="fa fa-caret-down"></i>
        </div>
    `;
    postContainer.appendChild(postRow);

    document.getElementById('post').appendChild(postContainer);
});
