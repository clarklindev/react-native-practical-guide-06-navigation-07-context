import { View, Text, StyleSheet } from "react-native";

import MealsList from "../components/MealsList/MealsList";
import { useFavorites } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  const { ids } = useFavorites();

  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
