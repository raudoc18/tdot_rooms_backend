module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/rooms/:slug',
      handler: 'room.findOne',
      config: {
        auth: false
      }
    }
  ]
}