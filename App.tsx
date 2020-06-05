// PLUGINS IMPORTS //
import React, { useEffect, useState } from "react"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import store from "./src/Redux/ReduxStore"
import { Provider } from "react-redux"

import * as Font from "expo-font"

// COMPONENTS IMPORTS //
import GeneralHeader from "./src/Components/Shared/Components/GeneralHeader/GeneralHeader"

import LoadingScreen from "./src/Components/HelpersScreens/LoadingScreen/LoadingScreen"
import DashboardScreenContainer from "./src/Components/HelpersScreens/DashboardScreen/DashboardScreenContainer"
import IndividualSaleScreen from "./src/Components/HelpersScreens/IndividualSaleScreen/IndividualSaleScreen"

import MainScreen from "./src/Components/GeneralScreens/MainScreen/MainScreenContainer"
import MenuScreenContainer from "./src/Components/GeneralScreens/MenuScreen/MenuScreenContainer"
import DeliveryTermsScreen from "./src/Components/GeneralScreens/DeliveryTermsScreen/DeliveryTermsScreen"

// EXTRA IMPORTS //
import { AntDesign } from "@expo/vector-icons"
import { MaterialIcons } from "@expo/vector-icons"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const App: React.FC<PropsType> = (props) => {
  const [loading, setLoading] = useState(true as boolean)

  const Stack = createStackNavigator()

  useEffect(() => {
    const LoadFonts = async () => {
      await Font.loadAsync({
        light: require("./assets/Fonts/Montserrat-Light.ttf"),
        regular: require("./assets/Fonts/Montserrat-Regular.ttf"),
        bold: require("./assets/Fonts/Montserrat-Bold.ttf"),
      })

      setLoading(false)
    }

    LoadFonts()
  }, [])

  return (
    <Provider store={store}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <NavigationContainer
          theme={{
            colors: { background: "#fff" },
          }}
        >
          <Stack.Navigator initialRouteName="MainScreen">
            {/* GENERAL SCREENS */}
            <Stack.Screen
              name="DashboardScreen"
              component={DashboardScreenContainer}
              options={({ navigation, route }: any) => ({
                header: () => (
                  <GeneralHeader
                    leftIcon={
                      <AntDesign
                        name="close"
                        size={24}
                        color="#1C1C1C"
                        onPress={() => navigation.goBack()}
                      />
                    }
                  />
                ),
              })}
            />
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={({ navigation, route }: any) => ({
                header: () => (
                  <GeneralHeader
                    leftIcon={
                      <MaterialIcons
                        name="menu"
                        size={24}
                        color="#1C1C1C"
                        onPress={() => navigation.navigate("DashboardScreen")}
                      />
                    }
                  />
                ),
              })}
            />
            <Stack.Screen
              name="MenuScreen"
              component={MenuScreenContainer}
              options={({ navigation, route }: any) => ({
                header: () => (
                  <GeneralHeader
                    leftIcon={
                      <AntDesign
                        name="close"
                        size={24}
                        color="#1C1C1C"
                        onPress={() => navigation.goBack()}
                      />
                    }
                  />
                ),
              })}
            />
            <Stack.Screen
              name="DeliveryTermsScreen"
              component={DeliveryTermsScreen}
              options={({ navigation, route }: any) => ({
                header: () => (
                  <GeneralHeader
                    leftIcon={
                      <AntDesign
                        name="close"
                        size={24}
                        color="#1C1C1C"
                        onPress={() => navigation.goBack()}
                      />
                    }
                  />
                ),
              })}
            />

            {/* HELPERS SCREENS */}
            <Stack.Screen
              name="IndividualSaleScreen"
              component={IndividualSaleScreen}
              options={({ navigation, route }: any) => ({
                header: () => (
                  <GeneralHeader
                    leftIcon={
                      <AntDesign
                        name="close"
                        size={24}
                        color="#1C1C1C"
                        onPress={() => navigation.goBack()}
                      />
                    }
                  />
                ),
              })}
              initialParams={{
                saleTitle: null as string | null,
                description: null as string | null,
                type: null as string | null,
                image: null as string | null,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </Provider>
  )
}

export default App
