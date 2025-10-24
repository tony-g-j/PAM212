import React, { useEffect, useRef, useState } from "react";
import {
    View,
    Text,
    Animated,
    StyleSheet,
    Dimensions,
    ImageBackground,
    TextInput,
    Button,
    TouchableHighlight,
    Alert,
    Switch
} from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const { height } = Dimensions.get("window");

export default function Repaso_1() {
    const [showMain, setShowMain] = useState(false);
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState(''); 

    //Animaciones splash
    const fadeLogo = useRef(new Animated.Value(0)).current;
    const scaleLogo = useRef(new Animated.Value(0.5)).current;
    const rotateLogo = useRef(new Animated.Value(0)).current;
    const slideText = useRef(new Animated.Value(height / 2)).current;
    const fadeOut = useRef(new Animated.Value(1)).current;

    //Switch
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    
    function valTyC() {
        if (!nombre.trim()) {
            Alert.alert('Error', 'Por favor, ingresa tu nombre.');
            return; 
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(correo.trim())) {
            Alert.alert('Error', 'Por favor, ingresa un correo electrónico válido.');
            alert('Error', 'Por favor, ingresa un correo electrónico válido.');
            return; 
        }

        if (isEnabled) {
            Alert.alert('Registro exitoso', `Nombre: ${nombre}\nCorreo: ${correo}`);
            alert('Registro exitoso', `Nombre: ${nombre}\nCorreo: ${correo}`);
        } else {
            Alert.alert('Error', 'Debes aceptar los Términos y Condiciones para continuar.');
            alert('Error', 'Debes aceptar los Términos y Condiciones para continuar.');
        }
    }

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeLogo, {
                toValue: 1,
                duration: 1200,
                useNativeDriver: false,
            }),
            Animated.spring(scaleLogo, {
                toValue: 1,
                friction: 5,
                useNativeDriver: false,
            }),
            Animated.timing(rotateLogo, {
                toValue: 1,
                duration: 1200,
                useNativeDriver: false,
            }),
        ]).start();

        Animated.timing(slideText, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
            delay: 800,
        }).start();

        const timer = setTimeout(async () => {
            Animated.timing(fadeOut, {
                toValue: 0,
                duration: 800,
                useNativeDriver: false,
            }).start(async () => {
                await SplashScreen.hideAsync();
                setShowMain(true);
            });
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const rotateInterpolate = rotateLogo.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "10deg"],
    });

    if (showMain) {
        return (
            <ImageBackground
                source={require("../assets/Repaso_Background.jpg")}
                style={styles.background}
                resizeMode='cover'
            >
                <View style={styles.content}>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa tu nombre"
                        placeholderTextColor={'#ffffffff'}
                        value={nombre}
                        onChangeText={setNombre}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa un correo"
                        placeholderTextColor={'#ffffffff'}
                        value={correo}
                        onChangeText={setCorreo} 
                        keyboardType="email-address"
                    />
                    <Text style={styles.textTyC}>Terminos y Condiciones </Text> 
                    <Switch
                        trackColor={{ false: '#ffffffff', true: '#333333ff' }}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <TouchableHighlight
                        style={styles.btnHighlight}
                        underlayColor="#002a3dff"
                        onPress={valTyC}
                    >
                        <Text style={styles.text}>Registrar</Text>
                    </TouchableHighlight>
                </View>
            </ImageBackground>
        );
    }

    return (
        <Animated.View style={[styles.container, { opacity: fadeOut }]}>
            <Animated.Image
                source={require("../assets/Repaso_Logo.png")}
                resizeMode="contain"
                style={[
                    styles.logoImage,
                    {
                        opacity: fadeLogo,
                        transform: [{ scale: scaleLogo }, { rotate: rotateInterpolate }],
                    },
                ]}
            />
            <Animated.Text
                style={[styles.text, { transform: [{ translateY: slideText }] }]}
            >
                Cargando...
            </Animated.Text>
            <Animated.View
                style={[
                    styles.loader,
                    {
                        opacity: fadeLogo,
                        transform: [
                            {
                                translateX: slideText.interpolate({
                                    inputRange: [0, height / 2],
                                    outputRange: [0, -50],
                                }),
                            },
                        ],
                    },
                ]}
            />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffce7aff",
        justifyContent: "center",
        alignItems: "center",
    },
    loader: {
        width: 60,
        height: 6,
        backgroundColor: "#fff",
        borderRadius: 3,
    },
    logoImage: {
        width: 300,
        height: 300,
        marginBottom: 5,
    },
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        width: '90%',
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: 20,
        borderRadius: 10,
        alignItems: 'center'
    },
    text: {
        color: "white",
        fontSize: 24,
        marginBottom: 10,
        textAlign: "center",
    },
    textTyC: {
        color: "white",
        fontSize: 16,
        marginTop: 15,
        marginBottom: 5,
        textAlign: "center",
    },
    input: {
        borderWidth: 3,
        borderColor: '#ffffffff',
        color: '#ffffff',
        padding: 12,
        borderRadius: 9,
        width: '100%', 
        marginBottom: 10, 
    },
    btnHighlight: {
        marginTop: 15,
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#005a7dff',
        width: '100%'
    },
});