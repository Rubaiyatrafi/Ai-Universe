const loadHub = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  displayHubs(data.data.tools);
};

const displayHubs = (hubs) => {
  const hubsContainer = document.getElementById("hubs-container");
  toggleSpinner(true);
  if (hubs.length > 6) {
    hubs = hubs.slice(0, 6);
    const seeMore = document.getElementById("see-more");
    seeMore.classList.remove("d-none");
  } else {
    seeMore.classList.add("d-none");
  }

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
                  <br>                 
                  <p  <i class="fa-solid fa-calendar-week"></i> ${hub.published_in}<p>
                 </div>
                 <div>
                 <button onclick="loadDetails('${hub.id}')" href="#" type="button" class="btn btn-outline-info border-0 rounded-circle bg-danger-subtle fw-bolder text-secondary mt-3" data-bs-toggle="modal" data-bs-target="#DetailModal"><i class="fa-solid fa-arrow-right text-danger-emphasis"></i></button>
                 </div>
                </div>
                
            </div>
      </div>
      `;
    hubsContainer.appendChild(hubDiv);
  });
  toggleSpinner(false);
};

const toggleSpinner = (isLoading) => {
  const spinnerSection = document.getElementById("spinner");
  if (isLoading) {
    spinnerSection.classList.remove("d-none");
  } else {
    spinnerSection.classList.add("d-none");
  }
};

const loadDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayDetails(data.data);
};

const displayDetails = (detail) => {
  //   console.log(detail);
  const modalTitle = document.getElementById("DetailModalLabel");
  modalTitle.innerText = detail.tool_name;
  const bodyDetail = document.getElementById("detail-body");
  bodyDetail.innerHTML = `
  <div class="row row-cols-1 row-cols-md-2 g-4">  
  <div class="col">
    <div class="card m-3 bg-danger-subtle p-3">      
      <div class="card-body">
        <h6 class="card-title">${detail.description}</h6>
        <div class="d-flex justify-content-between">
           <div class="bg-info-subtle border border-0 border-info rounded m-3 w-25 h-25">
             <p class="p-2 text-center text-success fs-6">
             ${detail.pricing[0].price}
             <br>
             ${detail.pricing[0].plan}             
             </p>             
           </div>
           <div class="bg-info-subtle border border-0 border-info rounded m-3 w-25 h-25">
             <p class="p-2 text-center text-primary fs-6">
             ${detail.pricing[1].price}
             <br>
             ${detail.pricing[1].plan}             
             </p>             
           </div>
           <div class="bg-info-subtle border border-0 border-info rounded m-3 w-25 h-25">
             <p class="p-2 text-center text-danger fs-6">
             ${detail.pricing[2].price}
             <br>
             ${detail.pricing[2].plan}             
             </p>             
           </div>
        </div>
        <div class="d-flex justify-content-around">
            <div>
                <h5 class="fw-bold text-info-emphasis">Features</h5>
                   <ul>
                     <li>${detail.features[1].feature_name}</li>
                     <li>${detail.features[2].feature_name}</li>
                     <li>${detail.features[3].feature_name}</li>
                   </ul>
            </div>
            <div>
                <h5 class="fw-bold text-info-emphasis">Integrations</h5>
                   <ul>
                       <li>${detail.integrations[0]}</li>
                       <li>${detail.integrations[1]}</li>
                       <li>${detail.integrations[2]}</li>
                  </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card m-3 p-3">
      <img src="${detail.image_link[0]}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title text-center fst-italic fw-bolder m-3">${detail.input_output_examples[0].input}</h5>
        <p class="card-text text-center">${detail.input_output_examples[0].output}.</p>
      </div>
    </div>
  </div>
</div>
  `;
};

loadHub();

document.getElementById("seeAll").addEventListener("click", function () {
  const loadHubAll = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const res = await fetch(url);
    const data = await res.json();
    displayHubs(data.data.tools);
  };

  const displayHubs = (hubs) => {
    const hubsContainer = document.getElementById("hubs-container");
    hubs = hubs.slice(6, 12);
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
                        <p  <i class="fa-solid fa-calendar-week"></i> ${hub.published_in}<p>
                 </div>
                 <div>
                 <button onclick="loadDetails('${hub.id}')" href="#" type="button" class="btn btn-outline-info border-0 rounded-circle bg-danger-subtle fw-bolder text-secondary mt-3" data-bs-toggle="modal" data-bs-target="#DetailModal"><i class="fa-solid fa-arrow-right text-danger-emphasis"></i></button>
                       </div>
                      </div>
                      
                  </div>
            </div>
            `;
      hubsContainer.appendChild(hubDiv);
    });
  };
  loadHubAll();
});
