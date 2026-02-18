// Récupération des éléments HTML
const userList = document.getElementById("userList");
const userForm = document.getElementById("userForm");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");


// Fonction pour charger et afficher les utilisateurs
async function loadUsers() {
    const res = await fetch("/api/users");
    const users = await res.json();

    userList.innerHTML = ""; // vider la liste

    users.forEach(user => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        li.textContent = `${user.prenom} ${user.nom} ${user.email}`;

        // bouton X
        const btn = document.createElement("button");
        btn.textContent = "X";
        btn.className = "btn btn-danger btn-sm";

        btn.addEventListener("click", async () => {
            await fetch(`/api/users/${user.id}`, { method: "DELETE" });
            loadUsers(); // rafraîchir la liste
        });

        li.appendChild(btn);
        userList.appendChild(li);
    });
}

// Soumission du formulaire → POST
userForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = emailInput.value;

    // vérif email valide
    if (!/^\S+@\S+\.\S+$/.test(email)) { 
        alert("Email invalide"); return; 
    }

    const newUser = {
        prenom: firstNameInput.value,
        nom: lastNameInput.value,
        email: emailInput.value 
    }; 
        
    const res = await fetch("/api/users", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(newUser) }); 
    
    //affiche l'erreur
    if(!res.ok){
        alert(data.error);
        return;
    }

    if (res.ok) { 
        await loadUsers(); // rafraîchir la liste 
        userForm.reset(); // vider le formulaire 
        } }); 
    loadUsers(); //charge les utilisateurs au démarage