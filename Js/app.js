const loadHub = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  displayHubs(data.data.tools);
};

const displayHubs = (hubs) => {
  const hubsContainer = document.getElementById("hubs-container");
  hubs.forEach((hub) => {
    const hubDiv = document.createElement("div");
    hubDiv.classList.add("col");
    hubDiv.innerHTML = `
      <div class="card p-4">
        <img src="${hub.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
                <p class="card-text">
                    <ol>
                        <li>${hub.features[0]}</li>
                        <li>${hub.features[1]}</li>
                        <li>${hub.features[2]}</li>
                    </ol>
                </p>
                <hr>                
                <div class="d-flex justify-content-between">
                 <div>
                  <h5>${hub.name}</h5>                  
                  <p>${hub.published_in}<p>
                 </div>
                 <div>
                 <button type="button" class="btn btn-outline-info fst-italic fw-bolder text-secondary">Details</button>
                 </div>
                </div>
                
            </div>
      </div>
      `;
    hubsContainer.appendChild(hubDiv);
  });
};

loadHub();
