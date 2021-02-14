module.exports = () => {
    const data = { product_listings: [] }
    // Create 500 users
    for (let i = 0; i < 500; i++) {
      data.product_listings.push({ id: i, body_html: "The iPod Touch has the iPhone's multi-touch interface, with a physical home button off the touch screen. The home screen has a list of buttons for the available applications.", title: `Product${i}`, vendor: 'Apple' , images : "", price : `USD${i*2}`})
    }
    return data
  }
