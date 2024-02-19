const queryParams = new URLSearchParams(window.location.search);
const name = queryParams.get("name");
const email = queryParams.get("email");
const address = queryParams.get("address");

const profileInfo = document.getElementById("profileInfo");
profileInfo.innerHTML = `
    <div class="info">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
    </div>
            
        `;
