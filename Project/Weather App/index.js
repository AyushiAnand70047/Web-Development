console.log("Hello Jee");

const API_KEY = "b3109a80a26a89cbaeb6c991bb5f1d5a";

function renderWeatherInfo(data) {
    let newPara = document.createElement("p");
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    document.body.appendChild(newPara);
}

async function fetchWeatherDetails() {
  try {
    let lat = 15.3333;
    let lon = 15.083;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();

    console.log("Weather data-> ", data);

    renderWeatherInfo(data);

  } catch (err) {}
}

async function getCustomWeatherDetails(){
    try{
        let lat = 15.6333;
        let lon = 18.3333;
    
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        let data = await result.json();
    
        console.log(data);
    }
    catch(err){
        console.log("Error Found"+ err);
    }
}

function switchTab(clickedTab){
    if(clickedTab != currentTab){
      currentTab.classList.remove("current-tab");
      currentTab = clickedTab;
      currentTab.classList.add("current-tab");
  
      if(!searchForm.classList.contains("active")){
          weatherInfoContainer.classList.remove("active");
          grantAccessContainer.classList.remove("active");
          searchForm.classList.add("active");
      }
      else{
          searchForm.classList.remove("active");
          weatherInfoContainer.classList.remove("active");
        //   getfromSessionStorage();
      }
    }
  }
