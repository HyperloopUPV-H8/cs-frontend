type Props = {
    sweep: number;
    strokeWidth: number;
    percentage: number;
    viewBoxLength: number;
    className?: string;
};

export const Arc = ({
    sweep,
    strokeWidth,
    percentage,
    viewBoxLength,
    className,
}: Props) => {
    const radius = viewBoxLength / 2;
    const innerRadius = radius - strokeWidth / 2;
    const circumference = 2 * Math.PI * innerRadius;
    const fullArc = circumference * (sweep / 360);
    const filledArc = fullArc * (percentage / 100);

    // Setting circunference as the length of the gap ensures no second dash is drawn
    const dashArray = `${filledArc} ${circumference}`;
    const transform = `rotate(${-90 - sweep / 2}, ${radius}, ${radius})`;
    return (
        <g
            className={className}
            viewBox={`0 0 ${viewBoxLength} ${viewBoxLength}`}
        >
            <circle
                cx={radius}
                cy={radius}
                fill="transparent"
                r={innerRadius}
                strokeWidth={strokeWidth}
                strokeDasharray={dashArray}
                strokeLinecap={"round"}
                transform={transform}
            />
        </g>
    );
};
