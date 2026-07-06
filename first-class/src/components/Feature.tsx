/**
 * props: {
 *  subheader: "GPS OFFLINE MAP NAVIGATION",
 *  mainheader: string;
 *  description: string;
 * }
 */

type FeatureType = {
  subheader: string;
  mainheader: string;
  description: string;
};

export const Feature = ({
  subheader,
  mainheader,
  description,
}: FeatureType) => {
  return (
    <div>
      <div>
        <h3>{subheader}</h3>
        <h2>{mainheader}</h2>
        <p>{description}</p>
        <button>Download Kaya</button>
      </div>
      <div>
        {/* add this in later <img /> */}
        <div>IMAGE PLACEHOLDER</div>
      </div>
    </div>
  );
};