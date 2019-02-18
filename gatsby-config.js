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
    }
  ]
}; 