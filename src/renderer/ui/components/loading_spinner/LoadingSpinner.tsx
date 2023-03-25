import './style/index.scss';

interface LoadingSpinnerProps {
  width?: number | string;
  height?: number | string;
}
export default function LoadingSpinner({
  width = 50,
  height = 50,
}: LoadingSpinnerProps) {
  return (
    <div
      className="loading-container"
      css={{ width: width, height: height }}
    ></div>
  );
}
