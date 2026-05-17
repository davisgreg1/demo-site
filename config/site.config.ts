import { siteConfigSchema } from "./site.schema";

const config = {
  business: {
    name: "Pioneer Plumbing",
    legalName: "Pioneer Plumbing LLC",
    tagline: "Atlanta’s trusted 24/7 plumbing team for homes and businesses.",
    phone: "+14045550123",
    phoneDisplay: "(404) 555-0123",
    email: "hello@pioneerplumbing.com",
    address: {
      street: "1450 Peachtree St NE",
      city: "Atlanta",
      state: "GA",
      zip: "30309",
    },
    serviceAreas: ["Atlanta", "Decatur", "Marietta", "Sandy Springs", "Alpharetta"],
    hours: {
      monday: { open: "07:00", close: "19:00" },
      tuesday: { open: "07:00", close: "19:00" },
      wednesday: { open: "07:00", close: "19:00" },
      thursday: { open: "07:00", close: "19:00" },
      friday: { open: "07:00", close: "19:00" },
      saturday: { open: "08:00", close: "16:00" },
      sunday: { closed: true },
    },
    licenseNumber: "GA Plumbing #12345",
    yearFounded: 2008,
  },
  social: {
    facebook: "https://facebook.com/pioneerplumbingatlanta",
    instagram: "https://instagram.com/pioneerplumbingga",
    google: "https://g.page/pioneerplumbing",
  },
  seo: {
    primaryKeywords: ["plumber atlanta", "emergency plumber"],
    googleBusinessProfileId: "gBizProfile12345",
    googleAnalyticsId: "G-XXXXXX",
  },
  urls: {
    canonical: "https://pioneerplumbingatl.com",
  },
} as const;

export const siteConfig = siteConfigSchema.parse(config);
export type SiteConfig = typeof siteConfig;
