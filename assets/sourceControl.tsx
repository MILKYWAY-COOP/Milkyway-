export default function SourceControl({
  fill = '#FFCC00',
  width,
  height,
}: {
  fill?: string;
  width: number;
  height: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6M24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6M24 42C19.6508 42 16.125 33.9411 16.125 24C16.125 14.0589 19.6508 6 24 6M24 42C28.3492 42 31.875 33.9411 31.875 24C31.875 14.0589 28.3492 6 24 6M9.375 32.7488C12.6726 30.8605 18.1515 29.625 24.3527 29.625C30.8249 29.625 36.5101 30.9708 39.75 33M9.375 15.2512C12.6726 17.1395 18.1515 18.375 24.3527 18.375C30.8249 18.375 36.5101 17.0292 39.75 15"
        stroke={fill}
        stroke-width="2"
      />
    </svg>
  );
}
