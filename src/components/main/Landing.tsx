interface LandingProps {
  title: string;
  bg: string;
  fg?: string;
  imageCredit?: string;
}

const Landing: React.FC<LandingProps> = ({ title, bg, fg, imageCredit }) => {
  const style = (image: string = ""): React.CSSProperties => ({
    background: `url("${image}")`,
    backgroundSize: "cover",
  });

  return (
    <div aria-description={imageCredit} style={style(bg)} className="landing">
      {fg && <div style={style(fg)} className="landing-fg"></div>}
      <div className="landing-filter"></div>
      <div className="landing-content">
        <h1>{title}</h1>
      </div>
    </div>
  )
};

export default Landing;