import GithubIcon from "../../icons/logos/Github";
import WindowCloseIcon from "../../icons/windows/Close";
import WindowMinimizeIcon from "../../icons/windows/Minimize";
import WindowRestoreIcon from "../../icons/windows/Restore";

interface WindowPanelProps {
  title: string;
  children: React.ReactElement;
}

const WindowPanel: React.FC<WindowPanelProps> = (props) => {
  const { children } = props;

  return (
    <div className="window-panel">
      <div className="window">
        <div className="window-top">
          <ul className="buttons">
            <li><a><GithubIcon /></a></li>
          </ul>
          <div className="title"><h1>{props.title}</h1></div>
          <ul className="buttons">
            <li><WindowMinimizeIcon /></li>
            <li><WindowRestoreIcon /></li>
            <li><WindowCloseIcon /></li>
          </ul>
        </div>
        <div className="window-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default WindowPanel;