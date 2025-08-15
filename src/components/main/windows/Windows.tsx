import WindowPanel from "./WindowPanel";

const Windows: React.FC = () => {
  return (
    <div className="windows">
      <WindowPanel title="project-1.exe">
        <h1>hi</h1>
      </WindowPanel>
      <WindowPanel title="project-2.exe">
        <h1>hi</h1>
      </WindowPanel>
      <WindowPanel title="project-3.exe">
        <h1>hi</h1>
      </WindowPanel>
      <WindowPanel title="project-4.exe">
        <h1>hi</h1>
      </WindowPanel>
    </div>
  );
};

export default Windows;