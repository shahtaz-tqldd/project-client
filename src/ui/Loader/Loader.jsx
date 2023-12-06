import "../../assets/styles/loader.css";

const Loader = () => (
  <div
    id="techify-loader"
    className="w-screen h-screen grid place-items-center"
  >
    <div className="lds-default">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader;
