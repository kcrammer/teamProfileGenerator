function card(response){
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${response.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
      <p class="card-text">
          ID: ${response.id}
          <br>
          Email: ${response.email}
          <br>
          School: ${response.school}
      </p>
    </div>
  </div>
    `
}

module.exports = card;