export async function fetchWeather(city) {
  const api_key = "7a3336c88ab6dd91333786a6bb96dbd4";

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`,
  );

  const data = await response.json();

  console.log(data);

  return data;
}

export async function fetchForeCast(city) {
  const api_key = "7a3336c88ab6dd91333786a6bb96dbd4";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=metric`,
  );
  const data = await response.json()

  return data 
}


