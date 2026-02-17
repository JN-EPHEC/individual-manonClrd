// Récupération des éléments HTML
const userList = document.getElementById("userList");
const userForm = document.getElementById("userForm");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");

// Fonction pour charger et afficher les utilisateurs
async function loadUsers() {
    const res = await fetch("/api/users");
    const users = await res.json();

    userList.innerHTML = ""; // vider la liste

    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.prenom} ${user.nom}`;
        userList.appendChild(li);
    });
}

// Soumission du formulaire → POST
userForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const newUser = {
        prenom: firstNameInput.value,
        nom: lastNameInput.value
    };

    const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
    });

    if (res.ok) {
        await loadUsers(); // rafraîchir la liste
        userForm.reset();  // vider le formulaire
    }
});

// Charger les utilisateurs au démarrage
loadUsers();
