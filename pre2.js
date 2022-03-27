export default function App() {
  const [city, setCity] = useState("Loading");
  const [days, setDays] = useState([]);

  const getWeather = async () => {
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].city);

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    setDays(json.daily);
  };
  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <ScrollView horizontal pagingEnabled>
        {days.map((day, i) => (
          <View key={i} style={styles.day}>
            <Text style={styles.temp}>{day.temp.day}</Text>
            <Fontisto
              name={icons[day.weather[0].main]}
              size={68}
              color="white"
            />
            <Text style={styles.description}>{day.weather[0].main}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
