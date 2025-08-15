import Landing from "./components/main/Landing";
import Windows from "./components/main/windows/Windows";

const App = () => {
  return (
    <>
      <Landing
        bg="/images/landing-home.jpg"
        fg="/images/landing-home-fg.webp"
        imageCredit="Landing image from https://deviantart.com/lizhel-art"
        title="ashures"
      />
      <Windows />
    </>
  )
};

export default App;
