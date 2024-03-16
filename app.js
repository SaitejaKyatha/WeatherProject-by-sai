
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
    seconds = (seconds < 10 ? '0' : '') + seconds;
    let timeString = hours + ':' + minutes;
    document.getElementById("day-time").textContent = `${todayDay} ${timeString}`
}
updateTime()
setInterval(updateTime, 1000);

function weatherReport() {
    var city = document.getElementById("input-feild").value
    fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`)
        .then((response) => {
            return response.json()
        }).then((jsonData) => {
            console.log(jsonData);
            let data = jsonData.days[0]
            document.getElementById("temperature").textContent = `${data.temp}°C`
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
            backgrouundImage(data.icon)
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
            sideIcon(data.icon)

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
