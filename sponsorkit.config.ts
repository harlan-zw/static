import { defineConfig, presets } from 'sponsorkit'

const NUXT_LOGO = (width: number, y: number) => `
<a xlink:href="https://nuxtlabs.com" class="sponsorkit-link" target="_blank" id="NuxtLabs">
<svg x="${(width - 361)/2}" y="${y}" width="361" height="86" viewBox="0 0 361 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M351 0H10C4.47715 0 0 4.47715 0 10V76C0 81.5229 4.47715 86 10 86H351C356.523 86 361 81.5229 361 76V10C361 4.47715 356.523 0 351 0Z" fill="white"/>
<path d="M105.824 66.7106V29.3546H112.655L130.212 55.6646V29.3546H137.043V66.7106H130.212L112.655 40.4546V66.7106H105.824ZM154.051 67.3506C150.742 67.3506 148.181 66.3196 146.366 64.2556C144.587 62.1926 143.698 59.1686 143.698 55.1836V40.2416H150.475V54.5436C150.475 56.8206 150.938 58.5636 151.863 59.7736C152.788 60.9836 154.247 61.5876 156.239 61.5876C158.125 61.5876 159.672 60.9116 160.882 59.5596C162.127 58.2076 162.75 56.3226 162.75 53.9026V40.2416H169.581V66.7116H163.55L163.016 62.2286C162.198 63.7936 161.006 65.0386 159.441 65.9636C157.911 66.8886 156.114 67.3516 154.051 67.3516V67.3506ZM174.085 66.7106L183.69 53.4756L174.085 40.2416H181.396L188.12 49.6336L194.791 40.2416H202.155L192.496 53.4756L202.155 66.7106H194.791L188.12 57.3186L181.396 66.7106H174.085ZM218.301 66.7106C215.526 66.7106 213.302 66.0346 211.63 64.6826C209.958 63.3306 209.122 60.9296 209.122 57.4786V45.9506H204.586V40.2406H209.122L209.922 33.1426H215.953V40.2406H223.104V45.9506H215.953V57.5306C215.953 58.8116 216.22 59.7006 216.753 60.1996C217.323 60.6616 218.283 60.8926 219.635 60.8926H222.944V66.7096H218.301V66.7106ZM229.129 66.7106V29.3546H235.96V61.3746H252.503V66.7106H229.129ZM267.488 67.3506C265.211 67.3506 263.343 66.9956 261.884 66.2836C260.425 65.5366 259.34 64.5586 258.629 63.3486C257.917 62.1386 257.561 60.8046 257.561 59.3466C257.561 56.8916 258.522 54.8996 260.443 53.3696C262.364 51.8396 265.246 51.0746 269.089 51.0746H275.813V50.4346C275.813 48.6196 275.297 47.2856 274.265 46.4316C273.233 45.5776 271.952 45.1516 270.423 45.1516C269.035 45.1516 267.826 45.4886 266.794 46.1646C265.762 46.8046 265.122 47.7656 264.873 49.0466H258.202C258.38 47.1256 259.02 45.4536 260.123 44.0306C261.261 42.6076 262.72 41.5216 264.499 40.7746C266.278 39.9926 268.27 39.6006 270.476 39.6006C274.247 39.6006 277.218 40.5436 279.388 42.4296C281.558 44.3146 282.644 46.9836 282.644 50.4346V66.7106H276.827L276.186 62.4416C275.404 63.8646 274.301 65.0386 272.878 65.9636C271.49 66.8886 269.693 67.3516 267.488 67.3516V67.3506ZM269.035 62.0146C270.992 62.0146 272.504 61.3746 273.571 60.0936C274.674 58.8136 275.368 57.2296 275.653 55.3436H269.836C268.021 55.3436 266.723 55.6816 265.94 56.3576C265.157 56.9976 264.766 57.7986 264.766 58.7596C264.766 59.7916 265.157 60.5916 265.94 61.1606C266.723 61.7306 267.754 62.0146 269.035 62.0146ZM304.852 67.3506C302.859 67.3506 301.116 66.9776 299.622 66.2306C298.16 65.5119 296.91 64.427 295.993 63.0816L295.246 66.7116H289.162V28.2866H295.993V44.0306C296.847 42.8566 297.968 41.8246 299.355 40.9346C300.778 40.0456 302.61 39.6006 304.852 39.6006C307.342 39.6006 309.566 40.2056 311.523 41.4156C313.479 42.6256 315.027 44.2796 316.165 46.3786C317.304 48.4776 317.873 50.8616 317.873 53.5286C317.873 56.1986 317.304 58.5816 316.165 60.6806C315.027 62.7436 313.479 64.3806 311.523 65.5906C309.566 66.7646 307.342 67.3506 304.852 67.3506ZM303.411 61.3746C305.581 61.3746 307.378 60.6446 308.801 59.1866C310.224 57.7276 310.936 55.8416 310.936 53.5296C310.936 51.2166 310.224 49.3136 308.801 47.8196C307.378 46.3246 305.581 45.5776 303.411 45.5776C301.205 45.5776 299.391 46.3246 297.968 47.8196C296.58 49.2776 295.886 51.1636 295.886 53.4756C295.886 55.7886 296.58 57.6916 297.968 59.1856C299.391 60.6456 301.205 61.3746 303.411 61.3746ZM334.915 67.3506C332.567 67.3506 330.504 66.9776 328.725 66.2306C326.946 65.4476 325.523 64.3806 324.456 63.0286C323.388 61.6766 322.748 60.1116 322.534 58.3326H329.419C329.632 59.3646 330.201 60.2536 331.126 61.0006C332.087 61.7126 333.314 62.0676 334.809 62.0676C336.303 62.0676 337.388 61.7656 338.064 61.1606C338.775 60.5556 339.131 59.8626 339.131 59.0796C339.131 57.9406 338.633 57.1756 337.637 56.7846C336.641 56.3576 335.253 55.9486 333.474 55.5576C332.306 55.3009 331.149 54.9983 330.006 54.6506C328.832 54.2946 327.746 53.8496 326.75 53.3156C325.79 52.7466 325.007 52.0356 324.402 51.1816C323.797 50.2916 323.495 49.2066 323.495 47.9256C323.495 45.5776 324.42 43.6036 326.27 42.0026C328.156 40.4016 330.788 39.6006 334.168 39.6006C337.299 39.6006 339.789 40.3306 341.639 41.7886C343.525 43.2476 344.646 45.2586 345.002 47.8186H338.544C338.153 45.8626 336.676 44.8846 334.115 44.8846C332.834 44.8846 331.838 45.1336 331.126 45.6316C330.45 46.1296 330.112 46.7516 330.112 47.4986C330.112 48.2816 330.628 48.9046 331.66 49.3666C332.692 49.8296 334.061 50.2566 335.769 50.6476C337.619 51.0746 339.309 51.5546 340.839 52.0886C342.404 52.5866 343.65 53.3516 344.575 54.3836C345.5 55.3796 345.962 56.8206 345.962 58.7056C345.998 60.3426 345.571 61.8186 344.681 63.1356C343.792 64.4516 342.511 65.4836 340.839 66.2306C339.167 66.9776 337.192 67.3506 334.915 67.3506ZM57.0296 67.6906H84.8786C85.7636 67.6906 86.6326 67.4616 87.3986 67.0256C88.1623 66.5916 88.7983 65.9642 89.2426 65.2066C89.6839 64.4529 89.9163 63.5952 89.916 62.7218C89.9156 61.8484 89.6825 60.9909 89.2406 60.2376L70.5376 28.2936C70.0931 27.5363 69.4572 26.9093 68.6936 26.4756C67.9259 26.0384 67.0576 25.8085 66.1741 25.8085C65.2907 25.8085 64.4224 26.0384 63.6546 26.4756C62.8914 26.9094 62.2558 27.5364 61.8116 28.2936L57.0286 36.4676L47.6786 20.4846C47.2338 19.7272 46.5975 19.1002 45.8336 18.6666C45.0658 18.2297 44.1976 18 43.3141 18C42.4307 18 41.5625 18.2297 40.7946 18.6666C40.0308 19.1002 39.3945 19.7272 38.9496 20.4846L15.6756 60.2376C15.2336 60.991 15.0004 61.8487 15 62.7223C14.9996 63.5959 15.2322 64.4537 15.6736 65.2076C16.1181 65.9649 16.7541 66.5919 17.5176 67.0256C18.2856 67.4624 19.1541 67.6919 20.0376 67.6916H37.5196C44.4456 67.6916 49.5536 64.6916 53.0696 58.8386L61.6016 44.2656L66.1726 36.4676L79.8896 59.8926H61.6016L57.0286 67.6916L57.0296 67.6906ZM37.2346 59.8846L25.0346 59.8816L43.3226 28.6506L52.4476 44.2666L46.3376 54.7046C44.0036 58.5016 41.3516 59.8856 37.2346 59.8856V59.8846Z" fill="black"/>
</svg>
</a>
`

export default defineConfig({

  outputDir: './',

  // Providers configs
  github: {
    login: 'harlan-zw',
  },

  onSponsorsFetched(sponsors) {
    // remove duplicate nuxt
    const index = sponsors.findIndex(s => s.sponsor.name === 'Nuxt')
    sponsors.splice(index, 1)
    console.log(sponsors)
  },
  // Rendering configs
  width: 800,
  formats: ['json', 'svg', 'png'],
  tiers: [
    // Past sponsors, currently only supports GitHub
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: "Backers",
      preset: presets.base
    },
    {
      title: "Sponsors",
      monthlyDollars: 5,
      preset: presets.medium
    },
    {
      title: "Gold Sponsors",
      monthlyDollars: 25,
      preset: presets.large
    },
    {
      title: 'Special Sponsor',
      monthlyDollars: Infinity,
      composeAfter(compose,_,config) {
        compose
          .addSpan(20)
          .addText('Special Sponsor', 'sponsorkit-tier-title')
          .addSpan(10)
          .addRaw(NUXT_LOGO(config.width, compose.height))
          .addSpan(140)
      }
    },
  ],
})
