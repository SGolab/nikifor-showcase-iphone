import {GlobalStyle} from "./styles/GlobalStyle";
import Quote from "./sections/Quote";
import HeroSection from "./sections/HeroSection";
import PhoneModel from "./sections/PhoneModel";
import DesignSection from "./sections/DesignSection";
import DisplaySection from "./sections/DisplaySection";
import ProcessorSection from "./sections/ProcessorSection";
import BatterySection from "./sections/BatterySection";
import ColorSection from "./sections/ColorSection";
import PricingSection from "./sections/PricingSection";
import {ColorContextProvider} from "./context/ColorContext";
import CameraSection from "./sections/CameraSection";

function App() {
    return (
        <>
            <GlobalStyle/>
            <Quote/>
            <PhoneModel/>
            <HeroSection/>
            <DesignSection/>
            <DisplaySection/>
            <ProcessorSection/>
            <BatterySection/>
            <ColorContextProvider>
                <ColorSection/>
                <CameraSection/>
                <PricingSection/>
            </ColorContextProvider>
        </>
    );
}

export default App;
