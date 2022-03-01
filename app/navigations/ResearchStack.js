import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Research from '../screens/Research/Research';
import ResearchSelected from '../screens/Research/ResearchSelected';
import ResearchDetail from '../screens/Research/ResearchDetail';
import CameraResearch from '../screens/Media/CameraResearch';
import GalleryResearch from '../screens/Media/GalleryResearch';


const Stack = createStackNavigator();

export default function ResearchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="research"
                component={Research}
                options={{
                    title: "Investigaciones", headerShown: false
                }}
            />
            <Stack.Screen
                name="research-selected"
                component={ResearchSelected}
                options={{ title: "Investigación" }}
            />
            <Stack.Screen
                name="research-detail"
                component={ResearchDetail}
                options={{ title: "Documentación" }}
            />
            <Stack.Screen
                name="gallery-research"
                component={GalleryResearch}
                options={{ title: "Obtener de galeria" }}
            />
            <Stack.Screen
                name="camera-research"
                component={CameraResearch}
                options={{ title: "Tomar foto" }}
            />
        </Stack.Navigator>
    )
}
