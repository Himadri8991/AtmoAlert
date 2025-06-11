# 🌍 AtmoAlert – Real-time Weather & Air Pollution Monitoring Web App

**AtmoAlert** is a sleek and intuitive web application that offers **real-time weather** updates and **air quality index (AQI)** tracking. Built using vanilla web technologies and powered by OpenWeatherMap APIs via RapidAPI, this app enables users to easily check environmental conditions by simply entering a **city pincode**.

---

## 🚀 Live Preview

Coming Soon – You can run locally using the steps below ⬇️

---

## 🖼️ UI Overview

Your app consists of two main sections:

### 🔹 Weather Section
Displays real-time:
- 📍 Location (Pincode / City)
- 🌡️ Temperature (°C)
- 💧 Humidity (%)
- 📈 Pressure (hPa)
- 🌤️ Weather Conditions (e.g., Clear, Clouds, Rain)

### 🔸 Pollution Section
Displays air quality information with:
- 🧪 AQI Index (1 to 5 with colored tag)
- 🏭 Gas concentrations:
  - CO (Carbon Monoxide)
  - NO₂ (Nitrogen Dioxide)
  - PM₂.₅ and PM₁₀ (Particulate Matter)
  - O₃ (Ozone)
- 📊 Health impact suggestion based on AQI level

---

## 📦 Features

✅ **Search by Pincode**  
✅ **Color-coded AQI Badge** (e.g., Green = Good, Yellow = Moderate, Red = Unhealthy)  
✅ **Data fetched using fetch() from OpenWeatherMap via RapidAPI**  
✅ **Responsive Layout** (as seen in screenshots)  
✅ **Error Handling** for invalid pincode or API issues

---

## 🛠️ Technologies Used

| Technology     | Purpose                            |
|----------------|-------------------------------------|
| HTML5          | Markup structure                    |
| CSS3           | Styling, layout, responsiveness     |
| JavaScript     | Logic, API calls, data rendering    |
| RapidAPI       | API platform for weather/pollution  |
| OpenWeatherMap | Real-time environmental data        |

---
## ⚙️ How to Run Locally
### `Clone the Repository`


``` 
git clone https://github.com/your-username/AtmoAlert.git
cd AtmoAlert 
```
### `Open the project in browser`

- `open index.html`
- `Replace the API Key`
- `Navigate to your JS file`
- `Update the RapidAPI key in the fetch() headers`
- `Get your API key from RapidAPI - OpenWeatherMap`

## 📌 AQI Classification

| AQI Level | Meaning     | Color       |
|-----------|-------------|-------------|
| 1         | Good        | 🟢 Green    |
| 2         | Fair        | 🟡 Yellow   |
| 3         | Moderate    | 🟠 Orange   |
| 4         | Poor        | 🔴 Red      |
| 5         | Very Poor   | 🟣 Purple   |

---

## ✨ Future Enhancements

- 📍 Auto-location detection using browser geolocation API  
- 📈 Visual AQI trends (charts over time)  
- 💬 Multilingual UI  
- 🌗 Light/Dark Mode toggle  
- 🌐 Deploy live via GitHub Pages / Vercel

---

## 👤 Author

**Himadri Das**  
---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Support

If you like this project, feel free to ⭐ the repo, fork it, and contribute!

---
