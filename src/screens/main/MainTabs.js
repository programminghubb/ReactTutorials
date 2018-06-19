import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    console.log("inside starting the tabs")
    Promise.all([
        Icon.getImageSource("md-home", 30),
        Icon.getImageSource("md-contact", 30)
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: "steemittutorial.HomeScreen",
                    label: "Home Screen",
                    title: "Home Screen",
                    icon: sources[0]
                },
                {
                    screen: "steemittutorial.ProfileScreen",
                    label: "Profile",
                    title: "Profile",
                    icon: sources[1]
                }
            ]
        });
    });
};

export default startTabs;