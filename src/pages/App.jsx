import { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/switch/switch";
import Links from "../components/links/links";
import Social from "../components/socialLinks/socialLinks";
import Footer from "../components/footer/footer";


import "./App.css";

import imgDarkMode from "../img/avatar.jpg"
import imgLightMode from "../img/blanco.jpg"


const App= ()=> {
const [isLightMode,setIsLightMode] = useState(false)
const toggleMode= ()=>{
    setIsLightMode((prevMode) => !prevMode);
};

const imgSrc = isLightMode ? imgLightMode : imgDarkMode
const imgAlt= isLightMode ? "Imagem do Modo Claro" : "Imagem do Modo Escuro"

return(
    <div id="App" className={isLightMode ? "light" : ""}>
<div id= "container">
    <Profile
    imgSrc={imgSrc}
    imgAlt={imgAlt}
    
    >@RABAKA</Profile>
    <Switch mode={toggleMode} infoButton={isLightMode}/>
    <dir id="links">
        <ul>
            <Links Link={"https://github.com"}>GitHub</Links>
            <Links Link={"https://www.instagram.com/eo_rabaka/?hl=pt_BR"}>Instagram</Links>
            <Links Link={"https://open.spotify.com/user/31vfczndfoyjconp4gle4lidfjea"}>Spotify</Links>
            <Links Link={"#"}>Projeto</Links>
        </ul>
    </dir>
    <div id="socialLinks">
        <Social href={"https://github.com"} icon={"logo-github"} />
        <Social href={"https://www.instagram.com/eo_rabaka/?hl=pt_BR"} icon={"logo-instagram"} />
        <Social href={"https://account.xbox.com/pt-BR/Profile?xr=shellnav&csrf=e39crNw6ZLZyVFLJzPclJly-0dQqmVargjOnSXnq174gzs3aqMEikUynUiXmE_zGR6ldA35na70eVzLwuVkxjDxOMZU1&wa=wsignin1.0"} icon={"logo-xbox"} />
        <Social href={"https://www.tiktok.com/@eo_rabaka?lang=pt-BR"} icon={"logo-tiktok"} />
    </div>
    <Footer Link={"#"}>@RABAKA</Footer>
</div>
</div>
);
};

export default App;