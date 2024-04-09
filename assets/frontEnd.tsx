export default function FrontEnd({
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
      <rect
        x="11.1423"
        y="11.1423"
        width="25.7143"
        height="25.7143"
        rx="6"
        stroke={fill}
        stroke-width="1.71429"
      />
      <rect
        x="18.4302"
        y="18.4263"
        width="11.1429"
        height="11.1429"
        rx="2.14286"
        stroke={fill}
        stroke-width="2.57143"
      />
      <rect
        x="13.7148"
        y="3.42969"
        width="3.42857"
        height="3.42857"
        rx="1.71429"
        fill={fill}
      />
      <rect
        x="3.42969"
        y="12"
        width="3.42857"
        height="3.42857"
        rx="1.71429"
        fill={fill}
      />
      <rect
        x="3.42969"
        y="20.5703"
        width="3.42857"
        height="3.42857"
        rx="1.71429"
        fill={fill}
      />
      <rect
        x="3.42969"
        y="29.1406"
        width="3.42857"
        height="3.42857"
        rx="1.71429"
        fill={fill}
      />
      <rect
        x="13.7148"
        y="41.1406"
        width="3.42857"
        height="3.42857"
        rx="1.71429"
        fill={fill}
      />
      <rect
        x="22.2852"
        y="41.1406"
        width="3.42857"
        height="3.42857"
        rx="1.71429"
        fill={fill}
      />
      <rect
        x="30.8555"
        y="41.1406"
        width="3.42857"
        height="3.42857"
        rx="1.71429"
        fill={fill}
      />
      <rect
        x="41.1445"
        y="29.1406"
        width="3.42857"
        height="3.42857"
        rx="1.71429"
        fill={fill}
      />
      <rect
        x="41.1445"
        y="20.5703"
        width="3.42857"
        height="3.42857"
        rx="1.71429"
        fill={fill}
      />
      <rect
        x="41.1445"
        y="12"
        width="3.42857"
        height="3.42857"
        rx="1.71429"
        fill={fill}
      />
      <rect
        x="22.2852"
        y="3.42969"
        width="3.42857"
        height="3.42857"
        rx="1.71429"
        fill={fill}
      />
      <rect
        x="30.8555"
        y="3.42969"
        width="3.42857"
        height="3.42857"
        rx="1.71429"
        fill={fill}
      />
    </svg>
  );
}