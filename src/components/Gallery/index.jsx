import Styles from "./styles.module.scss";
//import DefaultImage from '/assets/test.jpg'

// export interface Props {
//     images: Array<String>;
//     captions: Array<String>;
//     colors: Shape<String>;
//     children?: React.ReactNode
// }

function Gallery({ images, captions, colors, children }) {
  return (
    <section className={Styles.hero}>
      <div
        className={Styles.hero_slide}
        style={`background-image:url(${images[0]})`}
      ></div>
      <div className={Styles.hero_summary}>
        <h1 className="title">{children && children}</h1>
        <p>{captions && captions[0]}</p>
      </div>
    </section>
  );
}

export default Gallery;
