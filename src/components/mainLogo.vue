<template>
  <div>
    <!-- slow -->
    <div v-if="spinnerType=='slow'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="margin: auto; background: #fff0 none repeat scroll 0% 0%; display: block;"
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="translate(50,50)">
          <circle
            cx="0"
            cy="0"
            r="8.333333333333334"
            fill="none"
            stroke="#ffffff"
            stroke-width="4"
            stroke-dasharray="26.179938779914945 26.179938779914945"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;360 0 0"
              times="0;1"
              dur="20s"
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              begin="0"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="0"
            cy="0"
            r="16.666666666666668"
            fill="none"
            stroke="#680457"
            stroke-width="4"
            stroke-dasharray="52.35987755982989 52.35987755982989"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;360 0 0"
              times="0;1"
              dur="20s"
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              begin="-4"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="0"
            cy="0"
            r="25"
            fill="none"
            stroke="#ffffff"
            stroke-width="4"
            stroke-dasharray="78.53981633974483 78.53981633974483"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;360 0 0"
              times="0;1"
              dur="20s"
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              begin="-8"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="0"
            cy="0"
            r="33.333333333333336"
            fill="none"
            stroke="#680457"
            stroke-width="4"
            stroke-dasharray="104.71975511965978 104.71975511965978"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;360 0 0"
              times="0;1"
              dur="20s"
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              begin="-12"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="0"
            cy="0"
            r="41.666666666666664"
            fill="none"
            stroke="#ffffff"
            stroke-width="4"
            stroke-dasharray="130.89969389957471 130.89969389957471"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;360 0 0"
              times="0;1"
              dur="20s"
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              begin="-16"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
    <!-- end slow -->
    <!-- speed -->
    <div v-if="spinnerType=='speed'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="margin: auto; background: #fff0 none repeat scroll 0% 0%; display: block;"
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="translate(50,50)">
          <circle
            cx="0"
            cy="0"
            r="8.333333333333334"
            fill="none"
            stroke="#680457"
            stroke-width="4"
            stroke-dasharray="26.179938779914945 26.179938779914945"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;360 0 0"
              times="0;1"
              dur="0.4672897196261683s"
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              begin="0"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="0"
            cy="0"
            r="16.666666666666668"
            fill="none"
            stroke="#ffffff"
            stroke-width="4"
            stroke-dasharray="52.35987755982989 52.35987755982989"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;360 0 0"
              times="0;1"
              dur="0.4672897196261683s"
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              begin="-0.09345794392523366"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="0"
            cy="0"
            r="25"
            fill="none"
            stroke="#680457"
            stroke-width="4"
            stroke-dasharray="78.53981633974483 78.53981633974483"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;360 0 0"
              times="0;1"
              dur="0.4672897196261683s"
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              begin="-0.1869158878504673"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="0"
            cy="0"
            r="33.333333333333336"
            fill="none"
            stroke="#ffffff"
            stroke-width="4"
            stroke-dasharray="104.71975511965978 104.71975511965978"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;360 0 0"
              times="0;1"
              dur="0.4672897196261683s"
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              begin="-0.28037383177570097"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="0"
            cy="0"
            r="41.666666666666664"
            fill="none"
            stroke="#680457"
            stroke-width="4"
            stroke-dasharray="130.89969389957471 130.89969389957471"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 0 0;360 0 0"
              times="0;1"
              dur="0.4672897196261683s"
              calcMode="spline"
              keySplines="0.2 0 0.8 1"
              begin="-0.3738317757009346"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
    <!-- end speed -->
    <!-- listeninig -->
    <div v-if="spinnerType=='listening'">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        style="margin: auto; background: #fff0 none repeat scroll 0% 0%; display: block;"
        width="201px"
        height="201px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <defs>
          <filter
            id="ldio-3eaelfnbz7p-filter"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
            color-interpolation-filters="sRGB"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="9.600000000000001" />
            <feComponentTransfer result="cutoff">
              <feFuncA type="linear" slope="10" intercept="-5" />
            </feComponentTransfer>
          </filter>
        </defs>
        <g filter="url(#ldio-3eaelfnbz7p-filter)">
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#fcb711">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="4s"
                  repeatCount="indefinite"
                  begin="-0.25s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="4s"
                repeatCount="indefinite"
                begin="0s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#f37021">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="2s"
                  repeatCount="indefinite"
                  begin="-0.24671052631578946s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="2s"
                repeatCount="indefinite"
                begin="-0.003289473684210526s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#cc004c">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="1.3333333333333333s"
                  repeatCount="indefinite"
                  begin="-0.24342105263157895s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="1.3333333333333333s"
                repeatCount="indefinite"
                begin="-0.006578947368421052s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#6460aa">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="1s"
                  repeatCount="indefinite"
                  begin="-0.24013157894736842s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="1s"
                repeatCount="indefinite"
                begin="-0.009868421052631578s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0089d0">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.8s"
                  repeatCount="indefinite"
                  begin="-0.23684210526315788s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.8s"
                repeatCount="indefinite"
                begin="-0.013157894736842105s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0db14b">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.6666666666666666s"
                  repeatCount="indefinite"
                  begin="-0.23355263157894737s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.6666666666666666s"
                repeatCount="indefinite"
                begin="-0.01644736842105263s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#fcb711">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.5714285714285714s"
                  repeatCount="indefinite"
                  begin="-0.23026315789473684s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.5714285714285714s"
                repeatCount="indefinite"
                begin="-0.019736842105263157s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#f37021">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.5s"
                  repeatCount="indefinite"
                  begin="-0.22697368421052633s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.5s"
                repeatCount="indefinite"
                begin="-0.023026315789473683s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#cc004c">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.4444444444444444s"
                  repeatCount="indefinite"
                  begin="-0.2236842105263158s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.4444444444444444s"
                repeatCount="indefinite"
                begin="-0.02631578947368421s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#6460aa">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.4s"
                  repeatCount="indefinite"
                  begin="-0.22039473684210525s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.4s"
                repeatCount="indefinite"
                begin="-0.029605263157894735s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0089d0">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.36363636363636365s"
                  repeatCount="indefinite"
                  begin="-0.21710526315789475s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.36363636363636365s"
                repeatCount="indefinite"
                begin="-0.03289473684210526s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0db14b">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.3333333333333333s"
                  repeatCount="indefinite"
                  begin="-0.2138157894736842s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.3333333333333333s"
                repeatCount="indefinite"
                begin="-0.03618421052631579s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#fcb711">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.3076923076923077s"
                  repeatCount="indefinite"
                  begin="-0.21052631578947367s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.3076923076923077s"
                repeatCount="indefinite"
                begin="-0.039473684210526314s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#f37021">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.2857142857142857s"
                  repeatCount="indefinite"
                  begin="-0.20723684210526316s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.2857142857142857s"
                repeatCount="indefinite"
                begin="-0.04276315789473684s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#cc004c">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.26666666666666666s"
                  repeatCount="indefinite"
                  begin="-0.20394736842105263s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.26666666666666666s"
                repeatCount="indefinite"
                begin="-0.046052631578947366s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#6460aa">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.25s"
                  repeatCount="indefinite"
                  begin="-0.20065789473684212s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.25s"
                repeatCount="indefinite"
                begin="-0.049342105263157895s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0089d0">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.23529411764705882s"
                  repeatCount="indefinite"
                  begin="-0.19736842105263158s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.23529411764705882s"
                repeatCount="indefinite"
                begin="-0.05263157894736842s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0db14b">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.2222222222222222s"
                  repeatCount="indefinite"
                  begin="-0.19407894736842105s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.2222222222222222s"
                repeatCount="indefinite"
                begin="-0.05592105263157895s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#fcb711">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.21052631578947367s"
                  repeatCount="indefinite"
                  begin="-0.19078947368421054s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.21052631578947367s"
                repeatCount="indefinite"
                begin="-0.05921052631578947s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#f37021">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.2s"
                  repeatCount="indefinite"
                  begin="-0.1875s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.2s"
                repeatCount="indefinite"
                begin="-0.0625s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#cc004c">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.19047619047619047s"
                  repeatCount="indefinite"
                  begin="-0.18421052631578946s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.19047619047619047s"
                repeatCount="indefinite"
                begin="-0.06578947368421052s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#6460aa">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.18181818181818182s"
                  repeatCount="indefinite"
                  begin="-0.18092105263157895s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.18181818181818182s"
                repeatCount="indefinite"
                begin="-0.06907894736842106s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0089d0">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.17391304347826086s"
                  repeatCount="indefinite"
                  begin="-0.17763157894736842s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.17391304347826086s"
                repeatCount="indefinite"
                begin="-0.07236842105263158s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0db14b">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.16666666666666666s"
                  repeatCount="indefinite"
                  begin="-0.17434210526315788s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.16666666666666666s"
                repeatCount="indefinite"
                begin="-0.0756578947368421s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#fcb711">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.16s"
                  repeatCount="indefinite"
                  begin="-0.17105263157894737s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.16s"
                repeatCount="indefinite"
                begin="-0.07894736842105263s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#f37021">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.15384615384615385s"
                  repeatCount="indefinite"
                  begin="-0.16776315789473684s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.15384615384615385s"
                repeatCount="indefinite"
                begin="-0.08223684210526316s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#cc004c">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.14814814814814814s"
                  repeatCount="indefinite"
                  begin="-0.16447368421052633s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.14814814814814814s"
                repeatCount="indefinite"
                begin="-0.08552631578947369s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#6460aa">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.14285714285714285s"
                  repeatCount="indefinite"
                  begin="-0.1611842105263158s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.14285714285714285s"
                repeatCount="indefinite"
                begin="-0.08881578947368421s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0089d0">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.13793103448275862s"
                  repeatCount="indefinite"
                  begin="-0.15789473684210525s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.13793103448275862s"
                repeatCount="indefinite"
                begin="-0.09210526315789473s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0db14b">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.13333333333333333s"
                  repeatCount="indefinite"
                  begin="-0.15460526315789475s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.13333333333333333s"
                repeatCount="indefinite"
                begin="-0.09539473684210527s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#fcb711">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.12903225806451613s"
                  repeatCount="indefinite"
                  begin="-0.1513157894736842s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.12903225806451613s"
                repeatCount="indefinite"
                begin="-0.09868421052631579s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#f37021">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.125s"
                  repeatCount="indefinite"
                  begin="-0.14802631578947367s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.125s"
                repeatCount="indefinite"
                begin="-0.10197368421052631s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#cc004c">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.12121212121212122s"
                  repeatCount="indefinite"
                  begin="-0.14473684210526316s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.12121212121212122s"
                repeatCount="indefinite"
                begin="-0.10526315789473684s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#6460aa">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.11764705882352941s"
                  repeatCount="indefinite"
                  begin="-0.14144736842105263s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.11764705882352941s"
                repeatCount="indefinite"
                begin="-0.10855263157894737s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0089d0">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.11428571428571428s"
                  repeatCount="indefinite"
                  begin="-0.13815789473684212s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.11428571428571428s"
                repeatCount="indefinite"
                begin="-0.1118421052631579s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0db14b">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.1111111111111111s"
                  repeatCount="indefinite"
                  begin="-0.13486842105263158s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.1111111111111111s"
                repeatCount="indefinite"
                begin="-0.11513157894736842s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#fcb711">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.10810810810810811s"
                  repeatCount="indefinite"
                  begin="-0.13157894736842105s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.10810810810810811s"
                repeatCount="indefinite"
                begin="-0.11842105263157894s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#f37021">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.10526315789473684s"
                  repeatCount="indefinite"
                  begin="-0.12828947368421054s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.10526315789473684s"
                repeatCount="indefinite"
                begin="-0.12171052631578948s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#cc004c">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.10256410256410256s"
                  repeatCount="indefinite"
                  begin="-0.125s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.10256410256410256s"
                repeatCount="indefinite"
                begin="-0.125s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#6460aa">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.1s"
                  repeatCount="indefinite"
                  begin="-0.12171052631578948s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.1s"
                repeatCount="indefinite"
                begin="-0.12828947368421054s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0089d0">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.0975609756097561s"
                  repeatCount="indefinite"
                  begin="-0.11842105263157894s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.0975609756097561s"
                repeatCount="indefinite"
                begin="-0.13157894736842105s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0db14b">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.09523809523809523s"
                  repeatCount="indefinite"
                  begin="-0.11513157894736842s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.09523809523809523s"
                repeatCount="indefinite"
                begin="-0.13486842105263158s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#fcb711">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.09302325581395349s"
                  repeatCount="indefinite"
                  begin="-0.1118421052631579s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.09302325581395349s"
                repeatCount="indefinite"
                begin="-0.13815789473684212s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#f37021">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.09090909090909091s"
                  repeatCount="indefinite"
                  begin="-0.10855263157894737s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.09090909090909091s"
                repeatCount="indefinite"
                begin="-0.14144736842105263s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#cc004c">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.08888888888888889s"
                  repeatCount="indefinite"
                  begin="-0.10526315789473684s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.08888888888888889s"
                repeatCount="indefinite"
                begin="-0.14473684210526316s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#6460aa">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.08695652173913043s"
                  repeatCount="indefinite"
                  begin="-0.10197368421052631s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.08695652173913043s"
                repeatCount="indefinite"
                begin="-0.14802631578947367s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0089d0">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.0851063829787234s"
                  repeatCount="indefinite"
                  begin="-0.09868421052631579s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.0851063829787234s"
                repeatCount="indefinite"
                begin="-0.1513157894736842s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0db14b">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.08333333333333333s"
                  repeatCount="indefinite"
                  begin="-0.09539473684210527s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.08333333333333333s"
                repeatCount="indefinite"
                begin="-0.15460526315789475s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#fcb711">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.08163265306122448s"
                  repeatCount="indefinite"
                  begin="-0.09210526315789473s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.08163265306122448s"
                repeatCount="indefinite"
                begin="-0.15789473684210525s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#f37021">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.08s"
                  repeatCount="indefinite"
                  begin="-0.08881578947368421s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.08s"
                repeatCount="indefinite"
                begin="-0.1611842105263158s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#cc004c">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.0784313725490196s"
                  repeatCount="indefinite"
                  begin="-0.08552631578947369s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.0784313725490196s"
                repeatCount="indefinite"
                begin="-0.16447368421052633s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#6460aa">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.07692307692307693s"
                  repeatCount="indefinite"
                  begin="-0.08223684210526316s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.07692307692307693s"
                repeatCount="indefinite"
                begin="-0.16776315789473684s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0089d0">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.07547169811320754s"
                  repeatCount="indefinite"
                  begin="-0.07894736842105263s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.07547169811320754s"
                repeatCount="indefinite"
                begin="-0.17105263157894737s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0db14b">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.07407407407407407s"
                  repeatCount="indefinite"
                  begin="-0.0756578947368421s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.07407407407407407s"
                repeatCount="indefinite"
                begin="-0.17434210526315788s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#fcb711">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.07272727272727272s"
                  repeatCount="indefinite"
                  begin="-0.07236842105263158s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.07272727272727272s"
                repeatCount="indefinite"
                begin="-0.17763157894736842s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#f37021">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.07142857142857142s"
                  repeatCount="indefinite"
                  begin="-0.06907894736842106s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.07142857142857142s"
                repeatCount="indefinite"
                begin="-0.18092105263157895s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#cc004c">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.07017543859649122s"
                  repeatCount="indefinite"
                  begin="-0.06578947368421052s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.07017543859649122s"
                repeatCount="indefinite"
                begin="-0.18421052631578946s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#6460aa">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.06896551724137931s"
                  repeatCount="indefinite"
                  begin="-0.0625s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.06896551724137931s"
                repeatCount="indefinite"
                begin="-0.1875s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0089d0">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.06779661016949153s"
                  repeatCount="indefinite"
                  begin="-0.05921052631578947s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.06779661016949153s"
                repeatCount="indefinite"
                begin="-0.19078947368421054s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0db14b">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.06666666666666667s"
                  repeatCount="indefinite"
                  begin="-0.05592105263157895s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.06666666666666667s"
                repeatCount="indefinite"
                begin="-0.19407894736842105s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#fcb711">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.06557377049180328s"
                  repeatCount="indefinite"
                  begin="-0.05263157894736842s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.06557377049180328s"
                repeatCount="indefinite"
                begin="-0.19736842105263158s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#f37021">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.06451612903225806s"
                  repeatCount="indefinite"
                  begin="-0.049342105263157895s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.06451612903225806s"
                repeatCount="indefinite"
                begin="-0.20065789473684212s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#cc004c">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.06349206349206349s"
                  repeatCount="indefinite"
                  begin="-0.046052631578947366s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.06349206349206349s"
                repeatCount="indefinite"
                begin="-0.20394736842105263s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#6460aa">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.0625s"
                  repeatCount="indefinite"
                  begin="-0.04276315789473684s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.0625s"
                repeatCount="indefinite"
                begin="-0.20723684210526316s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0089d0">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.06153846153846154s"
                  repeatCount="indefinite"
                  begin="-0.039473684210526314s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.06153846153846154s"
                repeatCount="indefinite"
                begin="-0.21052631578947367s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0db14b">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.06060606060606061s"
                  repeatCount="indefinite"
                  begin="-0.03618421052631579s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.06060606060606061s"
                repeatCount="indefinite"
                begin="-0.2138157894736842s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#fcb711">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.05970149253731343s"
                  repeatCount="indefinite"
                  begin="-0.03289473684210526s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.05970149253731343s"
                repeatCount="indefinite"
                begin="-0.21710526315789475s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#f37021">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.058823529411764705s"
                  repeatCount="indefinite"
                  begin="-0.029605263157894735s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.058823529411764705s"
                repeatCount="indefinite"
                begin="-0.22039473684210525s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#cc004c">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.057971014492753624s"
                  repeatCount="indefinite"
                  begin="-0.02631578947368421s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.057971014492753624s"
                repeatCount="indefinite"
                begin="-0.2236842105263158s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#6460aa">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.05714285714285714s"
                  repeatCount="indefinite"
                  begin="-0.023026315789473683s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.05714285714285714s"
                repeatCount="indefinite"
                begin="-0.22697368421052633s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0089d0">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.056338028169014086s"
                  repeatCount="indefinite"
                  begin="-0.019736842105263157s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.056338028169014086s"
                repeatCount="indefinite"
                begin="-0.23026315789473684s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#0db14b">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.05555555555555555s"
                  repeatCount="indefinite"
                  begin="-0.01644736842105263s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.05555555555555555s"
                repeatCount="indefinite"
                begin="-0.23355263157894737s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#fcb711">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.0547945205479452s"
                  repeatCount="indefinite"
                  begin="-0.013157894736842105s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.0547945205479452s"
                repeatCount="indefinite"
                begin="-0.23684210526315788s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#f37021">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.05405405405405406s"
                  repeatCount="indefinite"
                  begin="-0.009868421052631578s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.05405405405405406s"
                repeatCount="indefinite"
                begin="-0.24013157894736842s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#cc004c">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.05333333333333334s"
                  repeatCount="indefinite"
                  begin="-0.006578947368421052s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.05333333333333334s"
                repeatCount="indefinite"
                begin="-0.24342105263157895s"
              />
            </g>
          </g>
          <g transform="translate(50 50)">
            <g>
              <circle cx="17" cy="0" r="5" fill="#6460aa">
                <animate
                  attributeName="r"
                  keyTimes="0;0.5;1"
                  values="14.399999999999999;33.599999999999994;14.399999999999999"
                  dur="0.05263157894736842s"
                  repeatCount="indefinite"
                  begin="-0.003289473684210526s"
                />
              </circle>
              <animateTransform
                attributeName="transform"
                type="rotate"
                keyTimes="0;1"
                values="0;360"
                dur="0.05263157894736842s"
                repeatCount="indefinite"
                begin="-0.24671052631578946s"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
    <!-- end listening -->
  </div>
</template>

<script>
export default {
    props:{
        spinnerType:{
            type:String,
            default:'slow'
        }
    },
  data() {
    return {
      
    };
  }
};
</script>

<style>
</style>