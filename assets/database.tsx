export default function Database({
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
        d="M34.8 19.6447L43.2 23.9503L24 33.7918L4.79999 23.9503L13.3535 19.566M34.8 29.0529L43.2 33.3586L24 43.2L4.79999 33.3586L13.3535 28.9742M24 4.80005L43.2 14.6415L24 24.483L4.79999 14.6415L24 4.80005Z"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
