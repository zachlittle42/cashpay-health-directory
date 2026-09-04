/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // /dexa (legacy category page) and /dexa-scans (directory hub) competed for the
      // same query set — /dexa carried 40% of Google impressions while /dexa-scans held
      // the better position. Consolidated 2026-08-20: one URL owns the dexa intent.
      { source: '/dexa', destination: '/dexa-scans', permanent: true },
      // /destinations has no index page; country children live at /destinations/{country}.
      // The real hub is /medical-tourism. Permanent so the 404 consolidates onto that hub.
      { source: '/destinations', destination: '/medical-tourism', permanent: true },
    ];
  },
};

export default nextConfig;
