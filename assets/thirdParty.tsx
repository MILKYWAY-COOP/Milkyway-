export default function ThirdParty({
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
        d="M12.48 24C12.48 26.1208 10.7608 27.84 8.64 27.84C6.51923 27.84 4.8 26.1208 4.8 24C4.8 21.8793 6.51923 20.16 8.64 20.16C10.7608 20.16 12.48 21.8793 12.48 24ZM12.48 24H35.52M35.52 24C35.52 26.1208 37.2392 27.84 39.36 27.84C41.4808 27.84 43.2 26.1208 43.2 24C43.2 21.8793 41.4808 20.16 39.36 20.16C37.2392 20.16 35.52 21.8793 35.52 24ZM35.52 8.64005C35.52 10.7608 37.2392 12.48 39.36 12.48C41.4808 12.48 43.2 10.7608 43.2 8.64005C43.2 6.51928 41.4808 4.80005 39.36 4.80005C37.2392 4.80005 35.52 6.51928 35.52 8.64005ZM35.52 8.64005H24.48C23.4196 8.64005 22.56 9.49966 22.56 10.56V37.44C22.56 38.5004 23.4196 39.36 24.48 39.36H35.52M35.52 39.36C35.52 41.4808 37.2392 43.2 39.36 43.2C41.4808 43.2 43.2 41.4808 43.2 39.36C43.2 37.2393 41.4808 35.52 39.36 35.52C37.2392 35.52 35.52 37.2393 35.52 39.36Z"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}