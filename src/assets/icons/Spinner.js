export const Spinner = () => {
    return (
        <svg
            style={{ margin: '0px auto', background: 'none', padding: 0 }}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.0"
            width="35px"
            height="35px"
            viewBox="0 0 128 128"
            xmlSpace="preserve"
        >
            <rect x="0" y="0" width="100%" height="100%" fill="none" />
            <g>
                <path
                    d="M95.25 17.4a56.26 56.26 0 0 0-76.8 13.23L12.1 26.2a64 64 0 0 1 87.6-15.17z"
                    fill="#c2e7ff"
                />
                <path
                    d="M95.25 17.4a56.26 56.26 0 0 0-76.8 13.23L12.1 26.2a64 64 0 0 1 87.6-15.17z"
                    fill="#c2e7ff"
                    transform="rotate   (120 64 64)"
                />
                <path
                    d="M95.25 17.4a56.26 56.26 0 0 0-76.8 13.23L12.1 26.2a64 64 0 0 1 87.6-15.17z"
                    fill="#c2e7ff"
                    transform="rotate(240 64 64)"
                />
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 64 64"
                    to="120 64 64"
                    dur="1080ms"
                    repeatCount="indefinite"
                ></animateTransform>
            </g>
        </svg>
    )
}
