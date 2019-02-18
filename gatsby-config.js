module.exports = {
  siteMetadata: {
    title: `Gatsby Weather App`,
  },
  plugins: [
    
    {
      resolve: 'gatsby-source-openweathermap',
      options: {
        apikey: '45a7db89e2910b3f2bb75ea7a0bd5eb8',
        location: 'New York',
        units: 'imperial',
        type: 'weather'
      },
    },
    
    {
      resolve: 'gatsby-source-darksky',
      options: {
        key: '46da3b60101841b35a75ab3bf89b4de7',
        latitude: '43.09',
        longitude: '-84.99',
        exclude: ['minutely']
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "GatsbyWeatherApp ",
        short_name: "GatsbyWeatherApp",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
      },
    }
    
  ]
}; 