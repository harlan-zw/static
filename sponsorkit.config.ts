import { defineConfig, tierPresets } from 'sponsorkit'

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
      preset: tierPresets.xs,
    },
    {
      title: "Backers",
      preset: tierPresets.base
    },
    {
      title: "Sponsors",
      monthlyDollars: 5,
      preset: tierPresets.medium
    },
    {
      title: "Gold Sponsors",
      monthlyDollars: 25,
      preset: tierPresets.large
    },
    // {
    //   title: 'Special Sponsor',
    //   monthlyDollars: Infinity,
    //   composeAfter(compose,_,config) {
    //     compose
    //       .addSpan(20)
    //       .addText('Special Sponsor', 'sponsorkit-tier-title')
    //       .addSpan(10)
    //       .addRaw(NUXT_LOGO(config.width, compose.height))
    //       .addSpan(140)
    //   }
    // },
  ],
})
