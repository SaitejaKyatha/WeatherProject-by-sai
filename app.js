// Function for Get Time & Day Name
function updateTime() {
    let today = new Date();
    let dayOfWeek = today.getDay();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let todayDay = days[dayOfWeek];
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    hours = (hours < 10 ? '0' : '') + hours;
    minutes = (minutes < 10 ? '0' : '') + minutes;
    let timeString = hours + ':' + minutes;
    document.getElementById("day-time").textContent = `${todayDay} ${timeString}`
}
updateTime()
setInterval(updateTime, 1000);
// Function to get weather Data depending on place name
function weatherReport() {
    var city = document.getElementById("input-feild").value
    fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=MBJMH7SM82F25Q47FFLZN5MHU&contentType=json`)
        .then((response) => {
            return response.json()
        }).then((jsonData) => {
            console.log(jsonData);
            let data = jsonData.days[0]
            document.getElementById("location").textContent = `${jsonData.resolvedAddress}`
            document.getElementById("cloud").textContent = `${data.conditions}`
            document.getElementById("precp").textContent = `Perc - ${jsonData.days[0].precip}%`
            document.getElementById("uvindex").textContent = `${data.uvindex}`
            toCheckUvindex(data.uvindex)
            document.getElementById("windstatus").textContent = `${data.windspeed}`
            document.getElementById("sunrise").textContent = `${data.sunrise} Am`
            document.getElementById("sunset").textContent = `${data.sunset} Pm`
            document.getElementById("humidity").textContent = `${data.humidity}%`
            toChangehumidty(data.humidity)
            document.getElementById("visibility").textContent = `${data.visibility}`
            visibilityCheck(data.visibility)
            document.getElementById("airquality").textContent = `${data.severerisk}`
            airqualityCheck(data.severerisk)
            backgrouundImage(jsonData.currentConditions.icon)
            sideIcon(jsonData.currentConditions.icon)
            document.getElementById("temperature").textContent = `${jsonData.currentConditions.temp}°C`
            document.getElementById("zero").textContent = `${data.hours[0].temp}°C`
            document.getElementById("one").textContent = `${data.hours[1].temp}°C`
            document.getElementById("two").textContent = `${data.hours[2].temp}°C`
            document.getElementById("three").textContent = `${data.hours[3].temp}°C`
            document.getElementById("four").textContent = `${data.hours[4].temp}°C`
            document.getElementById("five").textContent = `${data.hours[5].temp}°C`
            document.getElementById("six").textContent = `${data.hours[6].temp}°C`
            document.getElementById("seven").textContent = `${data.hours[7].temp}°C`
            document.getElementById("eight").textContent = `${data.hours[8].temp}°C`
            document.getElementById("nine").textContent = `${data.hours[9].temp}°C`
            document.getElementById("ten").textContent = `${data.hours[10].temp}°C`
            document.getElementById("elevan").textContent = `${data.hours[11].temp}°C`
            document.getElementById("twelve").textContent = `${data.hours[12].temp}°C`
            document.getElementById("thirteen").textContent = `${data.hours[13].temp}°C`
            document.getElementById("fourteen").textContent = `${data.hours[14].temp}°C`
            document.getElementById("fifteen").textContent = `${data.hours[15].temp}°C`
            document.getElementById("sixteen").textContent = `${data.hours[16].temp}°C`
            document.getElementById("seventeen").textContent = `${data.hours[17].temp}°C`
            document.getElementById("eighteen").textContent = `${data.hours[18].temp}°C`
            document.getElementById("ninteen").textContent = `${data.hours[19].temp}°C`
            document.getElementById("twenty").textContent = `${data.hours[20].temp}°C`
            document.getElementById("twentyone").textContent = `${data.hours[21].temp}°C`
            document.getElementById("twentytwo").textContent = `${data.hours[22].temp}°C`
            document.getElementById("twentythree").textContent = `${data.hours[23].temp}°C`

//  Function for celsius temperature
            function toCelsius(data) {
                document.getElementById("temperature").textContent = `${jsonData.currentConditions.temp}°C`
                document.getElementById("zero").textContent = `${data.hours[0].temp}°C`
                document.getElementById("one").textContent = `${data.hours[1].temp}°C`
                document.getElementById("two").textContent = `${data.hours[2].temp}°C`
                document.getElementById("three").textContent = `${data.hours[3].temp}°C`
                document.getElementById("four").textContent = `${data.hours[4].temp}°C`
                document.getElementById("five").textContent = `${data.hours[5].temp}°C`
                document.getElementById("six").textContent = `${data.hours[6].temp}°C`
                document.getElementById("seven").textContent = `${data.hours[7].temp}°C`
                document.getElementById("eight").textContent = `${data.hours[8].temp}°C`
                document.getElementById("nine").textContent = `${data.hours[9].temp}°C`
                document.getElementById("ten").textContent = `${data.hours[10].temp}°C`
                document.getElementById("elevan").textContent = `${data.hours[11].temp}°C`
                document.getElementById("twelve").textContent = `${data.hours[12].temp}°C`
                document.getElementById("thirteen").textContent = `${data.hours[13].temp}°C`
                document.getElementById("fourteen").textContent = `${data.hours[14].temp}°C`
                document.getElementById("fifteen").textContent = `${data.hours[15].temp}°C`
                document.getElementById("sixteen").textContent = `${data.hours[16].temp}°C`
                document.getElementById("seventeen").textContent = `${data.hours[17].temp}°C`
                document.getElementById("eighteen").textContent = `${data.hours[18].temp}°C`
                document.getElementById("ninteen").textContent = `${data.hours[19].temp}°C`
                document.getElementById("twenty").textContent = `${data.hours[20].temp}°C`
                document.getElementById("twentyone").textContent = `${data.hours[21].temp}°C`
                document.getElementById("twentytwo").textContent = `${data.hours[22].temp}°C`
                document.getElementById("twentythree").textContent = `${data.hours[23].temp}°C`
            }
// function  for farenheat temperature
            function toFarnheat(data) {
                document.getElementById("temperature").textContent = `${((jsonData.currentConditions.temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("zero").textContent = `${((data.hours[0].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("one").textContent = `${((data.hours[1].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("two").textContent = `${((data.hours[2].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("three").textContent = `${((data.hours[3].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("four").textContent = `${((data.hours[4].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("five").textContent = `${((data.hours[5].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("six").textContent = `${((data.hours[6].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("seven").textContent = `${((data.hours[7].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("eight").textContent = `${((data.hours[8].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("nine").textContent = `${((data.hours[9].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("ten").textContent = `${((data.hours[10].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("elevan").textContent = `${((data.hours[11].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("twelve").textContent = `${((data.hours[12].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("thirteen").textContent = `${((data.hours[13].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("fourteen").textContent = `${((data.hours[14].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("fifteen").textContent = `${((data.hours[15].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("sixteen").textContent = `${((data.hours[16].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("seventeen").textContent = `${((data.hours[17].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("eighteen").textContent = `${((data.hours[18].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("ninteen").textContent = `${((data.hours[19].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("twenty").textContent = `${((data.hours[20].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("twentyone").textContent = `${((data.hours[21].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("twentytwo").textContent = `${((data.hours[22].temp * (9 / 5)) + 30).toFixed(1)}°F`
                document.getElementById("twentythree").textContent = `${((data.hours[23].temp * (9 / 5)) + 30).toFixed(1)}°F`
            }
 // To change F.heat to Celsius
            document.getElementById("celsius").addEventListener("click", function () {
                toCelsius(data);
                this.classList.toggle('active');
                document.getElementById("farenheat").classList.remove('active')
            })
// To change Celsius to F.heat 
            document.getElementById("farenheat").addEventListener("click", function () {
                toFarnheat(data);
                this.classList.toggle('active')
                document.getElementById("celsius").classList.remove('active')
            })
// To get today related information
            document.getElementById("todaydata").addEventListener("click", function () {
                this.classList.toggle('activetw')
                document.getElementById("weekdata").classList.remove('activetw')
                document.getElementById("weekforecast").style.display = "none"
                document.getElementById("todayforecast").style.display =""
            })
// To get week related information
            document.getElementById("weekdata").addEventListener("click", function () {
                this.classList.toggle('activetw');
                document.getElementById("todaydata").classList.remove('activetw')
                console.log("weekhello");
            })
// To get week data & DayName
            let today = new Date()
            let daynames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            let getdaynames = []
            for(let i = 0; i < 7; i++){
                let day = new Date(today.getTime() + i * 24 * 60 * 60 * 1000);
                let weekname = daynames[day.getDay()]
                getdaynames.push(weekname)
            }
// Dynamically created week data
            document.getElementById("weekdata").addEventListener("click", function () {
                document.getElementById("todayforecast").style.display = "none"
                document.getElementById("weekforecast").style.display = ""
                document.getElementById("weekforecast").innerHTML =
                    `
                    <section>
                    <h6>${getdaynames[0]}</h6>
                    <img src="" alt="img" id="oneimage">
                    <p class = "onedata">${jsonData.days[0].temp}°C</p>
                    </section>
        
                    <section>
                    <h6>${getdaynames[1]}</h6>
                    <img src=".." alt="img" id="twoimage">
                    <p class = "twodata">${jsonData.days[1].temp}°C</p>
                    </section>
        
                    <section>
                    <h6>${getdaynames[2]}</h6>
                    <img src="" alt="img" id="threeimage">
                    <p class = "threedata">${jsonData.days[2].temp}°C</p>
                    </section>
        
                    <section>
                    <h6>${getdaynames[3]}</h6>
                    <img src="" alt="img" id="fourimage">
                    <p class = "fourdata">${jsonData.days[3].temp}°C</p>
                    </section>
        
                    <section>
                    <h6>${getdaynames[4]}</h6>
                    <img src="" alt="img" id="fiveimage">
                    <p class = "fivedata">${jsonData.days[4].temp}°C</p>
                    </section>
        
                    <section>
                    <h6>${getdaynames[5]}</h6>
                    <img src="" alt="img" id="siximage">
                    <p class = "sixdata">${jsonData.days[5].temp}°C</p>
                    </section>
        
                    <section>
                    <h6>${getdaynames[6]}</h6>
                    <img src="" alt="img" id="sevenimage">
                    <p class = "sevendata">${jsonData.days[6].temp}°C</p>
                    </section>
                    `
// changing Celisus to f.Heat in week Data
                document.getElementById("farenheat").addEventListener("click", function () {
                    this.classList.toggle('active')
                    document.getElementById("celsius").classList.remove('active')
                    document.querySelector(".onedata").textContent = `${((jsonData.days[0].temp * (9 / 5)) + 30).toFixed(1)}°F`
                    document.querySelector(".twodata").textContent = `${((jsonData.days[1].temp * (9 / 5)) + 30).toFixed(1)}°F`
                    document.querySelector(".threedata").textContent = `${((jsonData.days[2].temp * (9 / 5)) + 30).toFixed(1)}°F`
                    document.querySelector(".fourdata").textContent = `${((jsonData.days[3].temp * (9 / 5)) + 30).toFixed(1)}°F`
                    document.querySelector(".fivedata").textContent = `${((jsonData.days[4].temp * (9 / 5)) + 30).toFixed(1)}°F`
                    document.querySelector(".sixdata").textContent = `${((jsonData.days[5].temp * (9 / 5)) + 30).toFixed(1)}°F`
                    document.querySelector(".sevendata").textContent = `${((jsonData.days[6].temp * (9 / 5)) + 30).toFixed(1)}°F`
                })
// changing F.heat to celsius in week Data
                document.getElementById("celsius").addEventListener("click", function () {
                    this.classList.toggle('active');
                    document.getElementById("farenheat").classList.remove('active')
                    document.querySelector(".onedata").textContent = `${jsonData.days[0].temp}°C`
                    document.querySelector(".twodata").textContent = `${jsonData.days[1].temp}°C`
                    document.querySelector(".threedata").textContent = `${jsonData.days[2].temp}°C`
                    document.querySelector(".fourdata").textContent = `${jsonData.days[3].temp}°C`
                    document.querySelector(".fivedata").textContent = `${jsonData.days[4].temp}°C`
                    document.querySelector(".sixdata").textContent = `${jsonData.days[5].temp}°C`
                    document.querySelector(".sevendata").textContent = `${jsonData.days[6].temp}°C`

                })
// Changing image icons accring to day in Week data  
                let weeksrc = ["https://i.ibb.co/PZQXH8V/27.png", "https://i.ibb.co/kBd2NTS/39.png", "https://i.ibb.co/rb4rrJL/26.png", "https://i.ibb.co/1nxNGHL/10.png", "https://i.ibb.co/Kzkk59k/15.png"]

                if (jsonData.days[0].icon === "partly-cloudy-day") {
                    document.getElementById("oneimage").src = weeksrc[0]
                } else if (jsonData.days[0].icon === "rain") {
                    document.getElementById("oneimage").src = weeksrc[1]
                } else if (jsonData.days[0].icon === "clear-day") {
                    document.getElementById("oneimage").src = weeksrc[2]
                } else if (jsonData.days[0].icon === "clear-night") {
                    document.getElementById("oneimage").src = weeksrc[3]
                } else if (jsonData.days[0].icon === "partly-cloudy-night") {
                    document.getElementById("oneimage").src = weeksrc[4]
                }

                if (jsonData.days[1].icon === "partly-cloudy-day") {
                    document.getElementById("twoimage").src = weeksrc[0]
                } else if (jsonData.days[1].icon === "rain") {
                    document.getElementById("twoimage").src = weeksrc[1]
                } else if (jsonData.days[1].icon === "clear-day") {
                    document.getElementById("twoimage").src = weeksrc[2]
                } else if (jsonData.days[1].icon === "clear-night") {
                    document.getElementById("twoimage").src = weeksrc[3]
                } else if (jsonData.days[1].icon === "partly-cloudy-night") {
                    document.getElementById("twoimage").src = weeksrc[4]
                }

                if (jsonData.days[2].icon === "partly-cloudy-day") {
                    document.getElementById("threeimage").src = weeksrc[0]
                } else if (jsonData.days[2].icon === "rain") {
                    document.getElementById("threeimage").src = weeksrc[1]
                } else if (jsonData.days[2].icon === "clear-day") {
                    document.getElementById("threeimage").src = weeksrc[2]
                } else if (jsonData.days[2].icon === "clear-night") {
                    document.getElementById("threeimage").src = weeksrc[3]
                } else if (jsonData.days[2].icon === "partly-cloudy-night") {
                    document.getElementById("threeimage").src = weeksrc[4]
                }

                if (jsonData.days[3].icon === "partly-cloudy-day") {
                    document.getElementById("fourimage").src = weeksrc[0]
                } else if (jsonData.days[3].icon === "rain") {
                    document.getElementById("fourimage").src = weeksrc[1]
                } else if (jsonData.days[3].icon === "clear-day") {
                    document.getElementById("fourimage").src = weeksrc[2]
                } else if (jsonData.days[3].icon === "clear-night") {
                    document.getElementById("fourimage").src = weeksrc[3]
                } else if (jsonData.days[3].icon === "partly-cloudy-night") {
                    document.getElementById("fourimage").src = weeksrc[4]
                }

                if (jsonData.days[4].icon === "partly-cloudy-day") {
                    document.getElementById("fiveimage").src = weeksrc[0]
                } else if (jsonData.days[4].icon === "rain") {
                    document.getElementById("fiveimage").src = weeksrc[1]
                } else if (jsonData.days[4].icon === "clear-day") {
                    document.getElementById("fiveimage").src = weeksrc[2]
                } else if (jsonData.days[4].icon === "clear-night") {
                    document.getElementById("fiveimage").src = weeksrc[3]
                } else if (jsonData.days[4].icon === "partly-cloudy-night") {
                    document.getElementById("fiveimage").src = weeksrc[4]
                }

                if (jsonData.days[5].icon === "partly-cloudy-day") {
                    document.getElementById("siximage").src = weeksrc[0]
                } else if (jsonData.days[5].icon === "rain") {
                    document.getElementById("siximage").src = weeksrc[1]
                } else if (jsonData.days[5].icon === "clear-day") {
                    document.getElementById("siximage").src = weeksrc[2]
                } else if (jsonData.days[5].icon === "clear-night") {
                    document.getElementById("siximage").src = weeksrc[3]
                } else if (jsonData.days[5].icon === "partly-cloudy-night") {
                    document.getElementById("siximage").src = weeksrc[4]
                }

                if (jsonData.days[6].icon === "partly-cloudy-day") {
                    document.getElementById("sevenimage").src = weeksrc[0]
                } else if (jsonData.days[6].icon === "rain") {
                    document.getElementById("sevenimage").src = weeksrc[1]
                } else if (jsonData.days[6].icon === "clear-day") {
                    document.getElementById("sevenimage").src = weeksrc[2]
                } else if (jsonData.days[6].icon === "clear-night") {
                    document.getElementById("sevenimage").src = weeksrc[3]
                } else if (jsonData.days[6].icon === "partly-cloudy-night") {
                    document.getElementById("sevenimage").src = weeksrc[4]
                }
            })
// Conditions for Changing hour Icons in today data
            function toChangeHourIcons(){
            let imagesrc = ["https://i.ibb.co/PZQXH8V/27.png", "https://i.ibb.co/kBd2NTS/39.png", "https://i.ibb.co/rb4rrJL/26.png", "https://i.ibb.co/1nxNGHL/10.png", "https://i.ibb.co/Kzkk59k/15.png"]

            if (jsonData.days[0].hours[0].icon === "partly-cloudy-day") {
                document.getElementById("zeroImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[0].icon === "rain") {
                document.getElementById("zeroImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[0].icon === "clear-day") {
                document.getElementById("zeroImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[0].icon === "clear-night") {
                document.getElementById("zeroImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[0].icon === "partly-cloudy-night") {
                document.getElementById("zeroImage").src = imagesrc[4]
            }

            if (jsonData.days[0].hours[1].icon === "partly-cloudy-day") {
                document.getElementById("oneImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[1].icon === "rain") {
                document.getElementById("oneImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[1].icon === "clear-day") {
                document.getElementById("oneImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[1].icon === "clear-night") {
                document.getElementById("oneImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[1].icon === "partly-cloudy-night") {
                document.getElementById("oneImage").src = imagesrc[4]
            }

            if (jsonData.days[0].hours[2].icon === "partly-cloudy-day") {
                document.getElementById("twoImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[2].icon === "rain") {
                document.getElementById("twoImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[2].icon === "clear-day") {
                document.getElementById("twoImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[2].icon === "clear-night") {
                document.getElementById("twoImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[2].icon === "partly-cloudy-night") {
                document.getElementById("twoImage").src = imagesrc[4]
            }

            if (jsonData.days[0].hours[3].icon === "partly-cloudy-day") {
                document.getElementById("threeImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[3].icon === "rain") {
                document.getElementById("threeImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[3].icon === "clear-day") {
                document.getElementById("threeImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[3].icon === "clear-night") {
                document.getElementById("threeImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[3].icon === "partly-cloudy-night") {
                document.getElementById("threeImage").src = imagesrc[4]
            }

            if (jsonData.days[0].hours[4].icon === "partly-cloudy-day") {
                document.getElementById("fourImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[4].icon === "rain") {
                document.getElementById("fourImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[4].icon === "clear-day") {
                document.getElementById("fourImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[4].icon === "clear-night") {
                document.getElementById("fourImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[4].icon === "partly-cloudy-night") {
                document.getElementById("fourImage").src = imagesrc[4]
            }

            if (jsonData.days[0].hours[5].icon === "partly-cloudy-day") {
                document.getElementById("fiveImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[5].icon === "rain") {
                document.getElementById("fiveImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[5].icon === "clear-day") {
                document.getElementById("fiveImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[5].icon === "clear-night") {
                document.getElementById("fiveImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[5].icon === "partly-cloudy-night") {
                document.getElementById("fiveImage").src = imagesrc[4]
            }

            if (jsonData.days[0].hours[6].icon === "partly-cloudy-day") {
                document.getElementById("sixImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[6].icon === "rain") {
                document.getElementById("sixImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[6].icon === "clear-day") {
                document.getElementById("sixImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[6].icon === "clear-night") {
                document.getElementById("sixImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[6].icon === "partly-cloudy-night") {
                document.getElementById("sixImage").src = imagesrc[4]
            }

            if (jsonData.days[0].hours[7].icon === "partly-cloudy-day") {
                document.getElementById("sevenImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[7].icon === "rain") {
                document.getElementById("sevenImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[7].icon === "clear-day") {
                document.getElementById("sevenImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[7].icon === "clear-night") {
                document.getElementById("sevenImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[7].icon === "partly-cloudy-night") {
                document.getElementById("sevenImage").src = imagesrc[4]
            }

            if (jsonData.days[0].hours[8].icon === "partly-cloudy-day") {
                document.getElementById("eightImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[8].icon === "rain") {
                document.getElementById("eightImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[8].icon === "clear-day") {
                document.getElementById("eightImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[8].icon === "clear-night") {
                document.getElementById("eightImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[8].icon === "partly-cloudy-night") {
                document.getElementById("eightImage").src = imagesrc[4]
            }

            if (jsonData.days[0].hours[9].icon === "partly-cloudy-day") {
                document.getElementById("nineImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[9].icon === "rain") {
                document.getElementById("nineImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[9].icon === "clear-day") {
                document.getElementById("nineImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[9].icon === "clear-night") {
                document.getElementById("nineImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[9].icon === "partly-cloudy-night") {
                document.getElementById("nineImage").src = imagesrc[4]
            }

            if (jsonData.days[0].hours[10].icon === "partly-cloudy-day") {
                document.getElementById("tenImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[10].icon === "rain") {
                document.getElementById("tenImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[10].icon === "clear-day") {
                document.getElementById("tenImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[10].icon === "clear-night") {
                document.getElementById("tenImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[10].icon === "partly-cloudy-night") {
                document.getElementById("tenImage").src = imagesrc[4]
            }

            if (jsonData.days[0].hours[11].icon === "partly-cloudy-day") {
                document.getElementById("elevanImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[11].icon === "rain") {
                document.getElementById("elevanImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[11].icon === "clear-day") {
                document.getElementById("elevanImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[11].icon === "clear-night") {
                document.getElementById("elevanImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[11].icon === "partly-cloudy-night") {
                document.getElementById("elevanImage").src = imagesrc[4]
            }

            if (jsonData.days[0].hours[12].icon === "partly-cloudy-day") {
                document.getElementById("twelveImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[12].icon === "rain") {
                document.getElementById("twelveImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[12].icon === "clear-day") {
                document.getElementById("twelveImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[12].icon === "clear-night") {
                document.getElementById("twelveImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[12].icon === "partly-cloudy-night") {
                document.getElementById("twelveImage").src = imagesrc[4]
            }

            if (jsonData.days[0].hours[13].icon === "partly-cloudy-day") {
                document.getElementById("thirteenImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[13].icon === "rain") {
                document.getElementById("thirteenImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[13].icon === "clear-day") {
                document.getElementById("thirteenImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[13].icon === "clear-night") {
                document.getElementById("thirteenImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[13].icon === "partly-cloudy-night") {
                document.getElementById("thirteenImage").src = imagesrc[4]
            }


            if (jsonData.days[0].hours[14].icon === "partly-cloudy-day") {
                document.getElementById("fourteenImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[14].icon === "rain") {
                document.getElementById("fourteenImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[14].icon === "clear-day") {
                document.getElementById("fourteenImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[14].icon === "clear-night") {
                document.getElementById("fourteenImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[14].icon === "partly-cloudy-night") {
                document.getElementById("fourteenImage").src = imagesrc[4]
            }

            if (jsonData.days[0].hours[15].icon === "partly-cloudy-day") {
                document.getElementById("fifteenImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[15].icon === "rain") {
                document.getElementById("fifteenImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[15].icon === "clear-day") {
                document.getElementById("fifteenImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[15].icon === "clear-night") {
                document.getElementById("fifteenImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[15].icon === "partly-cloudy-night") {
                document.getElementById("fifteenImage").src = imagesrc[4]
            }

            if (jsonData.days[0].hours[16].icon === "partly-cloudy-day") {
                document.getElementById("sixteenImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[16].icon === "rain") {
                document.getElementById("sixteenImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[16].icon === "clear-day") {
                document.getElementById("sixteenImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[16].icon === "clear-night") {
                document.getElementById("sixteenImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[16].icon === "partly-cloudy-night") {
                document.getElementById("sixteenImage").src = imagesrc[4]
            }
            if (jsonData.days[0].hours[17].icon === "partly-cloudy-day") {
                document.getElementById("seventeenImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[17].icon === "rain") {
                document.getElementById("seventeenImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[17].icon === "clear-day") {
                document.getElementById("seventeenImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[17].icon === "clear-night") {
                document.getElementById("seventeenImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[17].icon === "partly-cloudy-night") {
                document.getElementById("seventeenImage").src = imagesrc[4]
            }
            if (jsonData.days[0].hours[18].icon === "partly-cloudy-day") {
                document.getElementById("eighteenImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[18].icon === "rain") {
                document.getElementById("eighteenImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[18].icon === "clear-day") {
                document.getElementById("eighteenImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[18].icon === "clear-night") {
                document.getElementById("eighteenImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[18].icon === "partly-cloudy-night") {
                document.getElementById("eighteenImage").src = imagesrc[4]
            }
            if (jsonData.days[0].hours[19].icon === "partly-cloudy-day") {
                document.getElementById("ninteenImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[19].icon === "rain") {
                document.getElementById("ninteenImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[19].icon === "clear-day") {
                document.getElementById("ninteenImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[19].icon === "clear-night") {
                document.getElementById("ninteenImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[19].icon === "partly-cloudy-night") {
                document.getElementById("ninteenImage").src = imagesrc[4]
            }

            if (jsonData.days[0].hours[20].icon === "partly-cloudy-day") {
                document.getElementById("twentyImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[20].icon === "rain") {
                document.getElementById("twentyImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[20].icon === "clear-day") {
                document.getElementById("twentyImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[20].icon === "clear-night") {
                document.getElementById("twentyImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[20].icon === "partly-cloudy-night") {
                document.getElementById("twentyImage").src = imagesrc[4]
            }

            if (jsonData.days[0].hours[21].icon === "partly-cloudy-day") {
                document.getElementById("twentyoneImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[21].icon === "rain") {
                document.getElementById("twentyoneImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[21].icon === "clear-day") {
                document.getElementById("twentyoneImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[21].icon === "clear-night") {
                document.getElementById("twentyoneImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[21].icon === "partly-cloudy-night") {
                document.getElementById("twentyoneImage").src = imagesrc[4]
            }


            if (jsonData.days[0].hours[22].icon === "partly-cloudy-day") {
                document.getElementById("twentytwoImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[22].icon === "rain") {
                document.getElementById("twentytwoImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[22].icon === "clear-day") {
                document.getElementById("twentytwoImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[22].icon === "clear-night") {
                document.getElementById("twentytwoImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[22].icon === "partly-cloudy-night") {
                document.getElementById("twentytwoImage").src = imagesrc[4]
            }


            if (jsonData.days[0].hours[23].icon === "partly-cloudy-day") {
                document.getElementById("twentythreeImage").src = imagesrc[0]
            } else if (jsonData.days[0].hours[23].icon === "rain") {
                document.getElementById("twentythreeImage").src = imagesrc[1]
            } else if (jsonData.days[0].hours[23].icon === "clear-day") {
                document.getElementById("twentythreeImage").src = imagesrc[2]
            } else if (jsonData.days[0].hours[23].icon === "clear-night") {
                document.getElementById("twentythreeImage").src = imagesrc[3]
            } else if (jsonData.days[0].hours[23].icon === "partly-cloudy-night") {
                document.getElementById("twentythreeImage").src = imagesrc[4]
            }
        }
        toChangeHourIcons()
        }).catch((error) => {
            alert("Place not found in our Data base")
            city.value = ""
        })
}
// Function to check uv-index
function toCheckUvindex(uvindex) {
    if (uvindex === 1 || uvindex === 2) {
        document.getElementById("uvvalue").textContent = "Low"
    } else if (uvindex === 3 || uvindex === 4 || uvindex === 5) {
        document.getElementById("uvvalue").textContent = "Moderate"
    } else if (uvindex === 6 || uvindex === 7) {
        document.getElementById("uvvalue").textContent = "High"
    } else if (uvindex === 8 || uvindex === 11 || uvindex === 10) {
        document.getElementById("uvvalue").textContent = "Very high"
    } else {
        document.getElementById("uvvalue").textContent = "Extreme"
    }
}
// Function to check humidity
function toChangehumidty(humidity) {
    if (humidity < 30) {
        document.getElementById("humidvalue").textContent = "Low"
    } else if (humidity >= 30 && humidity < 60) {
        document.getElementById("humidvalue").textContent = "Moderate"
    } else if (humidity >= 60) {
        document.getElementById("humidvalue").textContent = "High"
    }
}
// Function to check visibility
function visibilityCheck(visibility) {
    if (visibility <= 0.03) {
        document.getElementById("visibilityvalue").textContent = "Dense Fog"
    } else if (visibility >= 0.04 && visibility <= 0.16) {
        document.getElementById("visibilityvalue").textContent = "Moderate Fog"
    } else if (visibility >= 0.17 && visibility <= 0.35) {
        document.getElementById("visibilityvalue").textContent = "light Fog"
    } else if (visibility >= 0.36 && visibility <= 1.13) {
        document.getElementById("visibilityvalue").textContent = "Very light Fog"
    } else if (visibility >= 1.14 && visibility <= 2.16) {
        document.getElementById("visibilityvalue").textContent = "light Mist"
    } else if (visibility >= 2.17 && visibility <= 5.4) {
        document.getElementById("visibilityvalue").textContent = "Very light Mist"
    } else if (visibility >= 5.41 && visibility <= 10.8) {
        document.getElementById("visibilityvalue").textContent = "Clear Air"
    } else if (visibility >= 10.81) {
        document.getElementById("visibilityvalue").textContent = "Very Clear Air"
    }
}
// Function to check airquality
function airqualityCheck(airquality) {
    if (airquality < 50) {
        document.getElementById("airvalue").textContent = `Good👌`
    } else if (airquality >= 50 || airquality < 100) {
        document.getElementById("airvalue").textContent = `Moderate😐`
    } else if (airquality >= 100 || airquality < 150) {
        document.getElementById("airvalue").textContent = `Unhealthy😷`
    } else if (airquality >= 150 || airquality < 200) {
        document.getElementById("airvalue").textContent = `Very Unhealthy😨`
    } else if (airquality >= 200) {
        document.getElementById("airvalue").textContent = `Hazardous😱`
    }
}
// Function to change background-Image
function backgrouundImage(bgImage) {
    let backimg = ["https://i.ibb.co/qNv7NxZ/pc.webp", "https://i.ibb.co/RDfPqXz/pcn.jpg", "https://i.ibb.co/h2p6Yhd/rain.webp", "https://i.ibb.co/WGry01m/cd.jpg", "https://i.ibb.co/kqtZ1Gx/cn.jpg"]
    if (bgImage === "partly-cloudy-day") {
        document.getElementById("bg-image").style.backgroundImage = `url(${backimg[0]})`
    } else if (bgImage === "partly-cloudy-night") {
        document.getElementById("bg-image").style.backgroundImage = `url(${backimg[1]})`
    } else if (bgImage === "rain") {
        document.getElementById("bg-image").style.backgroundImage = `url(${backimg[2]})`
    } else if (bgImage === "clear-day") {
        document.getElementById("bg-image").style.backgroundImage = `url(${backimg[3]})`
    } else if (bgImage === "clear-night") {
        document.getElementById("bg-image").style.backgroundImage = `url(${backimg[4]})`
    }

}
// function to change side-Icon
function sideIcon(icon) {
    let imagesrc = ["https://i.ibb.co/PZQXH8V/27.png", "https://i.ibb.co/kBd2NTS/39.png", "https://i.ibb.co/rb4rrJL/26.png", "https://i.ibb.co/1nxNGHL/10.png", "https://i.ibb.co/Kzkk59k/15.png"]
    if (icon === "partly-cloudy-day") {
        document.getElementById("weather-icon").src = imagesrc[0]
    } else if (icon === "rain") {
        document.getElementById("weather-icon").src = imagesrc[1]
    } else if (icon === "clear-day") {
        document.getElementById("weather-icon").src = imagesrc[2]
    } else if (icon === "clear-night") {
        document.getElementById("weather-icon").src = imagesrc[3]
    } else if (icon === "partly-cloudy-night") {
        document.getElementById("weather-icon").src = imagesrc[4]
    }
}
